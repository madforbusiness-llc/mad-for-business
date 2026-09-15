"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Trophy, Globe2, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation Continue",
    description: "Nous repoussons constamment les limites technologiques pour créer des expériences utilisateur remarquables et des solutions modernes."
  },
  {
    icon: Trophy,
    title: "Qualité Premium",
    description: "L'excellence est notre standard. Chaque ligne de code et chaque pixel sont pensés pour offrir une performance et une esthétique parfaites."
  },
  {
    icon: Target,
    title: "Impact Local",
    description: "Ancrés au Maroc et en Afrique du Nord, nous développons des produits qui répondent aux besoins spécifiques de notre région."
  },
  {
    icon: Globe2,
    title: "Ambition Mondiale",
    description: "Nos standards de développement et notre vision sont internationaux, préparant chaque produit pour une expansion globale."
  }
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-3">À propos de M.A.D for Business</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              L'excellence digitale au service de l'innovation
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              M.A.D for Business est une <strong>Single Member-Managed Limited Liability Company</strong> spécialisée dans la création de solutions digitales de pointe et la prestation de services technologiques haut de gamme.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Notre mission est de concevoir et développer des produits numériques qui transforhoment les idées en réalités fonctionnelles, tout en maintenant une exigence absolue sur le design, l'expérience utilisateur et les performances techniques.
            </p>
          </motion.div>

          {/* Value Cards */}
          <motion.div 
            style={{ y }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4">
                      <value.icon size={24} />
                    </div>
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
