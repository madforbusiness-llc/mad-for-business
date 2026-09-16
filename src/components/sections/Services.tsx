"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, CloudCog, Sparkles, CreditCard, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const icons = [Code2, Smartphone, CloudCog, Sparkles, CreditCard, Rocket];

export function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="py-24 bg-brand-950 border-t border-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none" />
      <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            key={`sub-${language}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-brand-cyan uppercase tracking-widest mb-3"
          >
            {t.services.badge}
          </motion.h2>
          <motion.h3 
            key={`title-${language}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-white mb-4"
          >
            {t.services.title}
          </motion.h3>
          <p className="text-muted-foreground text-base md:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full border-white/10 bg-brand-900/60 hover:bg-brand-900/90 hover:border-blue-500/40 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(37,99,235,0.15)] group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                      <IconComponent size={26} />
                    </div>
                    <CardTitle className="text-xl text-white font-heading group-hover:text-blue-200 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
