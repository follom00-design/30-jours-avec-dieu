import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F6F1EA] border-t border-[#EFE9DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            <MessageSquareQuote className="w-4 h-4 text-[#B58A3E]" />
            <span>Retours d'expérience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#1F1C18]">
            Espace Lecteurs & Partages
          </h2>
        </div>

        {/* Honest, authentic notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFFF] border border-[#EADBCE] rounded-3xl p-7 sm:p-9 text-center shadow-editorial max-w-2xl mx-auto"
        >
          <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#EFE5D8] flex items-center justify-center mx-auto mb-4 text-[#8C621E]">
            <Heart className="w-5 h-5 text-[#8C621E]" />
          </div>

          <h3 className="text-lg font-editorial font-bold text-[#1F1C18] mb-2">
            La sincérité avant tout
          </h3>

          <p className="text-xs sm:text-sm text-[#595248] leading-relaxed mb-6 max-w-md mx-auto">
            Nous refusons catégoriquement d'inventer de faux avis. Les retours spontanés et témoignages authentiques des premiers lecteurs de cette nouvelle promotion seront partagés ici même avec leur accord.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#EFE5D8] text-xs text-[#8C621E] font-medium">
            <span>Tu rejoins le parcours ? Ton retour comptera énormément.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
