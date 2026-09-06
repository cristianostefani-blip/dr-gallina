"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

// Centralizamos os links de navegação para facilitar manutenção
const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Trajetória", href: "#biography" },
  { label: "Áreas de Atuação", href: "#practice-areas" },
  { label: "Metodologia", href: "#methodology" },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Evita erro de hidratação no Next.js ao usar createPortal
  useEffect(() => setMounted(true), []);

  // Trava o scroll da página enquanto o menu estiver aberto (UX Premium)
  useEffect(() => {
    if (isNavOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isNavOpen]);

  // Função para ancoragem suave considerando a altura do Header fixo (pt-24)
  const scrollToSection = (href: string) => {
    setIsNavOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full z-[100] bg-[#0B132B]/90 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="relative w-44 h-16 sm:w-56 sm:h-20">
            <Image 
              src="/images/logoNew1.png" 
              alt="Gallina Advocacia"
              fill
              sizes="(max-width: 768px) 176px, 224px"
              className="object-contain object-left"
              priority
            />
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            {/* RESOLUÇÃO DO BUG: Envelopamos em divs nativas para garantir o hide/show */}
            <div className="hidden sm:block">
              <WhatsAppButton 
                buttonLocation="header_fixed" 
                text="Falar no WhatsApp" 
                variant="solid"
                className="shadow-lg shadow-blue-900/20"
              />
            </div>
            <div className="block sm:hidden">
              <WhatsAppButton 
                buttonLocation="header_fixed_mobile" 
                text="Agendar" 
                variant="solid"
                className="px-4 text-sm"
              />
            </div>

            {/* Menu Hamburger para Desktop e Mobile */}
            <button
              onClick={() => setIsNavOpen(true)}
              className="p-2 text-white hover:text-amber-500 transition-colors focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* RENDERIZAÇÃO VIA PORTAL: Menu lateral imune a conflitos de Z-Index */}
      {mounted && createPortal(
        <AnimatePresence>
          {isNavOpen && (
            <div className="fixed inset-0 z-[2147483647] flex justify-end">
              
              {/* Fundo Desfocado (Backdrop) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsNavOpen(false)}
                className="absolute inset-0 bg-[#0B132B]/70 backdrop-blur-sm cursor-pointer"
              />

              {/* Gaveta do Menu */}
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-sm h-full bg-[#050914] shadow-2xl flex flex-col border-l border-white/10"
              >
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="text-amber-500 font-semibold tracking-widest uppercase text-sm">
                    Navegação
                  </span>
                  <button
                    onClick={() => setIsNavOpen(false)}
                    className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col p-6 space-y-2 flex-grow overflow-y-auto">
                  {NAV_LINKS.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-lg text-slate-300 hover:text-white py-4 border-b border-white/5 hover:border-amber-500/50 transition-all duration-300"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                {/* CTA Inferior Exclusivo do Menu */}
                <div className="p-6 border-t border-white/10 bg-white/5">
                  <WhatsAppButton 
                    buttonLocation="nav_drawer" 
                    text="Consulta Estratégica" 
                    variant="solid"
                    className="w-full py-4 text-lg bg-amber-500 hover:bg-amber-400 text-slate-900 border-none shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  />
                </div>
              </motion.nav>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}