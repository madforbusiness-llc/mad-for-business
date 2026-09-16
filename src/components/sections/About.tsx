"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Trophy, Globe2, Target, Cpu, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const cards = [
    {
      icon: Lightbulb,
      title: t.about.pillars[0].title,
      description: t.about.pillars[0].description,
    },
    {
      icon: Cpu,
      title: t.about.pillars[1].title,
      description: t.about.pillars[1].description,
    },
    {
      icon: Globe2,
      title: t.about.pillars[2].title,
      description: t.about.pillars[2].description,
    },
    {
      icon: ShieldCheck,
      title: language === "fr" ? "Gouvernance & Rigueur" : "Governance & Rigor",
      description:
        language === "fr"
          ? "Enregistré aux USA (Wyoming) avec des opérations d'ingénierie agiles, garantissant une fiabilité contractuelle et technique optimale."
          : "Registered in Wyoming (USA) with agile engineering execution, providing contractual compliance and technological reliability.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-brand-900/60">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <motion.div 
            key={language}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-cyan"></span>
              {t.about.badge}
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
              {t.about.title}
            </h3>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>{t.about.storyP1}</p>
              <p>{t.about.storyP2}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 mt-10">
              {t.about.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-brand-cyan">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Staggered Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <motion.div style={{ y: y1 }} className="space-y-8 lg:space-y-12">
            {[cards[0], cards[1]].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-brand-800/60 border border-white/10 p-8 md:p-10 rounded-3xl hover:border-brand-cyan/40 hover:bg-brand-800/80 transition-all group shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <card.icon size={26} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">{card.title}</h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="space-y-8 lg:space-y-12 md:mt-20">
            {[cards[2], cards[3]].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-brand-800/60 border border-white/10 p-8 md:p-10 rounded-3xl hover:border-brand-cyan/40 hover:bg-brand-800/80 transition-all group shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <card.icon size={26} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">{card.title}</h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
      
      {/* Background ambient glow - fixed warning w-[800px] -> w-200 */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-200 h-200 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
