import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import PracticeAreas from "@/components/PracticeAreas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 antialiased selection:bg-amber-400/30 selection:text-amber-900 relative">
      <Header />
      {/* pt-20 compensa a altura do Header fixo para o conteúdo do Hero não ficar oculto */}
      <div className="pt-20 lg:pt-0">
        <Hero />
      </div>
      <Biography />
      <PracticeAreas />
      <Footer />
    </main>
  );
}