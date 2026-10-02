import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap, Sparkles, Smartphone, Download } from 'lucide-react';
import { PRODUCT_PRICE, PURCHASE_URL, PRODUCT_NAME } from '../config';

interface PricingSectionProps {
  onOpenCheckoutModal?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckoutModal }) => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (PURCHASE_URL === '#' && onOpenCheckoutModal) {
      e.preventDefault();
      onOpenCheckoutModal();
    }
  };

  const features = [
    "Accès complet aux 30 jours du WebBook",
    "La Parole du jour, la réflexion et la prière guidée quotidienne",
    "L'espace de recueillement et les actions concrètes",
    "BONUS 01 : 10 prières du matin",
    "BONUS 02 : 10 prières du soir",
    "BONUS 03 : Prières pour les moments difficiles",
    "BONUS 04 : Calendrier de suivi 30 jours",
    "BONUS 05 : Version mobile fluide & édition imprimable",
    "Accès illimité sans abonnement",
  ];

  return (
    <section id="prix" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background warm ambiance */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-[#EFE5D8]/70 via-[#F3ECE1]/60 to-transparent blur-3xl pointer-events-none rounded-full"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            Offre complète & transparente
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-editorial font-bold text-[#1F1C18] text-balance">
            Commence ton parcours aujourd'hui
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#595248]">
            Un investissement unique dans ta vie spirituelle, sans abonnement caché.
          </p>
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFFF] border-2 border-[#D6C4B0] rounded-3xl p-6 sm:p-10 shadow-editorial relative overflow-hidden max-w-2xl mx-auto"
        >
          {/* Subtle Top Gold Banner */}
          <div className="text-center pb-6 border-b border-[#EFE9DF]">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#8C621E] mb-1">
              {PRODUCT_NAME}
            </div>
            <div className="text-sm text-[#706454] mb-4">
              Accès au WebBook + tous les bonus
            </div>

            {/* Price display */}
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-xs text-[#8C7E6F] uppercase font-medium">Prix :</span>
              <span className="text-4xl sm:text-5xl font-editorial font-bold text-[#1F1C18] tracking-tight">
                {PRODUCT_PRICE}
              </span>
            </div>
            <div className="text-xs text-[#8C7E6F] mt-1 font-medium">
              Paiement unique · Accès à vie
            </div>
          </div>

          {/* Included Features List */}
          <div className="py-7 space-y-3.5">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#EADBCE] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#8C621E]" />
                </div>
                <span className="text-xs sm:text-sm text-[#3E362C]">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Main Action Button */}
          <div className="pt-2 text-center">
            <a
              href={PURCHASE_URL}
              onClick={handleCtaClick}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 text-base font-bold tracking-wide text-white bg-[#221C16] hover:bg-[#3D352C] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>JE COMMENCE MES 30 JOURS</span>
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </a>

            <div className="text-xs text-[#706454] font-medium mt-3">
              Accès numérique immédiat après confirmation du paiement
            </div>

            {/* Reassurance pills */}
            <div className="mt-5 pt-4 border-t border-[#F0EAE1] flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#8C7E6F]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#52794A]" />
                Paiement 100% sécurisé
              </span>
              <span aria-hidden="true" className="text-[#DDD3C7]">·</span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#8C621E]" />
                Compatible tout smartphone
              </span>
              <span aria-hidden="true" className="text-[#DDD3C7]">·</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#8C621E]" />
                Accès instantané 24/7
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
