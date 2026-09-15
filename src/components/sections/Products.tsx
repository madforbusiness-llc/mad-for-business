"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { products } from "@/data/products";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/link"; // We will use simple div for now since we don't have actual images

export function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="products" className="py-24 bg-brand-900 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
              Nos produits digitaux
            </h3>
            <p className="text-muted-foreground mt-4 text-lg">
              Découvrez les plateformes et applications créées et gérées par notre studio, chacune répondant à un besoin spécifique du marché avec élégance et performance.
            </p>
          </div>
        </div>

        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="group h-full">
              <Card className="h-full border-white/10 bg-white/[0.03] overflow-hidden flex flex-col hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2">
                {/* Image Placeholder */}
                <div className="h-48 w-full bg-gradient-to-br from-brand-800 to-brand-900 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-heading font-bold text-white/20 uppercase tracking-widest">{product.name}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pt-6">
                  <h4 className="text-2xl font-bold font-heading text-white group-hover:text-brand-accent transition-colors flex items-center justify-between">
                    {product.name}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </h4>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-white/5 text-xs text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
