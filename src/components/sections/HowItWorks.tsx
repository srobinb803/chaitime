'use client';
import { Coffee, Heart, Users } from "lucide-react";

const FeaturePanel = ({ 
  icon: Icon, 
  title, 
  description,
  delay = "0ms" 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  delay?: string 
}) => {
  return (
    <div className="relative">
      <div className="absolute -top-1 -right-1 w-full h-full bg-primary"></div>
      <div className="relative bg-panel-base border-3 border-primary p-6 h-full panel-glow">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-panel-highlight border-2 border-primary rounded-full flex items-center justify-center animate-icon-pop">
            <Icon className="w-6 h-6 text-primary animate-icon-bounce" />
          </div>
          <h3 className="text-2xl font-bold font-heading tracking-wide text-primary animate-text-pop">
            {title}
          </h3>
        </div>
        <p className="font-body text-base text-foreground leading-relaxed animate-text-fade">
          {description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-down">
          <h2 className="text-5xl font-bold font-heading text-primary tracking-wider">
            How It Works
          </h2>
          <div className="relative inline-block">
            <p className="text-lg text-muted mt-2 font-body animate-text-pop">
              Supporting creators is as easy as 1, 2, 3!
            </p>
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeaturePanel 
            icon={Users}
            title="Step 1: Discover"
            description="Find your favorite artists, writers, and streamers. Follow their journey and see what they're creating."
            delay="100ms"
          />
          <FeaturePanel 
            icon={Coffee}
            title="Step 2: Support"
            description="Love their work? Buy them a 'Tea' as a direct thank you. It's a simple, powerful way to show appreciation."
            delay="300ms"
          />
          <FeaturePanel 
            icon={Heart}
            title="Step 3: Connect"
            description="Leave a message with your support and unlock exclusive content offered by the creator as a special reward."
            delay="500ms"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;