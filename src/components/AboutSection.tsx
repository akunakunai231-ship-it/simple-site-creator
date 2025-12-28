const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Crafting digital
              <br />
              <span className="italic">with intention</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are a creative studio focused on building meaningful digital experiences. 
              Our approach combines strategic thinking with beautiful execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every project begins with understanding—your vision, your audience, your goals. 
              From there, we craft solutions that not only look stunning but deliver real results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary/50 p-8 rounded-lg">
              <p className="font-serif text-4xl md:text-5xl font-medium text-accent mb-2">50+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Projects Completed</p>
            </div>
            <div className="bg-secondary/50 p-8 rounded-lg">
              <p className="font-serif text-4xl md:text-5xl font-medium text-accent mb-2">8</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="bg-secondary/50 p-8 rounded-lg">
              <p className="font-serif text-4xl md:text-5xl font-medium text-accent mb-2">30+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Happy Clients</p>
            </div>
            <div className="bg-secondary/50 p-8 rounded-lg">
              <p className="font-serif text-4xl md:text-5xl font-medium text-accent mb-2">12</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
