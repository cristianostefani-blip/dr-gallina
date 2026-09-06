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
    <section id="hero" className="relative w-full min-h-[calc(100vh-6rem)] flex items-center justify-center lg:justify-start">
      
      {/* 
        A MÁGICA DA ENGENHARIA APLICADA (Parallax via Máscara):
        O clip-path mantém a imagem imune à rolagem.
      */}
      <div className="absolute inset-0 z-0" style={{ clipPath: "inset(0)" }}>
        
        {/* 
          CORREÇÃO DE ENQUADRAMENTO: 
          top-24 (96px) compensa a altura do Header.
          h-[calc(100dvh-6rem)] garante que a imagem vá até o fim da tela sem vazar.
        */}
        <div className="fixed top-24 left-0 w-full h-[calc(100dvh-6rem)] grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
          
          <div className="hidden lg:block bg-[#0B132B] h-full w-full"></div>
          
          <div className="relative h-full w-full bg-[#0B132B]">
            {/* 
              CORREÇÃO DE COR: 
              Sem classes de opacidade. Imagem 100% nítida e real.
              object-top garante que o topo da cabeça não seja cortado.
            */}
            <Image
              src="/images/hero.jpg"
              alt={HERO_CONTENT.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            {/* Gradiente sutil movido apenas para as bordas extremas para dar contraste aos textos, sem manchar o rosto */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#0B132B]/80 lg:via-transparent lg:to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Camada de Conteúdo (Rolável por cima do fundo fixo) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center mt-12 lg:mt-0">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Glassmorphism Premium */}
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

            {/* Componente Global de Silent Tracking */}
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