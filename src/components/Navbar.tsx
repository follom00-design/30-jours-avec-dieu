import React, { useState, useEffect } from 'react';
import { PRODUCT_NAME, PRODUCT_PRICE, PURCHASE_URL } from '../config';

interface NavbarProps {
  onOpenCheckoutModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckoutModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EADBCE]/70 py-3.5 shadow-sm'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-editorial font-bold tracking-tight text-[#1F1C18] hover:text-[#B58A3E] transition-colors"
        >
          {PRODUCT_NAME}
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#595248]">
          <a
            href="#parcours"
            className="hover:text-[#1F1C18] transition-colors relative py-1 hover:border-b hover:border-[#B58A3E]"
          >
            Le parcours
          </a>
          <a
            href="#contenu"
            className="hover:text-[#1F1C18] transition-colors relative py-1 hover:border-b hover:border-[#B58A3E]"
          >
            Contenu
          </a>
          <a
            href="#apercu"
            className="hover:text-[#1F1C18] transition-colors relative py-1 hover:border-b hover:border-[#B58A3E]"
          >
            Aperçu
          </a>
          <a
            href="#faq"
            className="hover:text-[#1F1C18] transition-colors relative py-1 hover:border-b hover:border-[#B58A3E]"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PURCHASE_URL}
            onClick={handleCtaClick}
            className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#2A241E] hover:bg-[#3D352C] active:scale-[0.98] rounded-full transition-all shadow-sm hover:shadow whitespace-nowrap"
          >
            Commencer · {PRODUCT_PRICE}
          </a>
        </div>
      </div>
    </header>
  );
};
