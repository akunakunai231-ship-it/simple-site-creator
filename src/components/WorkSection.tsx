const projects = [
  {
    title: "Brand Identity",
    category: "Branding",
    description: "Complete visual identity system for modern startups",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Design",
    description: "Luxury shopping experience with seamless checkout",
  },
  {
    title: "Mobile Application",
    category: "Product Design",
    description: "Intuitive app design focused on user engagement",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A curated selection of our recent work across branding, web design, and digital products.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group border-t border-border pt-8 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground md:max-w-xs md:text-right">
                  {project.description}
                </p>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground transition-colors duration-300 -rotate-45 group-hover:rotate-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
