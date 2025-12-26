// lib/github-stats.ts
interface GitHubStats {
  commits: number;
  issues: number;
  pullRequests: number;
  stars: number;
  followers: number;
  contributions: number;
}

const CACHE_DURATION = 1000 * 60 * 60 * 2; // 2 hours cache

let cachedStats: (GitHubStats & { lastUpdated: number }) | null = null;

export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  if (cachedStats && Date.now() - cachedStats.lastUpdated < CACHE_DURATION) {
    console.log('Returning cached GitHub stats');
    return cachedStats;
  }

  try {
    console.log('Fetching fresh GitHub stats for user:', username);
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json'
    };

    if (process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      headers['Authorization'] = `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`;
    }

    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
            totalPullRequestContributions
            totalIssueContributions
            contributionCalendar {
              totalContributions
            }
          }
          repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
            totalCount
            nodes {
              stargazers {
                totalCount
              }
            }
          }
          followers {
            totalCount
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables: { username }
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`GitHub API error: ${response.status} ${JSON.stringify(error)}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      throw new Error(`GitHub API error: ${errors[0].message}`);
    }

    if (!data?.user) {
      throw new Error('No user data found');
    }

    const user = data.user;
    const contributions = user.contributionsCollection;
    const stars = user.repositories.nodes.reduce(
      (total: number, repo: any) => total + repo.stargazers.totalCount, 
      0
    );

    const stats = {
      commits: contributions.totalCommitContributions + contributions.restrictedContributionsCount,
      issues: contributions.totalIssueContributions,
      pullRequests: contributions.totalPullRequestContributions,
      stars,
      followers: user.followers.totalCount,
      contributions: contributions.contributionCalendar.totalContributions
    };

    console.log('Fetched GitHub stats:', stats);
    
    cachedStats = {
      ...stats,
      lastUpdated: Date.now()
    };

    return stats;
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    if (cachedStats) {
      console.log('Using stale cache due to error');
      return cachedStats;
    }
    return {
      commits: 0,
      issues: 0,
      pullRequests: 0,
      stars: 0,
      followers: 0,
      contributions: 0
    };
  }
}