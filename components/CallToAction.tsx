"use client";

import { motion } from "framer-motion";
import { Bot, Scale } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function CallToAction() {
  const handleAIOpen = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "ai_chat_intent",
        button_location: "pre_footer_cta",
      });
      // Lógica futura para abrir o modal/canvas da IA entra aqui
      console.log("Abrir interface da IA");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-blue-950">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como podemos auxiliar na sua demanda?
          </h2>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Escolha o canal mais adequado para o seu momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Opção 1: Inteligência Artificial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col h-full group hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20">
              <Bot className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Pesquisa Preliminar via IA</h3>
            <p className="text-blue-100/70 mb-6 flex-grow leading-relaxed">
              Consulte nossa base de conhecimento jurídico. Respostas baseadas estritamente na legislação vigente e jurisprudência pública.
            </p>
            <div className="space-y-4">
              <button 
                onClick={handleAIOpen}
                className="w-full py-4 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10"
              >
                Iniciar Pesquisa Virtual
              </button>
              <p className="text-[10px] text-blue-200/40 text-center uppercase tracking-wider leading-relaxed">
                As respostas são geradas por Inteligência Artificial e possuem caráter meramente informativo, não configurando parecer jurídico, decisão ou garantia de êxito.
              </p>
            </div>
          </motion.div>

          {/* Opção 2: Contato Direto (WhatsApp) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-blue-900/40 backdrop-blur-md border border-amber-500/30 rounded-3xl p-8 lg:p-10 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              <Scale className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Consulta Estratégica</h3>
            <p className="text-blue-100/70 mb-8 flex-grow leading-relaxed">
              Para análise cautelar de casos concretos, estruturação de compliance e atuação direta nos âmbitos administrativos.
            </p>
            <div className="mt-auto">
              <WhatsAppButton 
                buttonLocation="pre_footer_direct" 
                text="Falar com Especialista" 
                variant="solid"
                className="w-full py-4 text-lg bg-amber-500 hover:bg-amber-400 text-slate-900 border-none shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}