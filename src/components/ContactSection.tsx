import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
          Get in Touch
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-medium mb-6">
          Let's create something
          <br />
          <span className="italic">beautiful together</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
          Ready to start your next project? We'd love to hear from you. 
          Drop us a line and let's discuss your vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a 
            href="mailto:hello@studio.com" 
            className="flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>hello@studio.com</span>
          </a>
          <span className="hidden sm:block text-border">|</span>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>New York, NY</span>
          </div>
        </div>

        <Button variant="accent" size="lg" className="rounded-full px-12">
          Start a Project
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
