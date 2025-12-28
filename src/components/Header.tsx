import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl font-semibold text-foreground tracking-tight">
          Studio
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Work
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            About
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            Contact
          </a>
        </nav>

        <Button variant="outline" size="sm" className="hidden md:inline-flex">
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;
