import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import GetStartedCTA from '@/components/sections/GetStarted';
import WhyCreatorsLoveUs from '@/components/sections/WhyCreatorLoveUs';
import Testimonials from '@/components/sections/testimonial';
import AnimatedSection from '@/components/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <AnimatedSection animationClass="animate-slide-up" delay="100ms">
          <HowItWorks />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate-slide-right" delay="200ms">
          <WhyCreatorsLoveUs />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate-pop-in" delay="300ms">
          <Testimonials />
        </AnimatedSection>
        
        <AnimatedSection animationClass="animate-fade-in" delay="400ms">
          <GetStartedCTA />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;