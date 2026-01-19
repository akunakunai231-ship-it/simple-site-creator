import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/language-context";
import { Mail, Linkedin, Globe } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  const renderBioWithLinks = (text: string) => {
    const parts = text.split(/(\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const boldContent = part.slice(1, -1);
        return <strong key={index} className="text-blue-400 font-semibold">{boldContent}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-30 group-hover:opacity-50 transition-opacity blur-xl"></div>
                <img
                  src="/images/profile.png"
                  alt="Dzakki D. R."
                  className="relative rounded-full border-4 border-white/10 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">{t("about.title")}</h2>

              <div className="space-y-4 text-white/75 leading-relaxed text-sm sm:text-base">
                <p>{renderBioWithLinks(t("about.bio1"))}</p>
                <p>{renderBioWithLinks(t("about.bio2"))}</p>
                <p>{renderBioWithLinks(t("about.bio3"))}</p>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 mt-8">
                <Button
                  className="glass glass-hover border border-blue-400/30 hover:border-blue-400/60 text-white font-semibold px-6 py-3 group transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("mailto:dzakkirabbani99@gmail.com", "_blank")}
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {t("about.cta")}
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 mt-4">
                <Button
                  size="icon"
                  className="glass glass-hover rounded-full border-white/20 hover:border-blue-400/40"
                  onClick={() => window.open("https://www.linkedin.com/in/dzakki-damar-rabbani/", "_blank")}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  className="glass glass-hover rounded-full border-white/20 hover:border-blue-400/40"
                  onClick={() => window.open("https://dzakjournal.com", "_blank")}
                >
                  <Globe className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}