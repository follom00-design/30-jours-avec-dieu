import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PRODUCT_PRICE, PURCHASE_URL } from '../config';

interface FinalCtaSectionProps {
  onOpenCheckoutModal?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckoutModal }) => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (PURCHASE_URL === '#' && onOpenCheckoutModal) {
      e.preventDefault();
      onOpenCheckoutModal();
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#221C16] text-[#F5EFE6] overflow-hidden">
      {/* Background imagery with measured contrast scrim */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/src/assets/images/spiritual_morning_peace_1790918138207.jpg"
          alt="Atmosphère paisible de recueillement et de prière"
          className="w-full h-full object-cover opacity-20 filter brightness-75"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1914] via-[#221C16]/90 to-[#1F1914]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle decorative motif */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Faire le premier pas</span>
        </div>

        {/* Emotionally resonant title */}
        <h2 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-editorial font-bold text-white tracking-tight leading-[1.2] mb-6 text-balance max-w-3xl mx-auto">
          30 jours. Quelques minutes par jour. Un rendez-vous que tu choisis de prendre.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#DDD3C7] font-editorial italic max-w-xl mx-auto mb-10">
          « Commence simplement. Un jour à la fois. »
        </p>

        {/* Price and Action Button */}
        <div className="inline-flex flex-col items-center max-w-md w-full mx-auto">
          <div className="text-xs uppercase tracking-widest text-[#B58A3E] font-semibold mb-2">
            Tarif unique sans abonnement
          </div>
          <div className="text-4xl sm:text-5xl font-editorial font-bold text-white mb-6">
            {PRODUCT_PRICE}
          </div>

          <a
            href={PURCHASE_URL}
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold text-[#1F1C18] bg-gradient-to-r from-[#EFE5D8] via-[#FFFFFF] to-[#EFE5D8] hover:brightness-105 active:scale-[0.98] rounded-2xl shadow-xl transition-all group"
          >
            <span>COMMENCER MON PARCOURS</span>
            <ArrowRight className="w-5 h-5 text-[#8C621E] transition-transform group-hover:translate-x-1" />
          </a>

          {/* Micro reassuring note */}
          <p className="text-xs text-[#B5A99B] mt-4 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#8C621E]" />
            <span>Ton accès sera disponible après confirmation du paiement.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
