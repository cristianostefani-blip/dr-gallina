"use client";

import { motion, Variants } from "framer-motion"; // <-- Variants adicionado aqui
import { Landmark, Scale, ShoppingBag, FileSignature, Briefcase, Building2 } from "lucide-react";

// FÁBRICA DE DADOS - Centralização para fácil manutenção
const AREAS_CONTENT = {
  sectionTitle: "Áreas de Atuação",
  sectionSubtitle: "Expertise jurídica multidisciplinar focada em resultados estratégicos e segurança institucional.",
  areas: [
    {
      title: "Direito Bancário",
      description: "Defesa estratégica contra abusos financeiros, revisão de juros e renegociação de passivos.",
      icon: Landmark,
    },
    {
      title: "Direito Civil",
      description: "Resolução de litígios complexos, proteção patrimonial e garantia de direitos fundamentais.",
      icon: Scale,
    },
    {
      title: "Direito do Consumidor",
      description: "Atuação combativa na defesa de relações de consumo e responsabilização civil.",
      icon: ShoppingBag,
    },
    {
      title: "Direito Contratual",
      description: "Elaboração, revisão e blindagem de instrumentos jurídicos para máxima segurança negocial.",
      icon: FileSignature,
    },
    {
      title: "Direito Trabalhista",
      description: "Assessoria preventiva e contenciosa focada na mitigação de passivos e conformidade legal.",
      icon: Briefcase,
    },
    {
      title: "Direito Empresarial",
      description: "Estruturação societária, governança corporativa e blindagem legal para negócios.",
      icon: Building2,
    },
  ]
};

// Variáveis tipadas explicitamente com : Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-[#0B132B] relative overflow-hidden">
      {/* Elemento de background em Glassmorphism para profundidade */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            {AREAS_CONTENT.sectionTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            {AREAS_CONTENT.sectionSubtitle}
          </motion.p>
        </div>

        {/* Grid de Cards com animação orquestrada */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {AREAS_CONTENT.areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-amber-400/50 transition-colors duration-300 flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-900/50 border border-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-400/20 group-hover:border-amber-400/40 transition-all duration-300">
                  <Icon className="w-6 h-6 text-slate-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}