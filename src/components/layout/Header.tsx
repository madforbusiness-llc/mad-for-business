"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.portfolio, href: "#portfolio" },
    { name: t.nav.services, href: "#services" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-900/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-auto flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-cropped.png"
              alt="M.A.D for Business"
              width={160}
              height={74}
              priority
              className="h-10 w-auto object-contain rounded-md"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center bg-brand-800/80 border border-white/10 rounded-full p-1 text-xs">
            <button
              onClick={() => setLanguage("fr")}
              className={cn(
                "px-2.5 py-1 rounded-full font-medium transition-all",
                language === "fr"
                  ? "bg-brand-accent text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                  : "text-white/60 hover:text-white"
              )}
              aria-label="Passer en Français"
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2.5 py-1 rounded-full font-medium transition-all",
                language === "en"
                  ? "bg-brand-accent text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                  : "text-white/60 hover:text-white"
              )}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-brand-accent px-6 text-sm font-medium text-white transition-all hover:bg-brand-accent-hover hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-brand-800/80 border border-white/10 rounded-full p-0.5 text-xs">
            <button
              onClick={() => setLanguage("fr")}
              className={cn(
                "px-2 py-1 rounded-full font-medium transition-all",
                language === "fr"
                  ? "bg-brand-accent text-white"
                  : "text-white/60 hover:text-white"
              )}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2 py-1 rounded-full font-medium transition-all",
                language === "en"
                  ? "bg-brand-accent text-white"
                  : "text-white/60 hover:text-white"
              )}
            >
              EN
            </button>
          </div>

          <button
            className="text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-900/98 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/90 hover:text-brand-cyan transition-colors py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex h-12 mt-3 w-full items-center justify-center rounded-full bg-brand-accent px-6 text-base font-medium text-white transition-all hover:bg-brand-accent-hover shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            {t.nav.contact}
          </Link>
        </div>
      )}
    </header>
  );
}
