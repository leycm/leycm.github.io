import { inter, jetbrainsMono } from "@/lib/fonts";

export type Tech = {
  name: string;
  description: string;
  usecase: string;
  familiarity: string;
  color: string;
  icon: JSX.Element;
};

/**
 * Returns "a" or "an" based on the first letter of the text
 */
function getIndefiniteArticle(text: string) {
  if (!text) return "a";
  return /^[aeiou]/i.test(text.trim()) ? "an" : "a";
}

interface TechProps {
  tech: Tech;
}

export function Tech({ tech }: TechProps) {
  return (
    <div className={`${inter.className} w-[320px] group flex flex-col p-4 rounded-lg transition-colors duration-200 hover:bg-slate-800/30`}>
      <div className="flex justify-between items-start">
        <span className={`${jetbrainsMono.className} font-semibold text-2xl text-slate-500 leading-10`}>
          <span style={{ color: tech.color }}>* </span> {tech.name}
        </span>
        <div style={{ color: tech.color }} className="text-4xl h-16 flex items-center">{tech.icon}</div>
      </div>
      <div className="mt-2 space-y-2">

        <p>
          <span className="text-lg text-slate-500 color-inherit">
            <span style={{ color: tech.color }}>{tech.name}</span> is {getIndefiniteArticle(tech.description)}
          </span>
          <span className="text-lg text-slate-300"> {tech.description}</span>
        </p>
        
        <p>
          <span className="text-lg text-slate-500 color-inherit">
            I use <span style={{ color: tech.color }}>{tech.name}</span>
          </span>
          <span className="text-lg text-slate-300"> {tech.usecase}</span>
        </p>
        
        <p>
          <span className="text-lg text-slate-500 color-inherit">
            I am
          </span>
          <span className="text-lg text-slate-300"> {tech.familiarity}</span>
        </p>
        
      </div>
    </div>
  );
}