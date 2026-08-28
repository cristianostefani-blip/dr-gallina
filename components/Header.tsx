"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-[100] bg-[#0B132B]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Logo aumentada em ~40% e altura do Header expandida para h-24 */}
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
        <div>
          <WhatsAppButton 
            buttonLocation="header_fixed" 
            text="Falar no WhatsApp" 
            variant="solid"
            className="hidden sm:inline-flex shadow-lg shadow-blue-900/20"
          />
          <WhatsAppButton 
            buttonLocation="header_fixed_mobile" 
            text="Agendar" 
            variant="solid"
            className="sm:hidden px-4 text-sm"
          />
        </div>
      </div>
    </motion.header>
  );
}