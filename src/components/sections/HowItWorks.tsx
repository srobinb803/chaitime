'use client';
import { Coffee, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  fadeInUp, 
  popIn, 
  containerVariants,
  childVariants
} from "@/lib/animations";

const FeaturePanel = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <motion.div 
      variants={childVariants}
      className="relative"
    >
      <div className="absolute -top-1 -right-1 w-full h-full bg-primary"></div>
      <motion.div 
        whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(255, 153, 0, 0.3)" }}
        className="relative bg-panel-base border-3 border-primary p-6 h-full"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-12 h-12 bg-panel-highlight border-2 border-primary rounded-full flex items-center justify-center"
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
          <h3 className="text-2xl font-bold font-heading tracking-wide text-primary">
            {title}
          </h3>
        </div>
        <p className="font-body text-base text-foreground leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const HowItWorks = () => {
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
      id="how-it-works" 
      className="w-full bg-background py-20"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold font-heading text-primary tracking-wider">
            How It Works
          </h2>
          <div className="relative inline-block">
            <p className="text-lg text-muted mt-2 font-body">
              Supporting creators is as easy as 1, 2, 3!
            </p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute -bottom-1 left-0 w-full h-1 bg-accent origin-left"
            ></motion.div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <FeaturePanel 
            icon={Users}
            title="Step 1: Discover"
            description="Find your favorite artists, writers, and streamers. Follow their journey and see what they're creating."
          />
          <FeaturePanel 
            icon={Coffee}
            title="Step 2: Support"
            description="Love their work? Buy them a 'CHAI' as a direct thank you. It's a simple, powerful way to show appreciation."
          />
          <FeaturePanel 
            icon={Heart}
            title="Step 3: Connect"
            description="Leave a message with your support and unlock exclusive content offered by the creator as a special reward."
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;