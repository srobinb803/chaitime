'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = pathname + searchParams.toString();

  useEffect(() => {
    // Save scroll position before unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scrollPos-${pathname}`, window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname]);

  useEffect(() => {
    // Restore scroll position after load
    const savedPosition = sessionStorage.getItem(`scrollPos-${pathname}`);
    if (savedPosition !== null) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem(`scrollPos-${pathname}`);
    }
  }, [pathname, url]);

  return null;
}