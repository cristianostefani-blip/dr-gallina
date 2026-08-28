"use client";

import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

// FÁBRICA DE DADOS - Centralização das informações de contato
const FOOTER_DATA = {
  logoAlt: "Gallina Advocacia e Assessoria Jurídica",
  email: "contato@gallina.adv.br",
  addresses: [
    {
      title: "Sede São Caetano do Sul (SP)",
      line1: "Rua Niterói 362, Conjunto 91",
      line2: "Centro, São Caetano do Sul - SP"
    },
    {
      title: "Sede Curitiba (PR)",
      line1: "Rua Ministro José Linhares 954, Casa 1",
      line2: "Bairro Alto, Curitiba - PR"
    }
  ],
  // Iframe focado na sede principal (São Caetano)
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.553944682029!2d-46.57468162386345!3d-23.61957436243283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cb2da629e41%3A0x80352ef864817a26!2sR.%20Niter%C3%B3i%2C%20362%20-%20Centro%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009510-200!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
};

export default function Footer() {
  return (
    <footer className="bg-[#050914] text-slate-300 border-t border-white/10 pt-20 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Coluna 1: Marca e Contato Direto */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-8">
            <div className="relative w-48 h-48 -ml-4">
              <Image 
                src="/images/logoNew1.png" 
                alt={FOOTER_DATA.logoAlt}
                fill
                sizes="192px"
                className="object-contain"
              />
            </div>
            
            <div className="space-y-4 w-full">
              <a href={`mailto:${FOOTER_DATA.email}`} className="flex items-center gap-3 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5 text-amber-500" />
                <span>{FOOTER_DATA.email}</span>
              </a>
              
              {/* Integração com o Motor de Rastreamento (Silent Tracking) */}
              <div className="pt-4">
                <WhatsAppButton 
                  buttonLocation="footer_contact" 
                  text="Falar no WhatsApp" 
                  variant="outline"
                  className="w-full sm:w-auto border-amber-500/50 text-amber-500 hover:bg-amber-500/10"
                />
              </div>
            </div>
          </div>

          {/* Coluna 2: Endereços */}
          <div className="lg:col-span-4 flex flex-col space-y-8 lg:pt-8">
            <h3 className="text-white font-semibold text-lg tracking-wide uppercase">Localização</h3>
            <div className="space-y-8">
              {FOOTER_DATA.addresses.map((addr, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">{addr.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {addr.line1}<br />
                      {addr.line2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 3: Mapa Interativo */}
          <div className="lg:col-span-4 h-64 lg:h-auto w-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative">
            <iframe 
              src={FOOTER_DATA.mapSrc} 
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(80%)" }} // Efeito Dark Mode no mapa
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Linha de Copyright e OAB */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Gallina Advocacia. Todos os direitos reservados.</p>
          <p>OAB/SP 238.159</p>
        </div>
      </div>
    </footer>
  );
}