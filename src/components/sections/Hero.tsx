'use client';
import { Button } from "../ui/button";
import { Coffee, Star, Zap } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden py-16">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20 animate-pop-in">
        <div className="w-full h-full bg-gradient-to-br from-panel-highlight/30 to-panel-accent/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title panel */}
        <div className="relative mb-8 animate-pop-in">
          <div className="absolute -top-2 -left-2 w-full h-full bg-primary transform rotate-1"></div>
          <div className="relative bg-panel-base border-4 border-primary p-4 md:p-6 shadow-2xl">
            <div className="text-center">
              <div className="font-body font-bold tracking-[0.2em] md:tracking-[0.3em] mb-2 text-muted">
                CREATOR TEA CHRONICLES
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary leading-none tracking-tight">
                SUPPORT YOUR
                <br />
                <span className="relative inline-block">
                  <span className="text-accent">TEA</span>
                  <div className="absolute -top-2 -right-4 text-yellow-500 animate-zap">
                    <Zap className="w-6 h-6 rotate-12" />
                  </div>
                </span>
                <br />
                CREATORS!
              </h1>
            </div>
          </div>
        </div>

        {/* Responsive grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left panel */}
          <div className="relative animate-slide-left">
            <div className="absolute -top-1 -left-1 w-full h-full bg-primary"></div>
            <div className="relative bg-panel-base border-3 border-primary p-6 h-full">
              <div className="relative mb-4">
                <Image 
                  src="/tea.png" 
                  alt="TEA vendor character" 
                  className="w-full h-48 object-cover border-2 border-primary grayscale contrast-125"
                  width={600}
                  height={48}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
              </div>
              
              <div className="relative bg-panel-base border-2 border-primary rounded-full p-4 mb-4">
                <div className="text-sm font-bold text-center">
                  "BUY TEA FOR YOUR FAVORITE CREATORS!"
                </div>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary"></div>
                <div className="absolute -bottom-1 left-6 w-0 h-0 border-l-7 border-r-7 border-t-7 border-l-transparent border-r-transparent border-t-panel-base"></div>
              </div>

              <div className="space-y-3 font-heading tracking-wider">
                <Button className="btn-hover-grow w-full bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary py-3 relative overflow-hidden group">
                  <span className="relative z-10">START SUPPORTING</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Button>
                <Button variant="outline" className="btn-hover-grow w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-3">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>

          {/* Center panel */}
          <div className="relative animate-pop-in" style={{ animationDelay: '200ms' }}>
            <div className="absolute -top-1 -right-1 w-full h-full bg-primary"></div>
            <div className="relative bg-panel-base border-3 border-primary p-4 h-full min-h-[50vh] lg:min-h-0">
              <div className="relative h-full">
                <Image 
                  src="/cart.jpg" 
                  alt="Traditional TEA cart scene" 
                  className="w-full h-full object-cover border-2 border-primary filter contrast-110 saturate-110"
                  fill
                />
                <div className="absolute top-4 right-4 text-yellow-400">
                  <Star className="w-8 h-8 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4 text-accent animate-float">
                  <Coffee className="w-8 h-8" />
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-black/20 to-transparent transform -rotate-45 origin-top-left"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-black/20 to-transparent transform -rotate-45 origin-bottom-right"></div>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="space-y-4 font-body animate-slide-right">
            <div className="relative panel-glow">
              <div className="absolute -top-1 -right-1 w-full h-full bg-primary"></div>
              <div className="relative bg-panel-highlight border-3 border-primary p-4">
                <div className="text-center">
                  <div className="text-3xl font-heading text-primary mb-1">1000+</div>
                  <div className="text-xs font-bold uppercase tracking-wide">HAPPY CREATORS</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 border-2 border-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">!</span>
                </div>
              </div>
            </div>

            <div className="relative panel-glow" style={{ animationDelay: '100ms' }}>
              <div className="absolute -top-1 -left-1 w-full h-full bg-primary"></div>
              <div className="relative bg-panel-accent border-3 border-primary p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent border-2 border-primary rounded-full flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-heading text-primary">₹5,000</div>
                    <div className="text-xs font-bold uppercase">TEA BOUGHT</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative panel-glow" style={{ animationDelay: '150ms' }}>
              <div className="absolute -top-1 -right-1 w-full h-full bg-primary"></div>
              <div className="relative bg-panel-warning border-3 border-primary p-4">
                <div className="text-center mb-3">
                  <div className="text-sm font-bold mb-2">COMMUNITY POWER!</div>
                  <div className="flex justify-center -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-accent border-2 border-primary"></div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-primary"></div>
                    <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-primary"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-primary"></div>
                  </div>
                </div>
                <div className="text-xs text-center font-bold">
                  JOIN THE TEA REVOLUTION!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom panel */}
        <div className="mt-8 relative animate-pop-in" style={{ animationDelay: '400ms' }}>
          <div className="absolute -bottom-1 -right-1 w-full h-full bg-primary"></div>
          <div className="relative bg-panel-base border-3 border-primary p-6">
            <p className="text-lg font-body text-center leading-relaxed">
              A warm platform where supporters can buy Tea for their favorite creators, 
              <span className="font-heading tracking-wider text-orange-600"> building community one cup at a time!</span>
            </p>
          </div>
        </div>

        {/* Sound effects */}
        <div className="hidden lg:block absolute top-20 left-10 text-2xl font-heading text-black/30 dark:text-accent-foreground/30 transform -rotate-12 animate-pop-in">
          WHOOSH!
        </div>
        <div className="hidden lg:block absolute top-40 right-20 text-xl font-heading text-black/30 dark:text-accent-foreground/30 transform rotate-12 animate-pop-in" style={{ animationDelay: '100ms' }}>
          SIZZLE!
        </div>
        <div className="hidden lg:block absolute bottom-32 left-20 text-3xl font-heading text-black/30 dark:text-accent-foreground/30 transform -rotate-6 animate-pop-in" style={{ animationDelay: '300ms' }}>
          POW!
        </div>
      </div>
    </section>
  );
};

export default HeroSection;