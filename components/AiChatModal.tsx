"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User } from "lucide-react";

interface AiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiChatModal({ isOpen, onClose }: AiChatModalProps) {
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Olá. Sou o assistente virtual de pesquisa legislativa. Qual é a sua dúvida jurídica?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", text: "Ocorreu um erro de conexão. Tente novamente." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2147483647] flex justify-end">
          {/* Overlay Escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B132B]/60 backdrop-blur-sm"
          />
          
          {/* Painel Lateral */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col"
          >
            {/* Header do Chat */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Assistente Jurídico (IA)</h3>
                  <p className="text-xs text-slate-500">Consulta baseada em legislação</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-700 bg-white rounded-full shadow-sm">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Área de Mensagens */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 scrollbar-thin scrollbar-thumb-slate-200">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-slate-200" : "bg-blue-100"}`}>
                    {msg.role === "user" ? <User className="w-4 h-4 text-slate-600" /> : <Bot className="w-4 h-4 text-blue-900" />}
                  </div>
                  <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                    msg.role === "user" ? "bg-blue-900 text-white rounded-tr-none" : "bg-white border border-slate-100 shadow-sm text-slate-700 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-blue-900" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm rounded-tl-none flex gap-1">
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input de Texto */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Digite sua dúvida legal..."
                  className="w-full pl-4 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}