import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center font-heading font-bold text-white">
                M
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                M.A.D <span className="text-muted-foreground font-normal text-lg">for Business</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Studio digital premium spécialisé dans la création de solutions et services numériques innovants. Basé au Maroc, avec une ambition internationale.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-brand-accent transition-colors">À propos</Link></li>
              <li><Link href="#products" className="text-sm text-muted-foreground hover:text-brand-accent transition-colors">Nos Produits</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-brand-accent transition-colors">Nos Services</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Informations</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-muted-foreground">M.A.D for Business</li>
              <li className="text-sm text-muted-foreground">Single Member-Managed Limited Liability Company</li>
              <li className="text-sm text-muted-foreground">Maroc</li>
              <li className="mt-2"><Link href="/legal" className="text-sm text-brand-accent hover:underline">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} M.A.D for Business. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/legal" className="text-xs text-muted-foreground hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/legal" className="text-xs text-muted-foreground hover:text-white transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
