'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// Helper function to get initials
const getInitials = (name: string) => {
  const names = name.split(' ');
  const initials = names.map(n => n[0]).join('');
  return initials.slice(0, 2).toUpperCase();
};

const TestimonialCard = ({ 
  quote, 
  name, 
  handle, 
  imageSrc, 
  panelColor, 
  rotation,
  delay = "0ms" // Add delay prop
}: { 
  quote: string, 
  name: string, 
  handle: string, 
  imageSrc: string, 
  panelColor: string, 
  rotation: string,
  delay?: string
}) => {
  const [imgSrc, setImgSrc] = useState(imageSrc);
  const initials = getInitials(name);
  const [isPlaceholder, setIsPlaceholder] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const bgColor = panelColor === 'bg-panel-highlight' 
    ? 'fef3c7' 
    : panelColor === 'bg-panel-accent' 
    ? 'ffedd5' 
    : 'fee2e2';
  
  const textColor = '111827';
  const placeholderUrl = `https://placehold.co/60x60/${bgColor}/${textColor}?text=${initials}`;

  const handleImageError = () => {
    setImgSrc(placeholderUrl);
    setIsPlaceholder(true);
  };

  return (
    <div 
      ref={cardRef}
      className={`relative ${rotation} transition-all duration-500 hover:scale-105 hover:z-10`}
      style={{ animationDelay: delay }}
    >
      <div className="absolute -top-1.5 -left-1.5 w-full h-full bg-primary"></div>
      <div className={`relative flex h-full flex-col justify-between ${panelColor} border-3 border-primary p-6 panel-glow`}>
        <blockquote className="font-body text-base italic text-primary animate-fade-in">
          “{quote}”
        </blockquote>
        <div className="mt-6 flex items-center gap-4">
          <div className="relative animate-avatar-pop">
            <Image 
              src={imgSrc} 
              alt={`Testimonial from ${name}`} 
              width={60}
              height={60} 
              className="rounded-full border-2 border-primary"
              onError={handleImageError}
              unoptimized={isPlaceholder} 
            />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-primary animate-ping-once"></div>
          </div>
          <div className="animate-text-pop">
            <p className="font-heading text-lg font-bold text-primary">{name}</p>
            <p className="font-body text-sm text-primary/70">{handle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id='testimonials' 
      className="w-full bg-background py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className={`relative mb-12 ${isVisible ? 'animate-pop-in' : 'opacity-0'}`}>
          <div className="absolute -top-2 -left-2 w-full h-full bg-primary transform rotate-1"></div>
          <div className="relative bg-panel-base border-4 border-primary p-4 text-center">
            <h2 className="text-5xl font-bold font-heading text-primary tracking-wider">
              From the Community
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="TeaTime made it so easy to connect with my readers. The support has been overwhelming and lets me focus on writing."
            name="Anya Kim"
            handle="@anyakim_writes"
            imageSrc="/tea.png"
            panelColor="bg-panel-highlight"
            rotation="transform rotate-1"
            delay="100ms"
          />
          <TestimonialCard
            quote="I love how simple and beautiful my page is. It feels personal, not corporate. My fans love the exclusive art I post here."
            name="Leo Martinez"
            handle="@leos_doodles"
            imageSrc="/another-bad-path.png"
            panelColor="bg-panel-accent"
            rotation="transform -rotate-2"
            delay="300ms"
          />
          <TestimonialCard
            quote="The direct donations have been a game-changer. It's the most straightforward and heartfelt way to receive support."
            name="Chloe Garcia"
            handle="@CeeCeePlays"
            imageSrc="/hero-image.jpg"
            panelColor="bg-panel-warning"
            rotation="transform rotate-2"
            delay="500ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;