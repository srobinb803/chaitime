'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GetStartedCTA = () => {
  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-heading tracking-wider text-accent-foreground">
          Join the Revolution!
        </h2>
        <p className="text-xl font-body text-accent-foreground/80 mt-4 max-w-2xl mx-auto">
          Your fans are waiting. Create your free page in minutes and start building your community today.
        </p>
        <div className="mt-8">
          <Button 
            asChild
            className="bg-primary text-primary-foreground font-heading tracking-wider text-lg py-7 px-10 border-2 border-primary hover:bg-primary/90 transition-transform hover:scale-105"
          >
            <Link href="#">
              Start Your Free Page
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;