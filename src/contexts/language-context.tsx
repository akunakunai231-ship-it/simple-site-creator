"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.articles": "Articles",
    "nav.talks": "Talks",
    "nav.streaming": "Streaming",
    "nav.hackathon": "Hackathon",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Welcome to my **personal portfolio**",
    "hero.title": "I vibecode and scale products people love",
    "hero.card1": "Expert in scalable product design & marketing.",
    "hero.card2": "Passionate about Web3, AI, and sustainability.",
    "hero.card3": "Remote work across 15+ countries as a digital nomad.",
    "hero.card4": "Helped 40+ companies with impactful solutions.",

    // Trusted By Section
    "trustedBy.title": "Trusted by",
    "trustedBy.subtitle": "Companies and organizations that have trusted my expertise to drive their digital transformation and growth strategies.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Case studies and design projects showcasing user-centered solutions for digital products",

    // About Section
    "about.title": "ABOUT ME",
    "about.bio1": "Arturo Grande (Salta, 1995) is a *multimedia designer*, *entrepreneur*, and *technology enthusiast*. He served as *National Marketing Director* at *AIESEC* in Argentina and Spain, and is the founder and professor at *DESAFIA*, a program that helps entrepreneurs build and scale *digital products* globally.",
    "about.bio2": "He has spoken at *UX and technology events*, co-organized *SAIAConf*, and teaches in the postgraduate programs of *Digital Business (UCEMA)* and *CryptoEconomy (UNCUYO)*. Currently, he is *Head of Product & Marketing* at *Eluter*, leading *growth strategies* and *digital product design*.",
    "about.bio3": "He graduated from the *Polkadot Blockchain Academy X* and was selected as a *Scholar* for the *Devconnect 2025 Ethereum Community Organizers* track.",
    "about.links.title": "Links",
    "about.cta": "GET IN TOUCH",

    // Companies Section
    "companies.eluter.title": "More about Eluter",
    "companies.eluter.description": "**Eluter** is a **fintech platform** that simplifies **global payments** and **currency exchange** for companies in Argentina.",
    "companies.eluter.button": "More info",
    "companies.desafia.title": "More about DESAFIA",
    "companies.desafia.description": "**DESAFIA** is an **education platform** founded by **Arturo Grande** that helps **entrepreneurs and professionals** create and scale **digital products**.",
    "companies.desafia.button": "More info",

    // Talks Section
    "talks.title": "Talks & Workshops",
    "talks.description": "I am an **international speaker**, delivering practical talks and workshops on **UX Design, Marketing, Sustainability**, and **exponential technologies**.",
    "talks.cta": "REQUEST A TALK/WORKSHOP",
    "talks.argentina": "Argentina",
    "talks.international": "International",

    // Blog Section
    "blog.title": "Articles & Case Studies",
    "blog.subtitle": "Insights on design, technology, and business strategy from real projects and client work",
    "blog.readMore": "Read on Medium",
    "blog.noArticles": "No articles found. Check back soon!",
    "blog.viewAll": "View Latest 10 Articles",

    // Footer
    "footer.portfolio": "PORTFOLIO",
    "footer.portfolio.design": "Product Design",
    "footer.about": "ABOUT ME",
    "footer.about.bio": "Short Biography",
    "footer.about.talks": "Talks and Workshops",
    "footer.about.articles": "Articles",
    "footer.connect": "LET'S CONNECT",
    "footer.connect.project": "Have a project in mind?",
    "footer.connect.touch": "Get in touch",
    "footer.made": "MADE BY",

    // Streaming Section
    "streaming.title": "Live Streaming",
    "streaming.backHome": "Back to Home",
    "streaming.description": "Join me live for discussions about design, technology, and entrepreneurship.",
    "streaming.joinWhatsApp": "Join WhatsApp Group",

    // Hackathon Section
    "hackathon.backHome": "Back to Home",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.portfolio": "Portafolio",
    "nav.articles": "Artículos",
    "nav.talks": "Charlas",
    "nav.streaming": "Streaming",
    "nav.hackathon": "Hackathon",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.greeting": "Bienvenido a mi **portfolio personal**",
    "hero.title": "Programo con IA y hago crecer productos que la gente ama",
    "hero.card1": "Experto en diseño de productos escalables y marketing.",
    "hero.card2": "Apasionado por Web3, IA y sostenibilidad.",
    "hero.card3": "Trabajo remoto en más de 15 países como nómada digital.",
    "hero.card4": "Ayudé a más de 40 empresas con soluciones impactantes.",

    // Trusted By Section
    "trustedBy.title": "Confían en mí",
    "trustedBy.subtitle": "Empresas y organizaciones que han confiado en mi experiencia.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Casos de estudio y proyectos de diseño",

    // About Section
    "about.title": "ACERCA DE MÍ",
    "about.bio1": "Arturo Grande (Salta, 1995) es *diseñador multimedia*, *emprendedor* y *entusiasta de la tecnología*.",
    "about.bio2": "Ha participado como orador en *eventos de UX y tecnología*.",
    "about.bio3": "Es graduado de la *Polkadot Blockchain Academy X*.",
    "about.links.title": "Enlaces",
    "about.cta": "CONTACTAR",

    // Companies Section
    "companies.eluter.title": "Más sobre Eluter",
    "companies.eluter.description": "**Eluter** es una **plataforma fintech**.",
    "companies.eluter.button": "Más información",
    "companies.desafia.title": "Más sobre DESAFIA",
    "companies.desafia.description": "**DESAFIA** es una **plataforma educativa**.",
    "companies.desafia.button": "Más información",

    // Talks Section
    "talks.title": "Charlas y Talleres",
    "talks.description": "Soy un **speaker internacional**.",
    "talks.cta": "SOLICITAR CHARLA/TALLER",
    "talks.argentina": "Argentina",
    "talks.international": "Internacional",

    // Blog Section
    "blog.title": "Artículos y Casos de Estudio",
    "blog.subtitle": "Insights sobre diseño, tecnología y estrategia",
    "blog.readMore": "Leer en Medium",
    "blog.noArticles": "No se encontraron artículos.",
    "blog.viewAll": "Ver Últimos 10 Artículos",

    // Footer
    "footer.portfolio": "PORTAFOLIO",
    "footer.portfolio.design": "Diseño de Productos",
    "footer.about": "ACERCA DE MÍ",
    "footer.about.bio": "Biografía Corta",
    "footer.about.talks": "Charlas y Talleres",
    "footer.about.articles": "Artículos",
    "footer.connect": "CONECTEMOS",
    "footer.connect.project": "¿Tienes un proyecto en mente?",
    "footer.connect.touch": "Ponte en contacto",
    "footer.made": "HECHO POR",

    // Streaming Section
    "streaming.title": "Transmisión en Vivo",
    "streaming.backHome": "Volver al Inicio",
    "streaming.description": "Acompáñame en vivo para discusiones.",
    "streaming.joinWhatsApp": "Únete al Grupo de WhatsApp",

    // Hackathon Section
    "hackathon.backHome": "Volver al Inicio",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}