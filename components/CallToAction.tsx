"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden bg-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Precisa de orientação jurídica estratégica?
          </h2>
          <p className="text-lg text-blue-100/80 mb-10 max-w-2xl mx-auto">
            Agende uma consulta consultiva para avaliarmos a conformidade e a segurança do seu cenário institucional ou empresarial.
          </p>
          
          <WhatsAppButton 
            buttonLocation="pre_footer_cta" 
            text="Solicitar Avaliação Inicial" 
            variant="solid"
            className="w-full sm:w-auto text-lg px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 border-none shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
}