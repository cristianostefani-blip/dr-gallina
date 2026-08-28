"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

// FÁBRICA DE DADOS - Facilita a manutenção e produtização
const BIO_CONTENT = {
  sectionTag: "Trajetória Profissional",
  highlightQuote: "Excelência Jurídica, Ética e Transparência na Administração Pública.",
  paragraphs: [
    "Com uma trajetória jurídica consolidada e profundo conhecimento em Direito Público, Administrativo e Privado. Marcelo Tadeu Gallina (OAB/SP 238.159) é um advogado dedicado à integridade das instituições.",
    "Sua ampla bagagem jurídica é fruto de uma longa experiência de atuação em diversas frentes do Direito, com destaque para as esferas civil e federal. Essa vivência na defesa e resolução de processos complexos lhe confere uma visão estratégica e global, permitindo oferecer soluções jurídicas inovadoras e eficazes.",
    "Reconhecido por sua liderança e pela confiança institucional que inspira, o Dr. Marcelo possui um histórico de excelência em posições de alto nível estratégico. Entre suas atuações de destaque, já presidiu a Comissão Especial na Secretaria Municipal de Gestão e Governo Digital de São Caetano do Sul, evidenciando sua capacidade de guiar processos complexos com imparcialidade."
  ]
};

export default function Biography() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Detalhe de fundo sutil para quebrar o branco total */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Bloco de Destaque / Citação (Esquerda) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 bg-slate-50 border border-slate-100 rounded-3xl -z-10 transform -rotate-1"></div>
            <div className="p-8 lg:p-10">
              <div className="w-12 h-12 bg-blue-900/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-900" />
              </div>
              <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-4">
                {BIO_CONTENT.sectionTag}
              </h2>
              <p className="text-2xl lg:text-3xl font-medium text-slate-900 leading-snug">
                "{BIO_CONTENT.highlightQuote}"
              </p>
            </div>
          </motion.div>

          {/* Texto Biográfico (Direita) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {BIO_CONTENT.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}