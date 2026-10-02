import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Smartphone, Clock, ArrowRight } from 'lucide-react';
import { PRODUCT_PRICE, PURCHASE_URL } from '../config';

interface HeroProps {
  onOpenCheckoutModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckoutModal }) => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (PURCHASE_URL === '#' && onOpenCheckoutModal) {
      e.preventDefault();
      onOpenCheckoutModal();
    }
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6F1EA] to-[#FAF7F2]">
      {/* Subtle warm glow background */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#EFE5D8]/80 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, copy, price, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Unboxed editorial kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#96712E]">
              <Sparkles className="w-3.5 h-3.5 text-[#B58A3E]" />
              <span>Un parcours de 30 jours</span>
            </div>

            {/* Grand Titre */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] font-editorial font-bold text-[#1F1C18] tracking-tight mb-5 text-balance">
              Et si tu prenais 30 jours pour te rapprocher de Dieu ?
            </h1>

            {/* Sous-titre */}
            <p className="text-base sm:text-lg text-[#595248] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
              Un parcours guidé pour retrouver une routine de prière, un jour après l'autre.
            </p>

            {/* Micro métadonnées sans pillule */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#70675B] font-medium mb-7">
              <span>30 jours</span>
              <span aria-hidden="true" className="text-[#C5BAAC]">·</span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#8C621E]" />
                Lecture sur téléphone
              </span>
              <span aria-hidden="true" className="text-[#C5BAAC]">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8C621E]" />
                Accès immédiat
              </span>
            </div>

            {/* Prix & CTA block */}
            <div className="bg-[#FFFFFF]/70 border border-[#EADBCE] rounded-2xl p-5 sm:p-6 shadow-editorial max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs text-[#82786B] uppercase tracking-wider font-medium">Tarif du parcours complet</div>
                  <div className="text-3xl sm:text-4xl font-editorial font-bold text-[#1F1C18] tracking-tight">
                    {PRODUCT_PRICE}
                  </div>
                </div>

                <a
                  href={PURCHASE_URL}
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-[#221C16] hover:bg-[#383027] active:scale-[0.98] rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer group"
                >
                  <span>COMMENCER MON PARCOURS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Rassurance */}
              <div className="pt-3 border-t border-[#F0E8DD] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#70675B]">
                <div className="font-medium text-[#4D453A]">
                  Accès immédiat après paiement
                </div>
                <div className="flex items-center gap-1.5 text-[#82786B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#52794A]" />
                  <span>Paiement sécurisé · Produit numérique</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: WebBook Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative max-w-[340px] sm:max-w-[380px] w-full">
              {/* Decorative halo around device */}
              <div 
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/15 to-[#B58A3E]/10 rounded-3xl blur-2xl -z-10 transform scale-105"
              />

              {/* Editorial Phone / Reader Mockup */}
              <div className="bg-[#1C1814] p-3 sm:p-3.5 rounded-[2.5rem] shadow-phone border border-[#40372F]/40 transition-transform duration-500 hover:-translate-y-1">
                {/* Speaker pill notch */}
                <div className="w-20 h-4 bg-[#14120F] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#2A241E] mr-2"></div>
                  <div className="w-8 h-1 rounded-full bg-[#2A241E]"></div>
                </div>

                {/* Inner Screen */}
                <div className="relative rounded-[2rem] overflow-hidden bg-[#FAF7F2] border border-[#EADBCE]">
                  <img
                    src="/src/assets/images/webbook_hero_cover_1790918113345.jpg"
                    alt="Mockup du WebBook chrétien 30 Jours avec Dieu"
                    className="w-full h-auto object-cover aspect-[4/5] block"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />

                  {/* Gentle overlay info bar on device bottom */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1917]/95 via-[#1C1917]/70 to-transparent p-4 pt-10 text-white">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-semibold mb-0.5">
                      WebBook Premium
                    </div>
                    <div className="text-sm font-editorial font-bold text-white">
                      30 Jours avec Dieu
                    </div>
                    <p className="text-[11px] text-[#DDD6CE] line-clamp-1">
                      Ton rendez-vous quotidien de paix et de prière
                    </p>
                  </div>
                </div>

                {/* Bottom home indicator */}
                <div className="w-24 h-1 bg-[#40372F] rounded-full mx-auto mt-2.5"></div>
              </div>

              {/* Floating micro card: Un jour après l'autre */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#EADBCE] rounded-xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F7F2EA] flex items-center justify-center text-sm">
                  ✨
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1F1C18]">Simple & Apaisant</div>
                  <div className="text-[10px] text-[#70675B]">5 à 10 min par jour</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
