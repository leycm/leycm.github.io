import { jetbrainsMono } from "@/lib/fonts";
import type { TagType } from "@/app/tags";
import { Globe } from "@/components/icons";
import Carousel from "./carousel";
import { StaticImageData } from "next/image";
import { GitHub } from "./icons";
import { Button } from "./button";

export function ExperienceAndProjects({ children }: { children: React.ReactNode; }) {
	return (
		<div className="h-max w-full px-16 pb-16 grid grid-cols-[auto_1fr] gap-x-16">
			{children}
		</div>
	);
}

export function TimelineStart() {
	return (
		<>
			<div className="w-0.5 bg-gradient-to-b from-transparent to-border" />
			<div className="w-64 h-16" />
		</>
	);
}

export function TimelineEnd() {
	return (
		<>
			<div className="w-0.5 bg-gradient-to-b from-border to-transparent" />
			<div className="w-64 h-32" />
		</>
	);
}

export function Experience({ title, content, time, state, tags, github, images, website }: { title: string; content: string; time: string; state?: string; tags?: TagType[]; github?: string; images?: StaticImageData[], website?: string; }) {
	return (
		<>
			<div className="w-0.5 transition-all duration-500 bg-gradient-to-b from-border to-border relative from-25% to-75%">
				<div className="absolute transition-opacity opacity-0 left-0 top-0 w-0.5 h-full duration-300 bg-gradient-to-b from-border to-border via-slate-500 from-25% to-75%" />
 				<div className="absolute left-1/2 top-1/2 w-4 h-4 bg-border -translate-x-1/2 -translate-y-1/2 rounded-full">
					<div className="w-3 h-3 bg-background rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
				</div>
 				<div className="absolute opacity-0 transition-opacity duration-300 left-1/2 top-1/2 w-4 h-4 bg-slate-500 -translate-x-1/2 -translate-y-1/2 rounded-full">
					<div className="w-3 h-3 bg-background rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
				</div>
			</div>
			<div className="w-full flex flex-col justify-center experience-content pb-16">
				<span className={`${jetbrainsMono.className} font-semibold text-2xl text-slate-500`}>{state ? `${time} * ${state}` : time}</span>
				<h2 className="font-semibold text-4xl">{title}</h2>

				{images && images.length > 0 && (
					<Carousel images={images} title={title} />
				)}

				<p className="text-xl text-slate-300 max-w-[50ch] mt-4 mb-6">{content}</p>

				{(github || website || (tags && tags.length > 0)) && (
					<div className="flex flex-row flex-wrap max-w-[70ch] items-center gap-2">
						{github && (
								<Button
									icon={() => <GitHub size={20} />}
									name="View on GitHub"
									href={github}
								/>
							)}
							{website && (
								<Button
									icon={() => <Globe size={20} />}
									name="Visit Website"
									href={website}
								/>
							)}
							{(github || website) && tags && tags.length > 0 && (
								<div className="h-1.5 w-1.5 mx-4 rounded-full bg-slate-500"></div>
							)}
							{tags?.map((tag, index) => (
								<Tag key={index} tag={tag} />
							))}
						</div>
					)}
			</div>
		</>
	);
}

function Tag({ tag }: { tag: TagType | undefined }) {
  if (!tag) return null;

  const content = (
    <>
      {tag.icon && <span>{tag.icon}</span>}
      <span>{tag.name}</span>
    </>
  );

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
