'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, Zap, Coffee, Heart } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['#how-it-works', '#why-us', '#testimonials'];
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navItems = [
    { name: "How it Works", href: "#how-it-works", icon: <Zap className="w-5 h-5" /> },
    { name: "Why Us", href: "#why-us", icon: <Heart className="w-5 h-5" /> },
    { name: "Testimonials", href: "#testimonials", icon: <Coffee className="w-5 h-5" /> }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-b-3 border-primary transition-all duration-300 ${scrolled ? 'bg-panel-base/95 backdrop-blur-sm shadow-lg' : 'bg-panel-base/50'
          }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo and Title */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-baseline gap-2 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <Image
              src="/logo.png"
              alt="CHAITime Logo"
              width={35}
              height={35}
            />
            <span
              className="text-3xl font-bold text-primary font-heading tracking-wider"

            >
              CHAITime
            </span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-6 font-body font-bold text-lg text-muted"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`flex items-center gap-2 hover:text-primary transition-colors cursor-pointer py-1 px-2 rounded-lg ${activeSection === item.href ? 'bg-panel-accent text-primary' : ''
                    }`}
                >
                  <span className="text-accent">
                    {item.icon}
                  </span>
                  {item.name}
                </a>
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </nav>

          {/* Action Buttons & Theme Toggle - Removed sign-in animations */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="relative overflow-hidden border-3 border-primary font-heading tracking-wider hover:bg-primary hover:text-primary-foreground group"
            >
              <span className="relative z-10">Sign In</span>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 h-12 w-12 border-3 border-primary bg-panel-base rounded-full flex items-center justify-center"
            >
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
              <span className="sr-only">Toggle Menu</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              className="absolute top-5 right-5"
            >
              
            </motion.div>

            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center h-full gap-8 px-4"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="w-full max-w-md"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex flex-col items-center justify-center gap-2 font-heading text-3xl text-primary hover:text-accent transition-colors py-4 rounded-xl ${activeSection === item.href ? 'bg-panel-accent' : 'bg-panel-base'
                      } border-3 border-primary`}
                  >
                    <div className="text-accent">
                      {item.icon}
                    </div>
                    {item.name}
                  </a>
                </motion.div>
              ))}

              <div className="mt-8 w-full max-w-md">
                <Button
                  variant="outline"
                  className="w-full border-3 border-primary font-heading tracking-wider text-xl py-6 hover:bg-primary hover:text-primary-foreground"
                >
                  Sign In
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;