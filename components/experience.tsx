import { jetbrainsMono } from "@/lib/fonts";
import type { TagType } from "@/app/tags";
import { Globe } from "@/components/icons";
import Carousel from "./carousel";
import { StaticImageData } from "next/image";
import { GitHub } from "./icons";
import { Button } from "./button";

export function ExperienceAndProjects({ children }: { children: React.ReactNode; }) {
	return (
		<div className="h-max w-full px-4 sm:px-8 md:px-12 lg:px-16 pb-8 sm:pb-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-4 lg:gap-x-16">
			{children}
		</div>
	);
}

export function TimelineStart() {
	return (
		<>
			<div className="hidden lg:block w-0.5 bg-gradient-to-b from-transparent to-border" />
			<div className="hidden lg:block w-64 h-16" />
		</>
	);
}

export function TimelineEnd() {
	return (
		<>
			<div className="hidden lg:block w-0.5 bg-gradient-to-b from-border to-transparent" />
			<div className="hidden lg:block w-64 h-32" />
		</>
	);
}

export function Experience({ title, content, time, state, tags, github, images, website }: { title: string; content: string; time: string; state?: string; tags?: TagType[]; github?: string; images?: StaticImageData[], website?: string; }) {
	return (
		<>
			{/* Timeline - Hidden on mobile, shown on lg and up */}
			<div className="hidden lg:block w-0.5 transition-all duration-500 bg-gradient-to-b from-border to-border relative from-25% to-75%">
				<div className="absolute transition-opacity opacity-0 left-0 top-0 w-0.5 h-full duration-300 bg-gradient-to-b from-border to-border via-slate-500 from-25% to-75%" />
 				<div className="absolute left-1/2 top-1/2 w-4 h-4 bg-border -translate-x-1/2 -translate-y-1/2 rounded-full">
					<div className="w-3 h-3 bg-background rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
				</div>
 				<div className="absolute opacity-0 transition-opacity duration-300 left-1/2 top-1/2 w-4 h-4 bg-slate-500 -translate-x-1/2 -translate-y-1/2 rounded-full">
					<div className="w-3 h-3 bg-background rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
				</div>
			</div>

			{/* Content */}
			<div className="w-full flex flex-col justify-center pb-8 sm:pb-12 lg:pb-16">
				{/* Time and State */}
				<span className={`${jetbrainsMono.className} font-semibold text-lg sm:text-xl lg:text-2xl text-slate-500`}>
					{state ? `${time} * ${state}` : time}
				</span>
				
				{/* Title */}
				<h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mt-1 sm:mt-2">{title}</h2>

				{/* Carousel */}
				{images && images.length > 0 && (
					<div className="mt-3 sm:mt-4">
						<Carousel images={images} title={title} />
					</div>
				)}

				{/* Description */}
				<p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-full lg:max-w-[50ch] mt-3 sm:mt-4 mb-4 sm:mb-6">
					{content}
				</p>

				{/* Buttons and Tags */}
				{(github || website || (tags && tags.length > 0)) && (
					<div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 max-w-full lg:max-w-[70ch] items-start sm:items-center">
						{/* GitHub Button */}
						{github && (
							<Button
								icon={() => <GitHub size={18} />}
								name="GitHub"
								href={github}
								className="text-sm sm:text-base"
							/>
						)}

						{/* Website Button */}
						{website && (
							<Button
								icon={() => <Globe size={18} />}
								name="Website"
								href={website}
								className="text-sm sm:text-base"
							/>
						)}

						{/* Separator - Only show if both buttons and tags exist */}
						{((github || website) && tags && tags.length > 0) && (
							<div className="hidden sm:block h-1.5 w-1.5 mx-1 rounded-full bg-slate-500"></div>
						)}

						{/* Tags */}
						<div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
							{tags?.map((tag, index) => (
								<Tag key={index} tag={tag} />
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
}

function Tag({ tag }: { tag: TagType | undefined }) {
  if (!tag) return null;

  if (tag.url) {
    const Icon = tag.icon ? () => <>{tag.icon}</> : () => null;
    return (
      <Button
        icon={Icon}
        name={tag.name}
        href={tag.url}
      />
    );
  }

  return (
      <Button
        icon={() => <>{tag.icon}</>}
        name={tag.name}
        href="#"
      />
  );
}
