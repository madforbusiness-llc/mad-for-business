"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Random points generator for the background
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
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f43f5e" 
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-900">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ParticleField />
        </Canvas>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-900/40 via-brand-900/70 to-background"></div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-brand-accent uppercase tracking-wider">M.A.D for Business</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight tracking-tight">
            We build digital products <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">
              that actually matter.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            From foodtech marketplaces to edtech platforms, we design, develop, and scale platforms that solve real-world problems. Based in Morocco, building for the world.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#portfolio" className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full bg-brand-accent px-8 text-base font-medium text-white transition-all hover:bg-brand-accent-hover hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent group shadow-[0_0_20px_rgba(244,63,94,0.3)]">
              Explore our portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
