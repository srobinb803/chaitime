'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  fadeInUp, 
  popIn, 
  containerVariants,
  childVariants,
  rotateVariants
} from '@/lib/animations';
import { useState } from 'react';

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
  rotation 
}: { 
  quote: string, 
  name: string, 
  handle: string, 
  imageSrc: string, 
  panelColor: string, 
  rotation: string 
}) => {
  const [imgSrc, setImgSrc] = useState(imageSrc);
  const initials = getInitials(name);
  const [isPlaceholder, setIsPlaceholder] = useState(false);
  
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
    <motion.div 
      variants={childVariants}
      className={`relative ${rotation}`}
    >
      <div className="absolute -top-1.5 -left-1.5 w-full h-full bg-primary"></div>
      <motion.div 
        whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(255, 153, 0, 0.3)" }}
        className={`relative flex h-full flex-col justify-between ${panelColor} border-3 border-primary p-6`}
      >
        <blockquote className="font-body text-base italic text-primary">
          “{quote}”
        </blockquote>
        <div className="mt-6 flex items-center gap-4">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                damping: 10,
                stiffness: 200
              }}
            >
              <Image 
                src={imgSrc} 
                alt={`Testimonial from ${name}`} 
                width={60}
                height={60} 
                className="rounded-full border-2 border-primary"
                onError={handleImageError}
                unoptimized={isPlaceholder} 
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ 
                duration: 0.8,
                delay: 0.5
              }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-primary"
            ></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.3,
              duration: 0.5
            }}
          >
            <p className="font-heading text-lg font-bold text-primary">{name}</p>
            <p className="font-body text-sm text-primary/70">{handle}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      id='testimonials' 
      className="w-full bg-background py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={popIn}
          className="relative mb-12"
        >
          <div className="absolute -top-2 -left-2 w-full h-full bg-primary transform rotate-1"></div>
          <div className="relative bg-panel-base border-4 border-primary p-4 text-center">
            <h2 className="text-5xl font-bold font-heading text-primary tracking-wider">
              From the Community
            </h2>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          <TestimonialCard
            quote="CHAITime made it so easy to connect with my readers. The support has been overwhelming and lets me focus on writing."
            name="Anya Kim"
            handle="@anyakim_writes"
            imageSrc="/invalid-image.jpg"
            panelColor="bg-panel-highlight"
            rotation="transform rotate-1"
          />
          <TestimonialCard
            quote="I love how simple and beautiful my page is. It feels personal, not corporate. My fans love the exclusive art I post here."
            name="Leo Martinez"
            handle="@leos_doodles"
            imageSrc="/another-bad-path.png"
            panelColor="bg-panel-accent"
            rotation="transform -rotate-2"
          />
          <TestimonialCard
            quote="The direct donations have been a game-changer. It's the most straightforward and heartfelt way to receive support."
            name="Chloe Garcia"
            handle="@CeeCeePlays"
            imageSrc="/hero-image.jpg"
            panelColor="bg-panel-warning"
            rotation="transform rotate-2"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;