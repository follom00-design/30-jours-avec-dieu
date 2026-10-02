import React from 'react';
import { motion } from 'motion/react';
import { BookMarked, MessageSquare, HeartHandshake, PenLine, Sprout } from 'lucide-react';
import { DAILY_PARTS } from '../config';

const ICONS = [BookMarked, MessageSquare, HeartHandshake, PenLine, Sprout];

export const WebBookContent: React.FC = () => {
  return (
    <section id="contenu" className="py-20 sm:py-28 bg-[#F6F1EA] border-y border-[#EFE9DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            L'architecture de chaque journée
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-editorial font-bold text-[#1F1C18] text-balance">
            Chaque jour, un nouveau moment avec Dieu.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#595248] leading-relaxed">
            Une progression réfléchie en 5 volets essentiels, conçue pour nourrir ton esprit sans jamais t'épuiser.
          </p>
        </div>

        {/* 5 Elements Grid (2 on top, 3 on bottom or responsive grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DAILY_PARTS.map((item, idx) => {
            const Icon = ICONS[idx] || BookMarked;
            const isWide = idx === 0 || idx === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-6 sm:p-7 shadow-editorial hover:border-[#D6C4B0] transition-all flex flex-col justify-between ${
                  isWide ? 'lg:col-span-1 md:col-span-1' : 'lg:col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#EFE5D8] flex items-center justify-center text-[#8C621E]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-editorial font-bold text-[#1F1C18] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-[#706454] mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  <p className="text-xs text-[#82786B] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F2ECE4] flex items-center justify-between text-[11px] text-[#A39788]">
                  <span>Étape 0{idx + 1} du rituel</span>
                  <span className="text-[#8C621E] font-medium">1 à 2 minutes</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
