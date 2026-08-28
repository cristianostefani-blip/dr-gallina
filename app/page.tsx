import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import PracticeAreas from "@/components/PracticeAreas";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // <-- Importe o botão

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 antialiased selection:bg-amber-400/30 selection:text-amber-900 relative">
      <Hero />
      <Biography />
      <PracticeAreas />
      <Footer />
      
      {/* Botão Flutuante Fixo (Z-index alto para ficar sobreposto) */}
      <div className="fixed bottom-6 right-6 z-[90]">
        <WhatsAppButton 
          buttonLocation="floating_global" 
          text="Falar com o Doutor" 
          variant="solid"
          className="shadow-2xl shadow-blue-900/20 px-4 py-4 rounded-full md:rounded-full md:px-6 hover:scale-105 transition-transform"
        />
      </div>
    </main>
  );
}