import React from 'react';
import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';

export const ForWhomSection: React.FC = () => {
  const criteria = [
    "Tu veux recommencer à prier régulièrement après un temps d'éloignement ou de tiédeur.",
    "Tu cherches un cadre simple, clair et déculpabilisant, sans contraintes écrasantes.",
    "Tu veux prendre quelques minutes chaque jour pour te recentrer sur l'essentiel.",
    "Tu as envie d'être accompagné(e) pas à pas pendant 30 jours complets.",
    "Tu souhaites avoir un support moderne et pratique que tu peux consulter directement depuis ton téléphone.",
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F6F1EA] border-t border-[#EFE9DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            Est-ce adapté à ta situation ?
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-[#1F1C18] text-balance">
            Ce parcours est pour toi si…
          </h2>
        </div>

        {/* Criteria Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFFFFF] border border-[#EADBCE] rounded-3xl p-6 sm:p-10 shadow-editorial"
        >
          <div className="space-y-4 sm:space-y-5 mb-8">
            {criteria.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-[#EFE5D8] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#8C621E]" />
                </div>
                <p className="text-sm sm:text-base text-[#3E362C] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Important disclaimer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#EFE5D8] flex items-start gap-3 text-xs sm:text-sm text-[#695F52] leading-relaxed">
            <Info className="w-4 h-4 text-[#8C621E] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#332B22]">Précision importante :</strong> Ce parcours n'a pas pour but de remplacer ta relation personnelle avec Dieu ou ta communauté chrétienne. Il sert simplement de support bienveillant pour enrichir et structurer ton temps personnel de recueillement.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
