import React from 'react';
import { motion } from 'motion/react';
import { RefreshCw, MessageSquareDashed, CalendarDays, HeartHandshake } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: RefreshCw,
      title: "L'élan qui retombe",
      description: "Tu commences à prier avec beaucoup de bonne volonté, puis tu abandonnes quelques jours plus tard, découragé(e) par le rythme du quotidien.",
    },
    {
      icon: MessageSquareDashed,
      title: "Le silence ou le doute",
      description: "Tu te retrouves face à toi-même et tu ne sais parfois pas quoi dire dans tes prières, ayant l'impression de répéter machinalement les mêmes phrases.",
    },
    {
      icon: CalendarDays,
      title: "Le manque de régularité",
      description: "Tu aimerais avoir une routine spirituelle plus régulière, mais sans méthode claire, les journées défilent et ton temps de recueillement passe au second plan.",
    },
    {
      icon: HeartHandshake,
      title: "Le désir d'un vrai tête-à-tête",
      description: "Tu aimerais prendre chaque jour un vrai moment avec Dieu, sans pression religieuse, mais comme un rendez-vous paisible et bienfaisant.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EFE9DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            Le constat sincère
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] leading-snug font-editorial font-bold text-[#1F1C18] text-balance">
            Tu veux prier davantage… mais tu n'arrives pas à tenir dans la durée.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6E6457] leading-relaxed">
            Ce n'est pas un manque de foi, c'est simplement l'absence d'un cadre doux, réaliste et adapté à ta vie d'aujourd'hui.
          </p>
        </div>

        {/* 4 Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {problems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FFFFFF] border border-[#EADBCE]/80 rounded-2xl p-6 sm:p-7 shadow-editorial hover:border-[#D6C4B0] transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F2EA] border border-[#EFE5D8] flex items-center justify-center shrink-0 text-[#8C621E] group-hover:bg-[#EFE5D8] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-editorial font-bold text-[#1F1C18] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Thoughtful Bridge */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base italic text-[#706454] font-editorial max-w-xl mx-auto">
            « La prière n'a pas besoin d'être longue ou parfaite pour être accueillie. Elle a seulement besoin d'être commencée. »
          </p>
        </div>

      </div>
    </section>
  );
};
