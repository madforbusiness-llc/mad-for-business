"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Trophy, Globe2, Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "We don't just build apps; we build ventures. Our portfolio spans from culinary marketplaces to property management AI, constantly pushing boundaries."
  },
  {
    icon: Trophy,
    title: "Premium Quality",
    description: "Excellence is our baseline. Whether it's a foodtech app like iDishYou or an EdTech platform like SkoolHubs, we demand perfect execution."
  },
  {
    icon: Target,
    title: "Local Roots",
    description: "Deeply anchored in Morocco, we understand local market dynamics while engineering products capable of scaling anywhere."
  },
  {
    icon: Globe2,
    title: "Global Ambition",
    description: "Our standards are international. We build robust, scalable architectures ready to compete on a global stage from day one."
  }
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-brand-800">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-accent"></span>
              About M.A.D for Business
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
              A studio that builds <span className="text-brand-accent italic font-light">actual businesses</span>.
            </h3>
            <div className="space-y-6 text-muted-foreground text-xl leading-relaxed">
              <p>
                M.A.D for Business is a <strong>Single Member-Managed Limited Liability Company</strong> operating as a premium digital venture studio. We don't just write code; we create comprehensive digital solutions.
              </p>
              <p>
                Our mission is to engineer digital products that <strong className="text-white">transform</strong> ambitious ideas into functional realities. From social platforms for nightlife to e-commerce for social impact, we maintain absolute rigor in design, user experience, and technical performance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Staggered Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <motion.div style={{ y: y1 }} className="space-y-8 lg:space-y-12">
            {[values[0], values[1]].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-brand-900/50 border border-white/5 p-8 md:p-10 rounded-3xl hover:border-brand-accent/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="space-y-8 lg:space-y-12 md:mt-24">
            {[values[2], values[3]].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-brand-900/50 border border-white/5 p-8 md:p-10 rounded-3xl hover:border-brand-accent/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
}
