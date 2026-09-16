"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

function ParticleField(props: any) {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#60a5fa" 
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
}

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-950 pt-20">
      {/* 3D Dynamic Particle Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleField />
        </Canvas>
      </div>
      
      {/* Radial and Linear Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-brand-950/50 via-brand-900/80 to-background pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-150 md:h-150 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center py-16">
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
              {t.hero.badge}
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight tracking-tight">
            {t.hero.titleStart}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-sky-300 to-indigo-300">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="#portfolio"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-brand-accent px-8 text-base font-medium text-white transition-all hover:bg-brand-accent-hover hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent group shadow-[0_0_25px_rgba(37,99,235,0.4)]"
            >
              {t.hero.ctaExplore}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-200" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-white/20 bg-brand-900/60 backdrop-blur-sm px-8 text-base font-medium text-white transition-all hover:bg-white/10 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {t.hero.ctaContact}
            </Link>
          </div>

          {/* Micro badges */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{t.hero.badgeLive}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{t.hero.badgeTech}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>{t.hero.badgeGlobal}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
