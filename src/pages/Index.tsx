import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import ScrollFadeWrapper from "@/components/ScrollFadeWrapper";

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <ScrollFadeWrapper delay={100}>
        <HeroSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={200} id="trusted-by">
        <TrustedBySection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={300}>
        <AboutSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={400}>
        <PortfolioSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={700}>
        <Footer />
      </ScrollFadeWrapper>
    </main>
  );
}