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
    <section id="hero" className="relative w-full font-sans">
      
      {/* MÁSCARA PARALLAX: Fundo fixo, imune ao scroll, posicionado perfeitamente abaixo do Header */}
      <div className="absolute inset-0 z-0" style={{ clipPath: "inset(0)" }}>
        <div className="fixed top-24 left-0 w-full h-[calc(100dvh-6rem)] grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
          
          <div className="hidden lg:block bg-[#0B132B] h-full w-full"></div>
          
          <div className="relative h-full w-full bg-[#0B132B]">
            <Image
              src="/images/hero.jpg"
              alt={HERO_CONTENT.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#0B132B]/80 lg:via-transparent lg:to-transparent"></div>
          </div>
        </div>
      </div>

      {/* CAMADA DE CONTEÚDO: O "Efeito Cortina" implementado */}
      <div className="relative z-10 w-full flex flex-col justify-end min-h-[calc(100dvh-6rem)]">
        
        {/* SPACER (O Segredo da Athenas): Este bloco empurra o card para baixo, liberando o rosto do Doutor na 1ª dobra */}
        <div className="h-[55dvh] lg:h-[35dvh] w-full pointer-events-none shrink-0" />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24 flex justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl w-full"
          >
            {/* Glassmorphism Premium com desfoque calibrado */}
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

              {/* Silent Tracking CTA */}
              <WhatsAppButton 
                buttonLocation="hero_section" 
                text="Agendar Consulta Especializada" 
                variant="solid" 
                className="w-full sm:w-auto text-lg py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 border-none shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}