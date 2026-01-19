import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/language-context";

export default function Streaming() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">{t("streaming.title")}</h1>
          <p className="text-white/70 text-lg mb-8">{t("streaming.description")}</p>
          <a 
            href="#" 
            className="glass glass-hover px-6 py-3 rounded-lg text-white inline-block"
          >
            {t("streaming.joinWhatsApp")}
          </a>
        </div>
      </div>
    </main>
  );
}