import { useEffect, useRef, useState } from "react";

export function useObserver(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const observer = useRef<IntersectionObserver>();
  const elements = useRef<Map<string, IntersectionObserverEntry>>(new Map());
  const lastScrollY = useRef(0);
  const isScrollingUp = useRef(false);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        elements.current.set(entry.target.id, entry);
      });

      let closestSection = '';
      let closestDistance = Infinity;
      const viewportHeight = window.innerHeight;
      const targetPosition = viewportHeight * 0.33; // 1/3 from top
      
      elements.current.forEach((entry, id) => {
        if (!entry.isIntersecting) return;
        
        const rect = entry.boundingClientRect;
        let distance: number;
        
        if (isScrollingUp.current) {
          // When scrolling up, prioritize sections that are above or at the target position
          if (rect.top <= targetPosition) {
            distance = targetPosition - rect.top;
          } else {
            // Add a larger penalty for sections below when scrolling up
            distance = (rect.top - targetPosition) * 2 + 1000;
          }
        } else {
          const elementMiddle = rect.top + rect.height * 0.33;
          distance = Math.abs(elementMiddle - targetPosition);
        }
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = id;
        }
      });

      if (closestSection && closestSection !== active) {
        setActive(closestSection);
      }
    };

    observer.current = new IntersectionObserver(handleObserver, {
      threshold: [0, 0.1, 0.5, 1],
      rootMargin: '0px 0px -50% 0px', // Adjust rootMargin to trigger earlier
      root: null
    });

    const elems = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    elems.forEach((elem) => observer.current?.observe(elem));

    const initialEntries = elems.map((elem) => ({
      target: elem,
      isIntersecting: true,
      boundingClientRect: elem.getBoundingClientRect(),
    })) as unknown as IntersectionObserverEntry[];
    handleObserver(initialEntries);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isScrollingUp.current = currentScrollY < lastScrollY.current;
      lastScrollY.current = currentScrollY;
      
      // Special handling for the top of the page
      if (currentScrollY < 50) {
        setActive(ids[0]); // First section (About)
        return;
      }
      
      const entries = Array.from(elements.current.values());
      handleObserver(entries);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids]);

  return active;
}