import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { PREVIEW_DAYS, PRODUCT_PRICE, PURCHASE_URL } from '../config';

interface ProductPreviewProps {
  onOpenCheckoutModal?: () => void;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({ onOpenCheckoutModal }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const current = PREVIEW_DAYS[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % PREVIEW_DAYS.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + PREVIEW_DAYS.length) % PREVIEW_DAYS.length);
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (PURCHASE_URL === '#' && onOpenCheckoutModal) {
      e.preventDefault();
      onOpenCheckoutModal();
    }
  };

  return (
    <section id="apercu" className="py-20 sm:py-28 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            Transparence totale
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-editorial font-bold text-[#1F1C18] text-balance">
            Jette un coup d'œil à l'intérieur
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#595248] leading-relaxed">
            Feuillette quelques extraits pour découvrir l'élégance de la mise en page, la pureté des textes et la douceur du ton employé.
          </p>
        </div>

        {/* Tab selection */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
          {PREVIEW_DAYS.map((day, idx) => (
            <button
              key={day.id}
              onClick={() => setSelectedIndex(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                selectedIndex === idx
                  ? 'bg-[#241E18] text-white shadow-sm'
                  : 'bg-[#FFFFFF] text-[#695F52] hover:text-[#1F1C18] border border-[#EADBCE]'
              }`}
            >
              {day.dayNumber} · {day.theme}
            </button>
          ))}
        </div>

        {/* Mockup Display Box */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Smartphone frame preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px]">
              {/* Phone Frame */}
              <div className="bg-[#1F1B17] p-3 rounded-[2.5rem] shadow-phone border border-[#3E342B]">
                {/* Notch */}
                <div className="w-20 h-4 bg-[#14120E] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2C241D] mr-2"></div>
                  <div className="w-6 h-1 rounded-full bg-[#2C241D]"></div>
                </div>

                {/* Inside Screen Content */}
                <div className="bg-[#FAF7F2] rounded-[2rem] p-5 sm:p-6 min-h-[460px] flex flex-col justify-between border border-[#EADBCE] text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Top Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#EFE5D8]">
                        <span className="text-[11px] font-bold tracking-widest uppercase text-[#8C621E]">
                          {current.dayNumber}
                        </span>
                        <span className="text-[10px] text-[#A39788] uppercase">
                          30 Jours avec Dieu
                        </span>
                      </div>

                      {/* Theme */}
                      <div>
                        <h4 className="text-xl font-editorial font-bold text-[#1F1C18] leading-tight mb-2">
                          {current.theme}
                        </h4>
                        <div className="text-xs text-[#7A6E5F] italic bg-[#F3ECE1] p-3 rounded-lg border-l-2 border-[#B58A3E]">
                          {current.verse}
                        </div>
                      </div>

                      {/* Reflection */}
                      <div>
                        <div className="text-[10px] tracking-wider uppercase font-bold text-[#8C621E] mb-1">
                          Réflexion du jour
                        </div>
                        <p className="text-xs text-[#4D453A] leading-relaxed">
                          {current.reflection}
                        </p>
                      </div>

                      {/* Guided Prayer */}
                      <div className="bg-white/80 border border-[#EFE5D8] rounded-xl p-3">
                        <div className="text-[10px] tracking-wider uppercase font-bold text-[#8C621E] mb-1 flex items-center gap-1">
                          <span>Prière guidée</span>
                        </div>
                        <p className="text-[11px] text-[#595248] italic leading-relaxed">
                          {current.prayer}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Locked preview teaser at bottom */}
                  <div className="pt-3 border-t border-[#EFE5D8] flex items-center justify-between text-[11px] text-[#7A6E5F]">
                    <span className="flex items-center gap-1 text-[#8C621E] font-medium">
                      <Lock className="w-3 h-3" />
                      27 autres jours inclus
                    </span>
                    <span>100% numérique</span>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-20 h-1 bg-[#3A3026] rounded-full mx-auto mt-2"></div>
              </div>

              {/* Navigation arrows for phone preview */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <button
                  onClick={handlePrev}
                  aria-label="Extrait précédent"
                  className="w-9 h-9 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center text-[#595248] hover:text-[#1F1C18] shadow-sm hover:shadow cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#7A6E5F] font-medium">
                  {selectedIndex + 1} / {PREVIEW_DAYS.length}
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Extrait suivant"
                  className="w-9 h-9 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center text-[#595248] hover:text-[#1F1C18] shadow-sm hover:shadow cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Details & Call to Action */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-wider uppercase text-[#8C621E]">
              <Eye className="w-4 h-4" />
              <span>Extrait certifié conforme</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#1F1C18]">
              Une lecture apaisante, pensée pour ton smartphone.
            </h3>

            <p className="text-sm sm:text-base text-[#595248] leading-relaxed">
              Pas de publicités, pas de distractions, pas d'algorithmes. Dès que tu ouvres le WebBook, tu pénètres dans un havre de calme propice au recueillement.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#3E362C] text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C621E] shrink-0 mt-0.5" />
                <span>Textes rédigés avec une sensibilité chrétienne profonde et respectueuse.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C621E] shrink-0 mt-0.5" />
                <span>Format vertical étudié pour une lecture à une main dans ton lit ou tes trajets.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#8C621E] shrink-0 mt-0.5" />
                <span>Progression graduée pour bâtir une habitude durable sans découragement.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={PURCHASE_URL}
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#221C16] hover:bg-[#3D352C] rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                JE COMMENCE MES 30 JOURS · {PRODUCT_PRICE}
              </a>
              <div className="text-[11px] text-[#8C7E6F] mt-2">
                Accès numérique immédiat après confirmation du paiement
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
