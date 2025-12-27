import { jetbrainsMono } from "@/lib/fonts";
import Image from "next/image";
import { GitHubStats } from "./github-stats";
import { Button } from "./button";
import { StaticImageData } from "next/image";

export type SocialLink = {
  name: string;
  url: string;
  icon: JSX.Element;
  username?: string;
};

type AboutMeProps = {
  name: string;
  description: string;
  socialLinks: SocialLink[];
  image?: StaticImageData;
};

export function AboutMe({ name, description, socialLinks, image }: AboutMeProps) {
  return (
    <div className="max-w-4xl mx-4 sm:ml-8 mb-8 sm:mb-16 mt-8 sm:mt-16 py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
        {/* Profile Picture - Hidden on mobile */}
        <div className="hidden md:flex flex-col gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-lg overflow-hidden">
            {image? (
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                <span className="text-slate-500 text-4xl">{name.charAt(0)}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 w-full">
          <div className="mb-4 sm:mb-6">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight`}>
              Hi, I&apos;m <span className="text-slate-400">{name}</span>
            </h1>
            <span className={`${jetbrainsMono.className} font-semibold text-xl sm:text-2xl text-slate-500`}>
              aka leycm
            </span>
          </div>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
            {description}
          </p>
          
        
        </div>
      </div>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            icon={() => link.icon}
            name={link.username || link.name}
            href={link.url}
            className="bg-slate-800 hover:bg-slate-700 text-sm sm:text-base"
          />
        ))}
      </div>
      <div className="mt-8 sm:mt-12">
        <GitHubStats username="leycm" />
      </div>
    </div>
    
  );
}
