'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto text-center font-body">
        <div className="flex justify-center items-center gap-6 mb-6">
          <Link href="#" className="hover:text-accent transition-colors">About</Link>
          <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
        </div>
        <p className="text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} CHAITime. All Rights Reserved. Built with ❤️ for creators.
        </p>
      </div>
    </footer>
  );
};

export default Footer;