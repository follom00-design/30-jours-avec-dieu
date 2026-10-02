import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../config';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            <HelpCircle className="w-4 h-4 text-[#B58A3E]" />
            <span>Foire aux questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-[#1F1C18] text-balance">
            Questions fréquentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#595248]">
            Tout ce que tu as besoin de savoir avant de commencer tes 30 jours.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl overflow-hidden transition-all shadow-sm hover:border-[#D6C4B0]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-editorial font-bold text-[#1F1C18]">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EFE5D8] flex items-center justify-center shrink-0 text-[#8C621E] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#EFE5D8]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#595248] leading-relaxed border-t border-[#F5EFE6]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
