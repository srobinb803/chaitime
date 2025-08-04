'use client'; // This component now uses hooks, so it must be a Client Component.

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react'; // Icons for the mobile menu

const Header = () => {
  // State for the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll events for changing header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Becomes true after scrolling 20px
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation items to match your sections
  const navItems = [
   
    { name: "How it Works", href: "#how-it-works" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" }
  ];

  // Function to handle smooth scrolling
  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Find the element and scroll to it
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full border-b-3 border-primary transition-all duration-300 ${scrolled ? 'bg-panel-base/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between ">
          {/* Logo and Title */}
          <div  className="flex items-baseline gap-1 transition-transform duration-300 hover:scale-110" onClick={() => scrollToSection('#home')} >
            <Image
              src="/logo.png"
              alt="TeaTime Logo"
              width={35}
              height={35}
              
            />
            <span className="text-3xl font-bold text-primary font-heading tracking-wider cursor-pointer align-middle ">
              TeaTime
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-body font-bold text-lg text-muted">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline"
              className="border-3 border-primary font-heading tracking-wider hover:bg-primary hover:text-primary-foreground"
            >
              Sign In
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
             <ThemeToggle />
            <Button 
              onClick={() => setIsOpen(!isOpen)} 
              variant="outline"
              size="icon"
              className="ml-4 h-12 w-12 border-3 border-primary bg-panel-base"
            >
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="font-heading text-4xl text-primary hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button 
              variant="outline"
              className="border-3 border-primary font-heading tracking-wider text-xl py-6 px-8 hover:bg-primary hover:text-primary-foreground mt-8"
            >
              Sign In
            </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;