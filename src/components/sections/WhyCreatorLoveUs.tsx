'use client';
import Image from 'next/image';
import { Heart, MessageSquare, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  fadeInLeft, 
  fadeInRight, 
  popIn, 
  containerVariants,
  childVariants
} from '@/lib/animations';

const FeatureListItem = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <motion.div 
    variants={childVariants}
    className="flex items-start gap-4"
    whileHover={{ x: 10 }}
  >
    <motion.div 
      animate={{ 
        rotate: [0, -10, 0, 10, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-panel-accent border-2 border-primary"
    >
      <Icon className="h-6 w-6 text-primary" />
    </motion.div>
    <div>
      <h3 className="text-2xl font-bold font-heading tracking-widest text-primary">
        {title}
      </h3>
      <p className="mt-1 font-body text-base text-foreground/80 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const WhyCreatorsLoveUs = () => {
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
      id='why-us' 
      className="w-full bg-background"
    >
      <div className="container mx-auto grid grid-cols-1 items-stretch gap-8 px-4 lg:grid-cols-5">
        {/* Left Column - Feature List */}
        <motion.div 
          variants={fadeInLeft}
          className="lg:col-span-3"
        >
          <div className="relative h-full">
            <div className="absolute -top-1 -left-1 w-full h-full bg-primary"></div>
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(255, 153, 0, 0.3)" }}
              className="relative bg-panel-base border-3 border-primary p-8 h-full"
            >
              <motion.h2 
                variants={popIn}
                className="text-5xl font-bold font-heading text-primary tracking-widest mb-8"
              >
                A Platform Built for You
              </motion.h2>
              
              <motion.div 
                variants={containerVariants}
                className="space-y-6"
              >
                <FeatureListItem 
                  icon={Heart} 
                  title="Direct & Meaningful"
                  description="Receive support directly from your audience. No algorithms, no ads."
                />
                <FeatureListItem 
                  icon={Palette} 
                  title="Your Brand, Your Space"
                  description="Customize your page to match your unique style and creative identity."
                />
                <FeatureListItem 
                  icon={MessageSquare} 
                  title="Engage Community"
                  description="Share updates and exclusive content to build a loyal following."
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Character Spotlight Panel */}
        <motion.div 
          variants={fadeInRight}
          className="lg:col-span-2"
        >
          <div className="relative h-full min-h-[500px]">
            <div className="absolute -top-1 -right-1 w-full h-full bg-primary"></div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-full w-full border-3 border-primary bg-panel-base p-4 overflow-hidden"
            >
              <Image
                src="/artist.jpg"
                alt="An anime-style artist smiling"
                className="w-full h-full object-cover border-2 border-primary"
                fill
              />
              
              {/* Manga Caption Box */}
              <motion.div 
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="relative bg-panel-base border-2 border-primary p-3">
                  <p className="font-body text-center font-bold text-primary text-sm">
                    FOCUS ON YOUR ART. <br/> WE&apos;LL HANDLE THE REST.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyCreatorsLoveUs;