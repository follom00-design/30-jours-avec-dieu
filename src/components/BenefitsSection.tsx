import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CalendarCheck, HeartHandshake, Compass, PenTool, Clock } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Une routine plus régulière",
      text: "Finies les périodes de culpabilité entrecoupées de longues absences. Tu ancres un rendez-vous fixe et mesurable avec ton Seigneur.",
    },
    {
      icon: Compass,
      title: "Un parcours structuré",
      text: "Au lieu de te demander chaque matin quoi lire ou par où commencer, tu suis un fil conducteur limpide préparé pour toi.",
    },
    {
      icon: HeartHandshake,
      title: "Une habitude de prière apaisée",
      text: "Tu apprends à parler à Dieu avec sincérité, sans chercher à faire de grands discours, mais avec un cœur ouvert et reconnaissant.",
    },
    {
      icon: Sparkles,
      title: "Un moment quotidien de réflexion",
      text: "Quelques minutes privilégiées de calme pour respirer, méditer une Parole et prendre du recul sur le tumulte du monde.",
    },
    {
      icon: PenTool,
      title: "Un espace d'intimité personnelle",
      text: "Un carnet de route où tu notes ce qui résonne en toi et constates ta fidélité quotidienne grandir jour après jour.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EFE9DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#96712E] mb-3">
            L'impact durable
          </div>
          <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-[#1F1C18] text-balance">
            Ce que tu vas construire pendant ces 30 jours
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#595248] leading-relaxed">
            Pas de promesses magiques ni de formules automatiques. Simplement la joie de bâtir, pas à pas, une discipline spirituelle fidèle et bienveillante.
          </p>
        </div>

        {/* List of benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            const isFullSpan = idx === 4;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`bg-[#FFFFFF] border border-[#EADBCE] rounded-2xl p-6 sm:p-7 shadow-editorial hover:border-[#D6C4B0] transition-colors ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EFE5D8] flex items-center justify-center text-[#8C621E] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-editorial font-bold text-[#1F1C18] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#595248] leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
