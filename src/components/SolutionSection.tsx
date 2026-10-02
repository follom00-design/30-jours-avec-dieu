import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, BookOpen, Sparkles, Feather, HeartHandshake } from 'lucide-react';
import { PRODUCT_PRICE, PURCHASE_URL } from '../config';

interface SolutionSectionProps {
  onOpenCheckoutModal?: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenCheckoutModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pages = [
    {
      tabLabel: "Couverture",
      icon: BookOpen,
      title: "Une édition soignée & immersive",
      description: "Conçue comme un bel objet éditorial chrétien, immédiatement accessible sur ton smartphone sans téléchargement lourd.",
      badge: "Présentation générale",
      preview: {
        tag: "WEBBOOK CHRÉTIEN",
        headline: "30 Jours avec Dieu",
        sub: "Un parcours simple pour retrouver une routine de prière.",
        quote: "« Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse. »",
        author: "2 Corinthiens 12:9",
      },
    },
    {
      tabLabel: "Page d'un jour",
      icon: Sparkles,
      title: "La structure quotidienne limpide",
      description: "Chaque matin ou soir, une page claire, aérée et sans distraction pour te concentrer sur l'essentiel en 5 à 10 minutes.",
      badge: "Jour 01 à 30",
      preview: {
        tag: "JOUR 01 · THÈME",
        headline: "Revenir au calme intérieur",
        sub: "« Arrêtez, et sachez que je suis Dieu. » — Psaume 46:11",
        quote: "Avant de parler, commence par respirer Sa paix. Tu n'as rien à prouver.",
        author: "Orientation du jour",
      },
    },
    {
      tabLabel: "Page de réflexion",
      icon: Feather,
      title: "Une méditation concrète",
      description: "Des réflexions écrites avec simplicité, ancrées dans les vraies réalités de nos vies modernes et de notre foi quotidienne.",
      badge: "Méditation",
      preview: {
        tag: "MÉDITATION",
        headline: "Déposer le fardeau de la perfection",
        sub: "Dieu ne cherche pas des prières savantes, mais des cœurs transparents.",
        quote: "« Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos. »",
        author: "Matthieu 11:28",
      },
    },
    {
      tabLabel: "Page de prière",
      icon: HeartHandshake,
      title: "Des mots fidèles quand tu es sans voix",
      description: "Une prière guidée formulée avec délicatesse pour t'aider à exprimer ta gratitude, tes peines ou tes espérances.",
      badge: "Prière guidée",
      preview: {
        tag: "PRIÈRE DU JOUR",
        headline: "Seigneur, reçois ma journée",
        sub: "Guide mes pas, apaise mes angoisses et ouvre mes yeux à tes bontés.",
        quote: "« Que ta paix qui surpasse toute intelligence garde mon cœur et mes pensées. »",
        author: "Prière du Jour 01",
      },
    },
    {
      tabLabel: "Page de gratitude",
      icon: Sparkles,
      title: "Un espace pour ton cœur",
      description: "Une invitation quotidienne à noter une gratitude et à poser un petit pas réaliste avant la fin de ta journée.",
      badge: "Action & Gratitude",
      preview: {
        tag: "ESPACE PERSONNEL",
        headline: "Mon temps de gratitude",
        sub: "Une grâce reçue aujourd'hui : le souffle, la paix, une parole reçue.",
        quote: "« Mon petit pas : faire silence 2 minutes et pardonner avec douceur. »",
        author: "Engagement personnel",
      },
    },
  ];

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (PURCHASE_URL === '#' && onOpenCheckoutModal) {
      e.preventDefault();
      onOpenCheckoutModal();
    }
  };

  const current = pages[activeTab];

  return (
    <section id="parcours" className="py-20 sm:py-28 bg-[#F6F1EA] border-b border-[#EFE9DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            La réponse simple & guidée
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] leading-snug font-editorial font-bold text-[#1F1C18] text-balance">
            C'est pour cela que nous avons créé 30 Jours avec Dieu.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#595248] leading-relaxed">
            Un WebBook chrétien numérique spécialement conçu pour supprimer les blocages, te donner des mots quand tu n'en as plus, et installer une vraie régularité sans culpabilité.
          </p>
        </div>

        {/* Interactive Page Switcher (Tabs) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {pages.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#221C16] text-white shadow-sm'
                  : 'bg-[#FAF7F2] text-[#6E6457] hover:text-[#1F1C18] border border-[#EADBCE]'
              }`}
            >
              {p.tabLabel}
            </button>
          ))}
        </div>

        {/* Active Page Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FAF7F2] border border-[#EADBCE] rounded-3xl p-6 sm:p-10 shadow-editorial">
          
          {/* Explanation on the left */}
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#96712E]">
              {current.badge}
            </div>
            <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#1F1C18]">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-[#595248] leading-relaxed">
              {current.description}
            </p>

            {/* Micro feature points */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3D352C]">
                <div className="w-5 h-5 rounded-full bg-[#EFE5D8] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#8C621E]" />
                </div>
                <span>Lecture optimisée pour écran de smartphone vertical</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3D352C]">
                <div className="w-5 h-5 rounded-full bg-[#EFE5D8] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#8C621E]" />
                </div>
                <span>Pas de longue théorie : 5 à 10 minutes par jour suffisent</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3D352C]">
                <div className="w-5 h-5 rounded-full bg-[#EFE5D8] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#8C621E]" />
                </div>
                <span>Accès à vie pour recommencer le parcours à tout moment</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={PURCHASE_URL}
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#221C16] hover:bg-[#3D352C] rounded-xl transition-all shadow-sm"
              >
                <span>ACCÉDER AU WEBBOOK ({PRODUCT_PRICE})</span>
              </a>
            </div>
          </div>

          {/* Interactive Card Mockup on the right */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm bg-[#FFFFFF] border border-[#E4D8CA] rounded-2xl p-6 sm:p-7 shadow-book relative overflow-hidden"
            >
              {/* Gold accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B58A3E] via-[#D4AF37] to-[#B58A3E]" />

              <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#8C621E] mb-2">
                {current.preview.tag}
              </div>

              <h4 className="text-xl sm:text-2xl font-editorial font-bold text-[#1F1C18] mb-2 leading-tight">
                {current.preview.headline}
              </h4>

              <div className="text-xs text-[#706454] italic mb-5 border-l-2 border-[#D4AF37] pl-3 py-0.5">
                {current.preview.sub}
              </div>

              <div className="bg-[#FAF7F2] border border-[#EFE9DF] rounded-xl p-4 text-xs sm:text-sm text-[#4D453A] leading-relaxed mb-4">
                {current.preview.quote}
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#918576] pt-3 border-t border-[#F0EAE1]">
                <span>{current.preview.author}</span>
                <span className="text-[#8C621E] font-medium">30 Jours avec Dieu</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
