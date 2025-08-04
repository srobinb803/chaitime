'use client';
import { ReactNode, useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animationClass?: string;
  delay?: string;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  animationClass = 'animate-fade-in',
  delay = '0ms',
  threshold = 0.1
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.animationDelay = delay;
            element.classList.add(animationClass);
            element.classList.add('animate-visible'); // For child animations
            
            // Don't unobserve - we want to keep tracking for child animations
          }
        });
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationClass, delay, threshold]);

  return (
    <div ref={sectionRef} className="opacity-0">
      {children}
    </div>
  );
};

export default AnimatedSection;