import React from 'react';
import { motion } from 'motion/react';
import { Gift, Sun, Moon, ShieldAlert, CalendarCheck2, Smartphone } from 'lucide-react';
import { BONUSES } from '../config';

const BONUS_ICONS = [Sun, Moon, ShieldAlert, CalendarCheck2, Smartphone];

export const BonusesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F1EA] border-t border-[#EFE9DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            <Gift className="w-4 h-4 text-[#B58A3E]" />
            <span>Ressources offertes avec ton accès</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-editorial font-bold text-[#1F1C18] text-balance">
            Et ce n'est pas tout…
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#595248] leading-relaxed">
            Pour t'accompagner bien au-delà des 30 journées, nous avons préparé 5 compléments précieux inclus sans frais supplémentaires.
          </p>
        </div>

        {/* 5 Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BONUSES.map((b, idx) => {
            const Icon = BONUS_ICONS[idx] || Gift;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-6 sm:p-7 shadow-editorial hover:border-[#D6C4B0] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#8C621E]">
                      {b.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#EFE5D8] flex items-center justify-center text-[#8C621E]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-editorial font-bold text-[#1F1C18] mb-2.5">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F2ECE4] flex items-center justify-between text-[11px] text-[#7A6E5F]">
                  <span>Valeur inestimable</span>
                  <span className="font-semibold text-[#8C621E]">Inclus gratuitement</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
