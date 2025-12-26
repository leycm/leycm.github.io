'use client';

import { GitCommitHorizontal, Bug, GitPullRequest, Star, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchGitHubStats } from '@/lib/github-stats';

interface GitHubStatsProps {
  username: string;
}

export function GitHubStats({ username }: GitHubStatsProps) {
  const [stats, setStats] = useState({
    commits: 0,
    issues: 0,
    pullRequests: 0,
    stars: 0,
    followers: 0,
    contributions: 0,
    loading: true,
    error: null as string | null
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        setStats(prev => ({ ...prev, loading: true }));
        const data = await fetchGitHubStats(username);
        setStats(prev => ({
          ...prev,
          ...data,
          loading: false,
          error: null
        }));
      } catch (error) {
        console.error('Failed to load GitHub stats:', error);
        setStats(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to load GitHub stats'
        }));
      }
    };

    loadStats();
  }, [username]);

  if (stats.error) {
    return (
      <div className="mt-14 lg:mt-20">
        <p className="text-sm text-red-400">
          Couldn't load GitHub stats. {stats.error}
        </p>
      </div>
    );
  }

  const StatItem = ({ 
    icon: Icon, 
    label, 
    value,
    className = ''
  }: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: number | string;
    className?: string;
  }) => (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-1 lg:gap-2">
        <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-slate-300" />
        <p className="text-xs lg:text-sm text-slate-400">{label}</p>
      </div>
      <span className="inline-block tracking-wider text-white font-mono font-bold text-xl lg:text-2xl">
        {stats.loading ? '...' : value.toLocaleString()}
      </span>
    </div>
  );

  return (
    <div className="mt-12 lg:mt-12 opacity-100">
      <h2 className="text-sm lg:text-lg mb-4 text-slate-400 font-medium">
        {stats.loading ? 'Loading GitHub Stats...' : 'GitHub Activity (last 12 months)'}
      </h2>
      <div className="max-w-2xl grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatItem 
          icon={GitCommitHorizontal} 
          label="Commits" 
          value={stats.commits} 
        />
        <StatItem 
          icon={Bug} 
          label="Issues" 
          value={stats.issues} 
        />
        <StatItem 
          icon={GitPullRequest} 
          label="PRs" 
          value={stats.pullRequests} 
        />
        <StatItem 
          icon={Star} 
          label="Stars" 
          value={stats.stars} 
        />
        <StatItem 
          icon={Users} 
          label="Followers" 
          value={stats.followers} 
        />
      </div>
    </div>
  );
}