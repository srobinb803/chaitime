import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import GetStartedCTA from '@/components/sections/GetStarted';
import WhyCreatorsLoveUs from '@/components/sections/WhyCreatorLoveUs';
import Testimonials from '@/components/sections/testimonial';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <WhyCreatorsLoveUs />
        <Testimonials />
        <GetStartedCTA />
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;