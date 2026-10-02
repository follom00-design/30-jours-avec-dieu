import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, KeyRound, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: CreditCard,
      title: "ACHÈTE",
      subtitle: "Un paiement unique sécurisé",
      description: "Choisis le parcours et effectue ton paiement simple et sécurisé en quelques secondes.",
    },
    {
      step: "02",
      icon: KeyRound,
      title: "ACCÈDE",
      subtitle: "Réception instantanée",
      description: "Après confirmation, récupère immédiatement ton accès personnel par e-mail et sur ton écran.",
    },
    {
      step: "03",
      icon: Sparkles,
      title: "COMMENCE",
      subtitle: "Ton Jour 1 t'attend",
      description: "Ouvre ton WebBook sur ton téléphone ou tablette et commence paisiblement ton Jour 1.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            En toute simplicité
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-[#1F1C18] text-balance">
            Comment ça fonctionne
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6457]">
            Trois étapes claires pour débuter ton parcours dès aujourd'hui sans aucune complication technique.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Subtle horizontal connecting line for desktop */}
          <div 
            aria-hidden="true" 
            className="hidden md:block absolute top-12 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-[#D6C4B0] to-transparent -z-0"
          />

          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-7 shadow-editorial hover:border-[#D6C4B0] transition-all text-center md:text-left z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-editorial text-3xl font-bold text-[#8C621E]">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EFE5D8] flex items-center justify-center text-[#8C621E]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold tracking-wide uppercase text-[#1F1C18] mb-1">
                    {s.title}
                  </h3>
                  <div className="text-xs text-[#8C621E] font-medium mb-3">
                    {s.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
