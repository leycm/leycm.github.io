import { inter, jetbrainsMono } from "@/lib/fonts";

export type Tech = {
  name: string;
  description: string;
  usage: string;
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
    <div className={`${inter.className} w-full h-full group flex flex-col p-3 sm:p-4 md:p-6 rounded-xl transition-all duration-300 border border-slate-800/50`}>
      {/* Mobile/compact view - always visible */}
      <div className="flex items-center gap-4 md:hidden">
        <div 
          style={{ 
            color: tech.color,
            backgroundColor: `${tech.color}15`
          }} 
          className="p-2 sm:p-3 rounded-lg flex-shrink-0"
        >
          {tech.icon}
        </div>
        <span className={`${jetbrainsMono.className} font-semibold text-xl sm:text-2xl text-slate-400`}>
          <span style={{ color: tech.color }}>*</span> {tech.name}
        </span>
      </div>

      {/* Desktop/tablet view - hidden on mobile */}
      <div className="hidden md:block">
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
            <span className="text-slate-300"> {tech.usage}</span>
          </p>
          
          <p className="mb-2">
            <span className="text-slate-400">
              I am
            </span>
            <span className="text-slate-300"> {tech.familiarity}</span>
          </p>
        </div>
      </div>
    </div>
  );
}