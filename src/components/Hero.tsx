import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--accent)/0.08)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto text-center relative z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 opacity-0 animate-fade-up">
          Creative Studio
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8 opacity-0 animate-fade-up animate-delay-100">
          We craft digital
          <br />
          <span className="italic text-accent">experiences</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 opacity-0 animate-fade-up animate-delay-200">
          Designing with purpose. Building with passion. 
          Creating memorable moments that resonate.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animate-delay-300">
          <Button variant="hero">
            View Our Work
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-400">
        <a href="#work" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
