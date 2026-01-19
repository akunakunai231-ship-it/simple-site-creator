import { useLanguage } from "../contexts/language-context";
import { FileText, Code, Database } from "lucide-react";

const portfolioItems = [
  {
    title: "Smart Inventory Management Dashboard",
    category: "Data Analytics",
    description: "Interactive dashboard using Python (Streamlit) for ROP evaluation and demand forecasting at PT Bakrie Pipe Industries.",
    icon: Database,
    tags: ["Python", "Streamlit", "Data Visualization"]
  },
  {
    title: "Principal Component Analysis (PCA) Research",
    category: "Publication",
    description: "Analisis Pengaruh Faktor pada Stunting di Jawa Timur Tahun 2021 - Published in Mutiara: Multidisciplinary Scientific Journal.",
    icon: FileText,
    tags: ["PCA", "Statistical Analysis", "Research"]
  },
  {
    title: "Time Series & ECM Forecasting",
    category: "Publication",
    description: "Peramalan Instrumen Sekuritas menggunakan ECM dan Time Series Regression pada IDXBUMN20 - Published in Action Research Literate.",
    icon: FileText,
    tags: ["ECM", "Time Series", "Forecasting"]
  },
  {
    title: "NMF vs Top2Vec Topic Modeling",
    category: "Publication",
    description: "Perbandingan Efektivitas Model NMF dan Top2Vec untuk Pemodelan Topik pada Traveloka Hotel Reviews - Published in Kohesi Journal.",
    icon: FileText,
    tags: ["NLP", "Topic Modeling", "Machine Learning"]
  },
  {
    title: "PANDU MAHARAJA Web Platform",
    category: "Web Development",
    description: "Web-based integrated health screening and reservation platform for UPT Puskesmas Trajeng.",
    icon: Code,
    tags: ["Web Development", "Healthcare", "Platform"]
  },
  {
    title: "SI IMUT RUPA",
    category: "Web Development",
    description: "Mobile educational information application supporting Puskesmas Trajeng's immunization program.",
    icon: Code,
    tags: ["Web Development", "Education", "Mobile"]
  },
];

export default function PortfolioSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative bg-black">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t("portfolio.title")}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="glass glass-hover p-6 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">{item.category}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">{item.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs bg-white/5 text-white/70 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}