import React from 'react';
import { X, CheckCircle2, ShieldCheck, CreditCard, Sparkles, ExternalLink } from 'lucide-react';
import { PRODUCT_PRICE, PRODUCT_NAME, PURCHASE_URL } from '../config';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFFFFF] text-[#24211D] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-[#EADBCE]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EADBCE] flex items-center justify-center text-[#73675B] hover:text-[#1F1C18] cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#F7F2EA] border border-[#EFE5D8] flex items-center justify-center mx-auto text-[#8C621E]">
            <Sparkles className="w-7 h-7 text-[#8C621E]" />
          </div>

          <h3 className="text-2xl font-editorial font-bold text-[#1F1C18]">
            Finaliser ta commande
          </h3>

          <div className="bg-[#FAF7F2] border border-[#EADBCE] rounded-2xl p-4 text-left">
            <div className="flex justify-between items-center text-sm font-semibold text-[#1F1C18] mb-1">
              <span>{PRODUCT_NAME}</span>
              <span className="text-[#8C621E] font-bold">{PRODUCT_PRICE}</span>
            </div>
            <div className="text-xs text-[#706454]">
              WebBook numérique 30 jours + 5 bonus inclus
            </div>
          </div>

          <div className="text-left text-xs text-[#595248] space-y-2 py-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#52794A] shrink-0" />
              <span>Accès numérique immédiat après paiement</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#52794A] shrink-0" />
              <span>Compatible smartphones (iPhone et Android)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#52794A] shrink-0" />
              <span>Transaction sécurisée (paiement unique sans abonnement)</span>
            </div>
          </div>

          {PURCHASE_URL === '#' ? (
            <div className="bg-[#FFFDF7] border border-[#EADBCE] rounded-xl p-3.5 text-xs text-[#736452] text-left">
              <p className="font-semibold text-[#8C621E] mb-1 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5" />
                Configuration du lien de paiement :
              </p>
              <p className="leading-relaxed">
                Tous les boutons pointent actuellement vers la variable <code className="bg-[#F0E6D8] px-1.5 py-0.5 rounded text-[#221C16] font-mono">PURCHASE_URL</code> dans <code className="bg-[#F0E6D8] px-1.5 py-0.5 rounded text-[#221C16] font-mono">src/config.ts</code>. Vous pouvez y insérer votre vrai lien de paiement (Paystack, Wave, Stripe, etc.) à tout moment !
              </p>
            </div>
          ) : (
            <a
              href={PURCHASE_URL}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 font-semibold text-white bg-[#221C16] hover:bg-[#3D352C] rounded-xl transition-all shadow-md cursor-pointer"
            >
              <span>Continuer vers le paiement sécurisé</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-3 text-xs font-semibold text-[#595248] hover:text-[#1F1C18] rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              Revenir à la page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
