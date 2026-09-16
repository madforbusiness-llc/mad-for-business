"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-brand-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative h-10 w-auto flex items-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-cropped.png"
                  alt="M.A.D for Business"
                  width={160}
                  height={74}
                  className="h-10 w-auto object-contain rounded-md"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-brand-900 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white transition-all shadow-inner hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-brand-900 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white transition-all shadow-inner hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                aria-label="Twitter / X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-brand-900 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white transition-all shadow-inner hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">{t.footer.navTitle}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#home" className="text-sm text-muted-foreground hover:text-brand-cyan transition-colors">{t.nav.home}</Link></li>
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-brand-cyan transition-colors">{t.nav.about}</Link></li>
              <li><Link href="#portfolio" className="text-sm text-muted-foreground hover:text-brand-cyan transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-brand-cyan transition-colors">{t.nav.services}</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-brand-cyan transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">{t.footer.companyTitle}</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm font-medium text-white">M.A.D for Business</li>
              <li className="text-xs text-muted-foreground">{t.footer.companyType}</li>
              <li className="text-xs text-muted-foreground leading-relaxed">
                Northwest Registered Agent Service Inc<br/>
                30 N Gould St Ste N<br/>
                Sheridan, WY 82801, USA
              </li>
              <li className="mt-2">
                <Link href="/legal" className="text-xs text-brand-cyan hover:underline">
                  {t.footer.legalNotice}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} M.A.D for Business LLC. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link href="/legal" className="text-xs text-muted-foreground hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/legal" className="text-xs text-muted-foreground hover:text-white transition-colors">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
