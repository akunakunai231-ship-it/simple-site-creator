import { useLanguage } from "../contexts/language-context";
import { Trophy, Award, Medal, GraduationCap, Rocket } from "lucide-react";

const achievements = [
  {
    title: "Top 5 Finalist - JATIM DATATHON 2025",
    category: "Competition",
    description: "Ranked Top 5 out of 100 teams, organized by East Java Provincial Office of Communication and Informatics.",
    icon: Trophy,
    highlight: true
  },
  {
    title: "Gold Medalist - International Business Idea Competition",
    category: "International",
    description: "Youthpreneur in Action 2023 - International Business Idea Competition at Podomoro University.",
    icon: Medal,
    highlight: true
  },
  {
    title: "Awardee - Youth Leadership Camp Malaysia",
    category: "International",
    description: "Selected by NAMA Foundation for Youth Leadership Camp 2024 in Malaysia.",
    icon: Award
  },
  {
    title: "Best of the Best - Rocket 5.0 Youthpreneur",
    category: "Entrepreneurship",
    description: "Jakarta Chapter by Sandiaga Uno, recognized for outstanding entrepreneurial achievements.",
    icon: Rocket
  },
  {
    title: "Business Incubation Scholarship Awardee",
    category: "Scholarship",
    description: "Rocket 5.0 Sandination by Sandiaga Uno - Supporting startup incubation and development.",
    icon: GraduationCap
  },
  {
    title: "ADB HETI Program Funding Recipient",
    category: "Funding",
    description: "Higher Education for Technology and Innovation Program, supported by Asian Development Bank.",
    icon: Award
  },
  {
    title: "Rumah Kepemimpinan Scholarship",
    category: "Scholarship",
    description: "Heroboyo XII Cohort 2024 - Leadership development program scholarship.",
    icon: GraduationCap
  },
  {
    title: "1st Place Winner - Business Plan Competition",
    category: "Competition",
    description: "Vocation ITS Business Plan Competition 2023.",
    icon: Trophy
  },
];

export default function AchievementsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t("achievements.title")}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t("achievements.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass glass-hover p-6 rounded-2xl border transition-all duration-300 group ${
                achievement.highlight 
                  ? "border-yellow-500/30 hover:border-yellow-400/50 bg-gradient-to-br from-yellow-500/5 to-transparent" 
                  : "border-white/10 hover:border-blue-400/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 ${
                  achievement.highlight 
                    ? "bg-yellow-500/20 text-yellow-400" 
                    : "bg-blue-500/20 text-blue-400"
                }`}>
                  <achievement.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-medium uppercase tracking-wider ${
                    achievement.highlight ? "text-yellow-400" : "text-blue-400"
                  }`}>
                    {achievement.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}