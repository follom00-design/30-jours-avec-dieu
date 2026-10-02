import React, { useState } from 'react';
import { PRODUCT_NAME, PRODUCT_PRICE } from '../config';
import { X, Mail, Shield, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'contact' | 'terms' | 'privacy' | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <>
      <footer className="bg-[#191512] text-[#B5A99B] py-14 sm:py-16 border-t border-[#2C241E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Wordmark and mission note */}
            <div>
              <a
                href="#"
                className="text-xl font-editorial font-bold text-[#FAF7F2] tracking-tight hover:text-[#D4AF37] transition-colors"
              >
                {PRODUCT_NAME}
              </a>
              <p className="text-xs text-[#8C7E6F] mt-1.5 max-w-sm">
                Un parcours guidé de 30 jours pour retrouver une routine de prière vivante et apaisée.
              </p>
            </div>

            {/* Navigation links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">
                Accueil
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <button
                type="button"
                onClick={() => setModalType('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={() => setModalType('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Conditions
              </button>
              <button
                type="button"
                onClick={() => setModalType('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Confidentialité
              </button>
            </div>

          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="mt-10 pt-8 border-t border-[#2C241E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73675B]">
            <div>
              © {new Date().getFullYear()} {PRODUCT_NAME}. Tous droits réservés.
            </div>
            <div>
              Produit numérique à usage personnel · Tarif unique {PRODUCT_PRICE}
            </div>
          </div>
        </div>
      </footer>

      {/* Clean informative modal for Contact / Conditions / Confidentialité */}
      {modalType && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-[#FFFFFF] text-[#24211D] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto border border-[#EADBCE]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EADBCE] flex items-center justify-center text-[#73675B] hover:text-[#1F1C18] cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            {modalType === 'contact' && (
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EFE5D8] flex items-center justify-center text-[#8C621E]">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-editorial font-bold text-[#1F1C18]">
                  Nous contacter
                </h3>
                <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
                  Une question sur le parcours, ton accès au WebBook ou un souci technique ? Notre équipe te répond avec bienveillance.
                </p>
                <div className="bg-[#FAF7F2] border border-[#EADBCE] rounded-xl p-4 text-xs sm:text-sm text-[#3E362C]">
                  <div><strong>Email de contact :</strong> contact@30joursavecdieu.com</div>
                  <div className="mt-1 text-xs text-[#8C7E6F]">Délai moyen de réponse : sous 24h.</div>
                </div>
              </div>
            )}

            {modalType === 'terms' && (
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EFE5D8] flex items-center justify-center text-[#8C621E]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-editorial font-bold text-[#1F1C18]">
                  Conditions Générales d'Accès
                </h3>
                <div className="text-xs text-[#595248] space-y-3 leading-relaxed">
                  <p>
                    <strong>1. Produit :</strong> « 30 Jours avec Dieu » est un produit numérique (WebBook) consultable en ligne et téléchargeable pour un usage strictement privé et personnel.
                  </p>
                  <p>
                    <strong>2. Accès :</strong> L'accès est activé immédiatement dès la confirmation du règlement. Le tarif est fixé à {PRODUCT_PRICE} en paiement unique.
                  </p>
                  <p>
                    <strong>3. Propriété intellectuelle :</strong> Les méditations, textes, prières et graphismes sont protégés par le droit d'auteur. Toute reproduction ou revente est interdite.
                  </p>
                </div>
              </div>
            )}

            {modalType === 'privacy' && (
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EFE5D8] flex items-center justify-center text-[#8C621E]">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-editorial font-bold text-[#1F1C18]">
                  Politique de Confidentialité
                </h3>
                <div className="text-xs text-[#595248] space-y-3 leading-relaxed">
                  <p>
                    <strong>Respect de ta vie privée :</strong> Tes coordonnées (adresse email) ne sont utilisées que pour te transmettre ton accès au WebBook et les bonus correspondants.
                  </p>
                  <p>
                    <strong>Aucun spam :</strong> Nous ne vendons ni ne louons jamais tes données à des tiers. Tes moments de prière et tes réflexions personnelles restent strictement confidentiels.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#F2ECE4] text-right">
              <button
                type="button"
                onClick={closeModal}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#221C16] hover:bg-[#3D352C] rounded-lg cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
