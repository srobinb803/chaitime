import { Variants, Transition } from "framer-motion";

const EASE_BACK = [0.34, 1.56, 0.64, 1] as Transition["ease"];

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0, y: 40, position: 'relative',
    top: 0,
    left: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_BACK
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0, x: -40, position: 'relative',
    top: 0,
    left: 0
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_BACK
    }
  }
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0, x: 40, position: 'relative',
    top: 0,
    left: 0
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE_BACK
    }
  }
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_BACK
    }
  }
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      layout: { duration: 0.3 }
    }
  }
};

export const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_BACK,
        layout: { duration: 0.2 } 
    }
  }
};

export const rotateVariants: Variants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: EASE_BACK
    }
  }
};