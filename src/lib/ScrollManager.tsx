'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ScrollManager() {
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Save scroll position before navigation
    const handleScroll = () => {
      sessionStorage.setItem(`scrollPos-${pathname}`, window.scrollY.toString());
    };

    // Listen to both beforeunload and scroll events
    window.addEventListener('beforeunload', handleScroll);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('beforeunload', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Restore scroll position after navigation
    const savedPosition = sessionStorage.getItem(`scrollPos-${pathname}`);
    if (savedPosition !== null) {
      // Use timeout to ensure DOM is fully rendered
      timeoutRef.current = setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem(`scrollPos-${pathname}`);
      }, 50);
    }

    return () => {
      // Clear timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname]);

  return null;
}