import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.portfolio": "Portfolio",
    "nav.achievements": "Achievements",
    "nav.contact": "Contact",
    
    "hero.greeting": "Welcome to my portfolio 👋",
    "hero.title": "Business Statistics Student & Data Analyst",
    "hero.subtitle": "Transforming complex data into actionable insights through analytics, forecasting, and data-driven solutions",
    "hero.card1": "Data Analytics & Statistical Modeling",
    "hero.card2": "Business Intelligence & Visualization",
    "hero.card3": "Entrepreneurship & Innovation",
    "hero.card4": "Leadership & Cross-functional Collaboration",
    
    "about.title": "About Me",
    "about.bio1": "Business Statistics undergraduate at *Institut Teknologi Sepuluh Nopember (ITS)* with experience in applied statistics, data analytics, and forecasting for industrial and business contexts.",
    "about.bio2": "Completed a Data Analyst Internship at *PT Bakrie Pipe Industries* delivering inventory and demand forecasting solutions using Python (Streamlit). Published *peer-reviewed research* in PCA, time series & econometrics (ECM), and text analytics.",
    "about.bio3": "Actively involved in leadership and organizational roles, including *CEO of Upgrade UMKM* (AI-based business platform for MSMEs), *Vice President Director for External Affairs at TDC ITS*, and various student organization positions.",
    "about.cta": "GET IN TOUCH",
    
    "experience.title": "Professional Experience",
    "experience.subtitle": "Data analytics, business development, and entrepreneurship journey",
    
    "portfolio.title": "Portfolio & Projects",
    "portfolio.subtitle": "Research publications, dashboards, and innovative solutions",
    
    "achievements.title": "Achievements & Recognition",
    "achievements.subtitle": "Academic, entrepreneurship, and international accomplishments",
    
    "footer.connect": "LET'S CONNECT",
    "footer.made": "MADE BY",
    "footer.project": "Have a project in mind?",
  },
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.portfolio": "Portfolio",
    "nav.achievements": "Prestasi",
    "nav.contact": "Kontak",
    
    "hero.greeting": "Selamat datang di portfolio saya 👋",
    "hero.title": "Mahasiswa Statistika Bisnis & Data Analyst",
    "hero.subtitle": "Mengubah data kompleks menjadi insight yang dapat ditindaklanjuti melalui analitik, peramalan, dan solusi berbasis data",
    "hero.card1": "Data Analytics & Pemodelan Statistik",
    "hero.card2": "Business Intelligence & Visualisasi",
    "hero.card3": "Kewirausahaan & Inovasi",
    "hero.card4": "Kepemimpinan & Kolaborasi Lintas Fungsi",
    
    "about.title": "Tentang Saya",
    "about.bio1": "Mahasiswa Statistika Bisnis di *Institut Teknologi Sepuluh Nopember (ITS)* dengan pengalaman dalam statistika terapan, analitik data, dan peramalan untuk konteks industri dan bisnis.",
    "about.bio2": "Menyelesaikan magang Data Analyst di *PT Bakrie Pipe Industries* mengembangkan solusi inventory dan demand forecasting menggunakan Python (Streamlit). Mempublikasikan *riset peer-reviewed* dalam PCA, time series & ekonometrika (ECM), dan text analytics.",
    "about.bio3": "Aktif dalam peran kepemimpinan dan organisasi, termasuk *CEO Upgrade UMKM* (platform bisnis berbasis AI untuk UMKM), *Vice President Director External Affairs di TDC ITS*, dan berbagai posisi organisasi mahasiswa lainnya.",
    "about.cta": "HUBUNGI SAYA",
    
    "experience.title": "Pengalaman Profesional",
    "experience.subtitle": "Perjalanan data analytics, pengembangan bisnis, dan kewirausahaan",
    
    "portfolio.title": "Portfolio & Proyek",
    "portfolio.subtitle": "Publikasi riset, dashboard, dan solusi inovatif",
    
    "achievements.title": "Prestasi & Penghargaan",
    "achievements.subtitle": "Pencapaian akademik, kewirausahaan, dan internasional",
    
    "footer.connect": "HUBUNGI",
    "footer.made": "DIBUAT OLEH",
    "footer.project": "Punya proyek dalam pikiran?",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}