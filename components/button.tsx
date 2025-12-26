import { ComponentType } from 'react';
import Link from 'next/link';

interface ButtonProps {
  icon: ComponentType<{ className?: string }>;
  name: string;
  href: string;
  className?: string;
}

export function Button({ 
  icon: Icon, 
  name, 
  href, 
  className = '' 
}: ButtonProps) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center gap-2 p-2 rounded-lg transition-colors hover:bg-slate-800 ${className}`}
    >
      <Icon className="w-5 h-5 text-slate-300" />
      <span className="text-slate-300">{name}</span>
    </Link>
  );
}
