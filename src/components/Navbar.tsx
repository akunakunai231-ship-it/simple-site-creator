import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Globe, Menu, X, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const pathname = location.pathname;

  const isStreamingPage = pathname === "/streaming";
  const isHackathonPage = pathname === "/hackathon";

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 outline-none ${isScrolled ? "px-4 py-2" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? "glass rounded-2xl px-6 py-3 border border-white/15"
            : "px-4 sm:px-6 py-4 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg sm:text-xl font-bold text-white md:flex-1">
            Arturo Grande
          </Link>

          {(isStreamingPage || isHackathonPage) && (
            <div className="hidden md:flex items-center mr-6">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 nav-item text-white/75 hover:text-white transition-colors relative"
              >
                <ArrowLeft size={20} />
                <span>{isStreamingPage ? t("streaming.backHome") : t("hackathon.backHome")}</span>
              </Link>
            </div>
          )}

          {!isStreamingPage && !isHackathonPage && (
            <div className="hidden md:flex items-center space-x-8 mr-6">
              <button onClick={() => scrollToSection("home")} className="nav-item text-white/75 hover:text-white transition-colors relative">
                {t("nav.home")}
              </button>
              <button onClick={() => scrollToSection("about")} className="nav-item text-white/75 hover:text-white transition-colors relative">
                {t("nav.about")}
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="nav-item text-white/75 hover:text-white transition-colors relative">
                {t("nav.portfolio")}
              </button>
              <Link to="/streaming" className="nav-item text-white/75 hover:text-white transition-colors relative">
                {t("nav.streaming")}
              </Link>
              <Link to="/hackathon" className="nav-item text-white/75 hover:text-white transition-colors relative">
                {t("nav.hackathon")}
              </Link>
              <button onClick={() => scrollToSection("contact")} className="nav-item text-white/75 hover:text-white transition-colors relative">
                {t("nav.contact")}
              </button>
            </div>
          )}

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors glass px-3 py-2 rounded-lg"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === "en" ? "ES" : "EN"}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors glass px-2 py-1 rounded-lg ml-2"
            >
              <Globe size={14} />
              <span className="text-xs font-medium">{language === "en" ? "ES" : "EN"}</span>
            </button>

            {(isStreamingPage || isHackathonPage) && (
              <Link to="/" className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg">
                <ArrowLeft size={20} />
              </Link>
            )}

            {!isStreamingPage && !isHackathonPage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && !isStreamingPage && !isHackathonPage && (
          <div className="md:hidden mt-4 glass rounded-lg p-4">
            <div className="flex flex-col space-y-4 text-center">
              <button onClick={() => scrollToSection("home")} className="text-white hover:text-white/80 transition-colors py-2">
                {t("nav.home")}
              </button>
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-white/80 transition-colors py-2">
                {t("nav.about")}
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="text-white hover:text-white/80 transition-colors py-2">
                {t("nav.portfolio")}
              </button>
              <Link to="/streaming" className="text-white hover:text-white/80 transition-colors py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.streaming")}
              </Link>
              <Link to="/hackathon" className="text-white hover:text-white/80 transition-colors py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.hackathon")}
              </Link>
              <button onClick={() => scrollToSection("contact")} className="text-white hover:text-white/80 transition-colors py-2">
                {t("nav.contact")}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}