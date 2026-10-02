import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { WebBookContent } from './components/WebBookContent';
import { ProductPreview } from './components/ProductPreview';
import { BenefitsSection } from './components/BenefitsSection';
import { ForWhomSection } from './components/ForWhomSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleOpenCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleCloseCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#24211D] flex flex-col selection:bg-[#EADBCE] selection:text-[#1F1C18]">
      {/* Navigation Top Bar */}
      <Navbar onOpenCheckoutModal={handleOpenCheckoutModal} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenCheckoutModal={handleOpenCheckoutModal} />

        {/* 2. Problème */}
        <ProblemSection />

        {/* 3. Solution & Mockup Overview */}
        <SolutionSection onOpenCheckoutModal={handleOpenCheckoutModal} />

        {/* 4. Comment ça fonctionne (01, 02, 03) */}
        <HowItWorks />

        {/* 5. Ce que contient le WebBook (5 éléments quotidiens) */}
        <WebBookContent />

        {/* 6. Aperçu du produit (Lecteur interactif / extraits) */}
        <ProductPreview onOpenCheckoutModal={handleOpenCheckoutModal} />

        {/* 7. Bénéfices */}
        <BenefitsSection />

        {/* 8. Pour qui ? (avec clarification sans fausse promesse) */}
        <ForWhomSection />

        {/* 9. Bonus offerts */}
        <BonusesSection />

        {/* 10. Prix & Récapitulatif d'achat */}
        <PricingSection onOpenCheckoutModal={handleOpenCheckoutModal} />

        {/* 11. Espace Lecteurs / Retours */}
        <TestimonialsSection />

        {/* 12. Questions fréquentes (Accordéons) */}
        <FaqSection />

        {/* 13. Section Finale Émotionnelle */}
        <FinalCtaSection onOpenCheckoutModal={handleOpenCheckoutModal} />
      </main>

      {/* Footer minimaliste avec modales d'information */}
      <Footer />

      {/* Barre d'action sticky discrète sur mobile (< 15% viewport) */}
      <MobileStickyBar onOpenCheckoutModal={handleOpenCheckoutModal} />

      {/* Modale d'aide au paiement (lorsque PURCHASE_URL est sur #) */}
      <CheckoutModal 
        isOpen={isCheckoutModalOpen} 
        onClose={handleCloseCheckoutModal} 
      />
    </div>
  );
}
