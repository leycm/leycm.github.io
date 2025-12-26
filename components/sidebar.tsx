"use client";

import { jetbrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { useState, useEffect } from 'react';

export function Sidebar({ children, rows }: { children: React.ReactNode; rows: number; }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const sidebarContent = (
    <div className={`h-full px-4 sm:px-8 md:px-12 lg:px-16 w-full lg:w-auto flex flex-col justify-center items-center border-border/50 border-r-2 bg-background lg:bg-transparent transition-all duration-300 ${isMobile ? 'fixed inset-0 z-50' : ''} ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      {isMobile && (
        <button 
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl lg:hidden"
          aria-label="Close menu"
        >
          ✕
        </button>
      )}
      <div className="grid grid-cols-1 place-items-start h-full w-full max-w-md mx-auto lg:max-w-none lg:w-auto" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
        {children}
      </div>
    </div>
  );

  return (
    <>
      {isMobile && (
        <button 
          onClick={toggleMenu}
          className="fixed bottom-4 right-4 z-40 bg-background p-3 rounded-full shadow-lg lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      )}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
      {sidebarContent}
      {isMobile && !isOpen && <div className="lg:hidden w-0" />}
    </>
  );
}

export function SidebarName({ children }: { children: React.ReactNode; }) {
	return (
		<div className="h-full flex flex-col justify-center">
			{children}
		</div>
	);
}

export function SidebarTitle({ children }: { children: React.ReactNode; }) {
	return (
		<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-1 sm:mb-2">
			{children}
		</h1>
	);
}

export function SidebarSubtitle({ children, secondary }: { children: React.ReactNode; secondary?: boolean; }) {
	return (
		<h2 className={cn("text-xl sm:text-2xl lg:text-3xl font-semibold text-nowrap", jetbrainsMono.className, secondary ? "text-slate-700" : "text-slate-500")}>
			{children}
		</h2>
	)
}

export function SidebarNavigation({ children, inter, className }: { children: React.ReactNode; inter?: boolean; className?: string; }) {
	return (
		<div className={cn("h-full w-full flex flex-col justify-center items-start space-y-2 sm:space-y-4", !inter && jetbrainsMono.className, className)}>
			{children}
		</div>
	);
}

export function SidebarNavLink({ children, href }: { children: React.ReactNode; href: string; }) {
	return (
		<a 
      className="text-xl sm:text-2xl lg:text-3xl transition-colors duration-100 font-semibold text-slate-700 hover:text-slate-500 text-nowrap py-1 sm:py-2 block w-full lg:w-auto" 
      href={href} 
      target="_blank" 
      rel="noopener" 
      referrerPolicy="no-referrer"
      onClick={(e) => e.stopPropagation()}
    >
			{children}
		</a>
	)
}

