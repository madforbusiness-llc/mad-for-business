"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Blocks, Sparkles, CreditCard, CloudCog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Développement Web",
    description: "Conception de plateformes web sur-mesure, performantes et scalables, utilisant les dernières technologies (Next.js, React)."
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Création d'expériences mobiles natives et cross-platform fluides pour iOS et Android."
  },
  {
    icon: Blocks,
    title: "Solutions SaaS",
    description: "Architecture et développement complet de plateformes B2B et B2C basées sur le cloud."
  },
  {
    icon: Sparkles,
    title: "Intégration IA",
    description: "Enrichissement de vos produits avec des fonctionnalités d'Intelligence Artificielle de pointe pour automatiser et innover."
  },
  {
    icon: CreditCard,
    title: "Fintech & Paiements",
    description: "Intégration sécurisée de solutions de paiement adaptées aux marchés locaux (Maroc/MENA) et internationaux."
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    description: "Infrastructure robuste, déploiement continu et optimisation des coûts sur AWS, Google Cloud ou Vercel."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-900 border-t border-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
      <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-3"
          >
            Nos Compétences
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading text-white mb-6"
          >
            Des services taillés pour l'excellence
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-900 border border-white/10 flex items-center justify-center text-brand-accent mb-6 shadow-inner">
                    <service.icon size={28} />
                  </div>
                  <CardTitle className="text-xl text-white font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
