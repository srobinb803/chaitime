'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, popIn } from "@/lib/animations";

const GetStartedCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="bg-accent py-20 overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <motion.h2 
          variants={popIn}
          className="text-6xl font-heading tracking-wider text-accent-foreground"
        >
          Join the Revolution!
        </motion.h2>
        
        <motion.p 
          variants={popIn}
          className="text-xl font-body text-accent-foreground/80 mt-4 max-w-2xl mx-auto"
        >
          Your fans are waiting. Create your free page in minutes and start building your community today.
        </motion.p>
        
        <motion.div 
          variants={popIn}
          className="mt-8"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            asChild
            className="bg-primary text-primary-foreground font-heading tracking-wider text-lg py-7 px-10 border-2 border-primary hover:bg-primary/90"
          >
            <Link href="#">
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                Start Your Free Page
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GetStartedCTA;