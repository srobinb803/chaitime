'use client';
import Image from 'next/image';
import { Heart, MessageSquare, Palette } from 'lucide-react';

const FeatureListItem = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-panel-accent border-2 border-primary">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h3 className="text-2xl font-bold font-heading  tracking-widest text-primary">{title}</h3>
      <p className="mt-1 font-body text-base text-foreground/80 leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyCreatorsLoveUs = () => {
  return (
    <section id='why-us' className="w-full bg-background py-20">
      <div className="container mx-auto grid grid-cols-1 items-stretch gap-8 px-4 lg:grid-cols-5">
        
        {/* Left Column (3/5 width on large screens) - Feature List */}
        <div className="lg:col-span-3">
          <div className="relative h-full">
            <div className="absolute -top-1 -left-1 w-full h-full bg-primary"></div>
            <div className="relative bg-panel-base border-3 border-primary p-8 h-full">
              <h2 className="text-5xl font-bold font-heading text-primary tracking-widest mb-8">
                A Platform Built for You
              </h2>
              <div className="space-y-6">
                <FeatureListItem 
                  icon={Heart} 
                  title="Direct & Meaningful"
                  description="Receive support directly from your audience. No algorithms, no ads."
                />
                <FeatureListItem 
                  icon={Palette} 
                  title="Your Brand, Your Space"
                  description="Customize your page to match your unique style and creative identity."
                />
                <FeatureListItem 
                  icon={MessageSquare} 
                  title="Engage Community"
                  description="Share updates and exclusive content to build a loyal following."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (2/5 width on large screens) - Character Spotlight Panel */}
        <div className="lg:col-span-2">
          <div className="relative h-full min-h-[500px]">
            <div className="absolute -top-1 -right-1 w-full h-full bg-primary"></div>
            <div className="relative h-full w-full border-3 border-primary bg-panel-base p-4">
               <Image
                src="/artist.jpg" // Using the hero image for consistency
                alt="An anime-style artist smiling"
                className="w-full h-full object-cover border-2 border-primary"
                fill
              />
              {/* Manga Caption Box */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="relative bg-panel-base border-2 border-primary p-3">
                  <p className="font-body text-center font-bold text-primary text-sm">
                    FOCUS ON YOUR ART. <br/> WE'LL HANDLE THE REST.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyCreatorsLoveUs;