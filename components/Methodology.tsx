"use client";

import { motion } from "framer-motion";
import { Search, Gavel, ShieldCheck } from "lucide-react";

const METHODOLOGY_STEPS = [
  {
    icon: Search,
    title: "Análise Cautelar Completa",
    description: "Mapeamento rigoroso do cenário jurídico e levantamento de dados operacionais antes de qualquer movimentação processual."
  },
  {
    icon: Gavel,
    title: "Estratégia e Fundamentação",
    description: "Elaboração de teses defensivas e estruturação de compliance baseada nas normativas mais recentes do Direito Público."
  },
  {
    icon: ShieldCheck,
    title: "Atuação e Blindagem",
    description: "Execução cirúrgica nos âmbitos administrativos e judiciais, visando a preservação patrimonial e institucional do cliente."
  }
];

export default function Methodology() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-4"
          >
            Metodologia de Atuação
          </motion.h2>
          <p className="text-slate-600">Rigor analítico em cada etapa do processo jurídico.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {METHODOLOGY_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Marcador Central */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center shadow-sm z-10">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                </div>

                {/* Card de Conteúdo */}
                <div className={`ml-16 md:ml-0 w-full md:w-[45%] ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                }`}>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group">
                    <div className={`w-12 h-12 bg-blue-900/5 rounded-xl flex items-center justify-center mb-4 ${
                      index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                    }`}>
                      <Icon className="w-6 h-6 text-blue-900 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}