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
    <div className={`${inter.className} w-full h-full group flex flex-col p-6 rounded-xl transition-all duration-300 border border-slate-800/50 `}>
      <div className="flex justify-between items-start">
        <span className={`${jetbrainsMono.className} font-semibold text-2xl text-slate-400 leading-8`}>
          <span style={{ color: tech.color }}>* </span> {tech.name}
        </span>
        <div 
          style={{ 
            color: tech.color,
            backgroundColor: `${tech.color}15`
          }} 
          className="p-3 rounded-lg transition-transform duration-300 group-hover:scale-105"
        >
          {tech.icon}
        </div>
      </div>
      
      <div className="mt-4 space-y-3 flex-1 flex flex-col">
        <p className="flex-1">
          <span className="text-slate-400">
            <span style={{ color: tech.color, fontWeight: 500 }}>{tech.name}</span> is {getIndefiniteArticle(tech.description)}
          </span>
          <span className="text-slate-300"> {tech.description}</span>
        </p>
        
        <p>
          <span className="text-slate-400">
            I use <span style={{ color: tech.color, fontWeight: 500 }}>{tech.name}</span>
          </span>
          <span className="text-slate-300"> {tech.usecase}</span>
        </p>
        
        <p className="mb-2">
          <span className="text-slate-400">
            I am
          </span>
          <span className="text-slate-300"> {tech.familiarity}</span>
        </p>
        
      </div>
    </div>
  );
}