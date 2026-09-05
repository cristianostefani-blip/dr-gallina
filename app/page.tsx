import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import PracticeAreas from "@/components/PracticeAreas";
import Methodology from "@/components/Methodology";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 antialiased selection:bg-amber-400/30 selection:text-amber-900 relative">
      <Header />
      {/* O padding-top (pt-24) agora é obrigatório em todas as telas, compensando os 96px de altura do Header */}
      <div className="pt-24">
        <Hero />
      </div>
      <Biography />
      <PracticeAreas />
      <Methodology />
      <CallToAction />
      <Footer />
    </main>
  );
}