import { jetbrainsMono } from "@/lib/fonts";
import { GitHub, Globe } from "./icons";

export type SocialLink = {
  name: string;
  url: string;
  icon: JSX.Element;
};

type AboutMeProps = {
  name: string;
  description: string;
  socialLinks: SocialLink[];
};

export function AboutMe({ name, description, socialLinks }: AboutMeProps) {
  return (
    <div className="max-w-2xl py-16 pl-4 pr-4 sm:pl-6 lg:pl-16">
      <div className="text-left">
        <h1 className={`text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-10 pb-[10px]`}>
          Hi, I'm <span className="text-slate-400">{name}</span>
        </h1>
				<span className={`${jetbrainsMono.className} font-semibold text-2xl text-slate-500 leading-10`}>aka leycm</span>
			
				<p className="text-xl text-slate-300 max-w-[50ch] mt-4 mb-6">{description}</p>
        
        <div className="mt-10 flex items-center gap-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label={link.name}
            >
              <span className="sr-only">{link.name}</span>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
