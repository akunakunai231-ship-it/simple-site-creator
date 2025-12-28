const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-serif text-xl font-semibold">Studio</p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Instagram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              LinkedIn
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
