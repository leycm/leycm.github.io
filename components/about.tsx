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
    <div className="max-w-4xl ml-8 mb-16 mt-16 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="flex flex-col gap-8">
          {/* Profile Picture */}
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
        <div className="flex-1">
          <div className="mb-6">
            <h1 className={`text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-10`}>
              Hi, I'm <span className="text-slate-400">{name}</span>
            </h1>
            <span className={`${jetbrainsMono.className} font-semibold text-2xl text-slate-500 leading-10`}>
              aka leycm
            </span>
          </div>
          
          <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
            {description}
          </p>
          
        </div>
      </div>

      <div className="space-y-14">
        <div className="flex flex-wrap gap-4 max-w-3xl">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              icon={() => link.icon}
              name={link.username || link.name}
              href={link.url}
              className="bg-slate-800 hover:bg-slate-700"
            />
          ))}
        </div>
        <div className="space-y-34"></div>
        {/* GitHub Stats */}
        <GitHubStats username="leycm" />
      </div>
    </div>
    
  );
}
