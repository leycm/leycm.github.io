"use client";

import React, { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import useEmblaCarousel from "embla-carousel-react";

export function CarouselWrapper({ children }: { children: React.ReactNode; }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false, // Disable dragFree to enable snap behavior
    containScroll: 'trimSnaps',
    align: 'start',
    skipSnaps: false // Ensure it doesn't skip images
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    const updateScroll = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    updateScroll();

    emblaApi.on("select", updateScroll);
    emblaApi.on("init", updateScroll);
    emblaApi.on("scroll", updateScroll);

    return () => {
      emblaApi.off("select", updateScroll);
      emblaApi.off("init", updateScroll);
      emblaApi.off("scroll", updateScroll);
    };
  }, [emblaApi]);

  // Mobile touch indicators
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    // Let embla handle the snap to the nearest slide
    // No need for manual scrolling logic as we're using embla's snap
  };

  return (
    <div 
      className="w-full h-auto relative group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex">
          {children}
        </div>
      </div>
      
      {/* Desktop hover navigation */}
      {!isMobile && (
        <>
          <div 
            className={cn(
              "hidden sm:block absolute w-20 md:w-32 h-full bg-gradient-to-r transition-opacity duration-300",
              canScrollPrev ? "opacity-100" : "opacity-0",
              "from-background/80 to-transparent left-0 top-0 pointer-events-none"
            )}
          />
          <div 
            className={cn(
              "hidden sm:block absolute w-20 md:w-32 h-full bg-gradient-to-l transition-opacity duration-300",
              canScrollNext ? "opacity-100" : "opacity-0",
              "from-background/80 to-transparent right-0 top-0 pointer-events-none"
            )}
          />
          <button 
            aria-label="View Previous Image" 
            className={cn(
              "hidden sm:flex items-center justify-center absolute left-2 md:left-4 top-1/2 -translate-y-1/2",
              "w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm",
              "text-slate-200 hover:text-white transition-colors duration-200",
              "shadow-lg border border-slate-700/50",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-slate-500",
              canScrollPrev ? "opacity-100" : "opacity-0 pointer-events-none"
            )} 
            onClick={scrollPrev}
          >
            <ChevronLeft size={24} className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button 
            aria-label="View Next Image" 
            className={cn(
              "hidden sm:flex items-center justify-center absolute right-2 md:right-4 top-1/2 -translate-y-1/2",
              "w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm",
              "text-slate-200 hover:text-white transition-colors duration-200",
              "shadow-lg border border-slate-700/50",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-slate-500",
              canScrollNext ? "opacity-100" : "opacity-0 pointer-events-none"
            )} 
            onClick={scrollNext}
          >
            <ChevronRight size={24} className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}
      
      {/* Mobile indicators - Only show if more than one image */}
      {isMobile && React.Children.count(children) > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {React.Children.map(children, (_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-slate-600/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
