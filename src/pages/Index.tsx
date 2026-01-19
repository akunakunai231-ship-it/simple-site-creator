import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import PortfolioSection from "../components/PortfolioSection";
import AchievementsSection from "../components/AchievementsSection";
import Footer from "../components/Footer";
import ScrollFadeWrapper from "../components/ScrollFadeWrapper";

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <ScrollFadeWrapper delay={100}>
        <HeroSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={200} id="about">
        <AboutSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={300} id="experience">
        <ExperienceSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={400} id="portfolio">
        <PortfolioSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={500} id="achievements">
        <AchievementsSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={600} id="contact">
        <Footer />
      </ScrollFadeWrapper>
    </main>
  );
}