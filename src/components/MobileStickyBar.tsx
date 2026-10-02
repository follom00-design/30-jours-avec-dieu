import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_PRICE, PURCHASE_URL, PRODUCT_NAME } from '../config';

interface MobileStickyBarProps {
  onOpenCheckoutModal?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCheckoutModal }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling past hero (~350px)
      setShow(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (PURCHASE_URL === '#' && onOpenCheckoutModal) {
      e.preventDefault();
      onOpenCheckoutModal();
    }
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Action rapide mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#EADBCE] px-4 py-2.5 shadow-[0_-8px_20px_rgba(30,24,18,0.08)] max-h-[60px]"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="leading-tight">
          <div className="text-[11px] font-bold text-[#1F1C18] truncate font-editorial">
            {PRODUCT_NAME}
          </div>
          <div className="text-[12px] font-bold text-[#8C621E]">
            {PRODUCT_PRICE}
          </div>
        </div>

        <a
          href={PURCHASE_URL}
          onClick={handleCtaClick}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#221C16] hover:bg-[#3D352C] rounded-full shadow-sm cursor-pointer whitespace-nowrap"
        >
          <span>Commencer</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
        </a>
      </div>
    </aside>
  );
};
