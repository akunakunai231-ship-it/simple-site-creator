import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/language-context";

export default function Hackathon() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Hackathon</h1>
          <p className="text-white/70 text-lg">Coming soon...</p>
        </div>
      </div>
    </main>
  );
}