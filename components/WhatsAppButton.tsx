"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

// Tipagem global para o DataLayer do GTM
declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface WhatsAppButtonProps {
  buttonLocation: string; // Ex: 'hero', 'footer', 'floating'
  className?: string;
  text?: string;
  variant?: "solid" | "outline" | "glass";
}

// Constantes centralizadas (Fábrica)
const WHATSAPP_NUMBER = "5511947386674";
const DEFAULT_MESSAGE = "Olá! Gostaria de agendar uma consulta especializada com o Dr. Marcelo Gallina.";

function WhatsAppButtonLogic({
  buttonLocation,
  className = "",
  text = "Falar com Especialista",
  variant = "solid",
}: WhatsAppButtonProps) {
  const searchParams = useSearchParams();

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 1. Captura UTMs silenciosamente
    const utmSource = searchParams.get("utm_source") || "direct";
    const utmCampaign = searchParams.get("utm_campaign") || "organic";
    const utmMedium = searchParams.get("utm_medium") || "none";

    // 2. Disparo para o DataLayer (GTM)
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        button_location: buttonLocation,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
      });
    }

    // 3. Redirecionamento limpo (White Hat)
    const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Estilização Premium condicional
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300";
  const variants = {
    solid: "bg-blue-900 text-white hover:bg-blue-950 shadow-lg hover:shadow-xl",
    outline: "border border-blue-900 text-blue-900 hover:bg-blue-50",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
  };

  return (
    <motion.a
      href="#"
      onClick={handleWhatsAppClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{text}</span>
    </motion.a>
  );
}

// O Suspense é OBRIGATÓRIO no Next.js App Router ao usar useSearchParams
// Isso evita que a página inteira perca a renderização estática (SSG)
export default function WhatsAppButton(props: WhatsAppButtonProps) {
  return (
    <Suspense fallback={<div className="w-48 h-12 bg-slate-200 animate-pulse rounded-md"></div>}>
      <WhatsAppButtonLogic {...props} />
    </Suspense>
  );
}