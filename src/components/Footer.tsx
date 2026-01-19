import { Button } from "./ui/button";
import { useLanguage } from "../contexts/language-context";
import { Mail, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("footer.connect")}</h2>
          <p className="text-white/70 text-lg mb-8">{t("footer.project")}</p>
          
          <Button
            className="glass glass-hover border border-blue-400/30 hover:border-blue-400/60 text-white font-semibold px-8 py-4 group transition-all duration-300 hover:scale-105 text-lg"
            onClick={() => window.open("mailto:dzakkirabbani99@gmail.com", "_blank")}
          >
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            dzakkirabbani99@gmail.com
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <Button
            size="icon"
            className="glass glass-hover rounded-full border-white/20 hover:border-blue-400/40 w-12 h-12"
            onClick={() => window.open("https://www.linkedin.com/in/dzakki-damar-rabbani/", "_blank")}
          >
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button
            size="icon"
            className="glass glass-hover rounded-full border-white/20 hover:border-blue-400/40 w-12 h-12"
            onClick={() => window.open("https://dzakjournal.com", "_blank")}
          >
            <Globe className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/50 text-sm">
            {t("footer.made")} <span className="font-bold text-white">Dzakki D. R.</span> © 2025
          </div>
        </div>
      </div>
    </footer>
  );
}