"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { products, getProductStatus, type Product } from "@/data/products";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Hammer } from "lucide-react";
import Image from "next/image";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

function ProductCard({ product }: { product: Product }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const [coverFailed, setCoverFailed] = useState(false);

  const isLive = getProductStatus(product) === "live" && Boolean(product.url);
  const showLogo = Boolean(product.logo) && !logoFailed;
  const showCover = Boolean(product.cover) && !coverFailed;

  const CardWrapper = isLive ? "a" : "div";
  const wrapperProps = isLive
    ? { href: product.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div variants={itemVariants} className="group h-full">
      <CardWrapper
        {...wrapperProps}
        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-xl"
      >
        <Card
          className={`h-full border-white/10 bg-brand-800/50 overflow-hidden flex flex-col transition-all duration-500 ${
            isLive
              ? "cursor-pointer hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] hover:-translate-y-2"
              : ""
          }`}
        >
          {/* Zone visuelle : logo (+ image de fond facultative) */}
          <div
            className={`h-56 w-full bg-gradient-to-br ${product.theme} relative overflow-hidden flex items-center justify-center`}
          >
            {showCover && (
              <Image
                src={product.cover as string}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                onError={() => setCoverFailed(true)}
              />
            )}

            <div className="absolute inset-0 bg-brand-900/40 mix-blend-overlay group-hover:bg-brand-900/20 transition-colors duration-500" />

            {showLogo ? (
              <div className="relative z-10 h-20 w-[62%] max-w-[220px]">
                <Image
                  src={product.logo as string}
                  alt={`${product.name} logo`}
                  fill
                  sizes="220px"
                  className="object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                  onError={() => setLogoFailed(true)}
                />
              </div>
            ) : (
              <h4 className="text-3xl font-heading font-bold text-white z-10 drop-shadow-md tracking-tight text-center px-4">
                {product.name}
              </h4>
            )}

            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                {product.category}
              </span>
            </div>

            {/* Badge de statut : Live si un lien existe, sinon In Progress */}
            <div className="absolute top-4 right-4 z-10">
              {isLive ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 backdrop-blur-md rounded-full text-xs font-medium text-emerald-300 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 backdrop-blur-md rounded-full text-xs font-medium text-amber-200 border border-amber-400/20">
                  <Hammer className="w-3 h-3" />
                  In Progress
                </span>
              )}
            </div>
          </div>

          <CardHeader className="pt-6">
            <h4
              className={`text-2xl font-bold font-heading text-white flex items-center justify-between gap-3 transition-colors ${
                isLive ? "group-hover:text-brand-accent" : ""
              }`}
            >
              {product.name}
              {isLive && (
                <ExternalLink className="w-5 h-5 shrink-0 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-brand-accent" />
              )}
            </h4>
          </CardHeader>

          <CardContent className="flex-grow pb-8">
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            {isLive && (
              <p className="mt-6 text-xs font-medium text-brand-accent/90 break-all">
                {(product.url as string).replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </p>
            )}
          </CardContent>
        </Card>
      </CardWrapper>
    </motion.div>
  );
}

export function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-brand-900 border-t border-white/5 relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-3">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight">
              Our Digital Products
            </h3>
            <p className="text-muted-foreground mt-4 text-lg">
              Discover the platforms and applications created and managed by our
              studio. Each product elegantly solves a specific market need with
              high performance and scalable architecture.
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
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
