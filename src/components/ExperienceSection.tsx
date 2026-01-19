import { useLanguage } from "../contexts/language-context";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "CEO",
    company: "Upgrade UMKM (PT Digital Nusantara Innovations)",
    period: "May 2024 - Present",
    description: "Founded and led Upgrade UMKM, an AI-based business development platform designed to support MSMEs through data-driven insights and digital solutions.",
    type: "entrepreneurship"
  },
  {
    title: "Data Analyst Intern",
    company: "PT Bakrie Pipe Industries",
    period: "Jan 2025 - Feb 2025",
    description: "Developed Smart Inventory Management dashboard using Python (Streamlit) for ROP evaluation and demand forecasting. Conducted data cleaning, transformation, and analysis.",
    type: "internship"
  },
  {
    title: "Vice President Director - External Affairs",
    company: "Technopreneurship Development Center (TDC) ITS",
    period: "Feb 2024 - Jan 2025",
    description: "Led external relations, partnerships, and stakeholder engagement initiatives. Oversaw strategic collaboration with external partners and institutions.",
    type: "organization"
  },
  {
    title: "Web Developer",
    company: "SI IMUT RUPA - UPT Puskesmas Trajeng",
    period: "Aug 2024",
    description: "Developed web-based educational information application supporting immunization program, improving access to immunization education for the community.",
    type: "project"
  },
  {
    title: "Business Development Intern",
    company: "PT Alpha Academy Indonesia",
    period: "Jan 2024 - Jun 2024",
    description: "Supported business development through market research, partnership outreach, and program execution.",
    type: "internship"
  },
  {
    title: "Staff - Ministry of Creative Economy",
    company: "BEM ITS",
    period: "Oct 2023 - Oct 2024",
    description: "Contributed to planning and execution of creative economy initiatives and student-driven entrepreneurship activities.",
    type: "organization"
  },
];

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t("experience.title")}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t("experience.subtitle")}</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`glass glass-hover p-6 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 ${
                    index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 z-10"></div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}