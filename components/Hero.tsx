"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

// FÁBRICA DE DADOS (Produtização)
const HERO_CONTENT = {
  badge: "OAB/SP 238.159",
  title: "Excelência Jurídica em Gestão Pública",
  subtitle: "Compromisso inabalável com a Ética, Transparência e a Integridade das Instituições.",
  imageAlt: "Dr. Marcelo Tadeu Gallina - Advogado Especialista em Direito Público",
};

export default function Hero() {
  return (
    // Removido o bg sólido e overflow-hidden para permitir o deslize da página sobre o fundo fixo
    <section id="hero" className="relative w-full min-h-[calc(100vh-6rem)] flex items-center justify-center lg:justify-start">
      
      {/* 
        A Mágica do Parallax Fixo: 
        A tag 'fixed' cola essa camada na tela (Viewport) e o '-z-10' a joga para trás de tudo. 
      */}
      <div className="fixed top-0 left-0 w-full h-screen grid grid-cols-1 lg:grid-cols-2 -z-10 pointer-events-none">
        <div className="hidden lg:block bg-[#0B132B] h-full w-full"></div>
        <div className="relative h-full w-full">
          <Image
            src="/images/hero.jpg"
            alt={HERO_CONTENT.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_top] opacity-60 lg:opacity-90"
          />
          {/* Gradiente sutil para misturar a imagem */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#0B132B]/50 lg:to-[#0B132B]"></div>
        </div>
      </div>

      {/* Camada de Conteúdo (Sobreposta e Rolável) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center mt-12 lg:mt-0">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Glassmorphism Card - Desfoque reduzido para 8px (antes era md: 12px) */}
          <div className="backdrop-blur-[8px] bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
            
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-amber-400 uppercase border border-amber-400/30 rounded-full bg-amber-400/10"
            >
              {HERO_CONTENT.badge}
            </motion.span>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {HERO_CONTENT.title}
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {HERO_CONTENT.subtitle}
            </p>

            {/* Injeção do nosso motor de conversão seguro */}
            <WhatsAppButton 
              buttonLocation="hero_section" 
              text="Agendar Consulta Especializada" 
              variant="solid" 
              className="w-full sm:w-auto text-lg py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 border-none shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            />
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}