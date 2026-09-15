import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-brand-900 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl font-bold font-heading text-white mb-8">Mentions Légales</h1>
          
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold font-heading text-white mb-4">1. Informations sur l'entreprise</h2>
              <p className="mb-2"><strong>Dénomination sociale :</strong> M.A.D for Business</p>
              <p className="mb-2"><strong>Forme juridique :</strong> Single Member-Managed Limited Liability Company</p>
              <p className="mb-2"><strong>Siège social :</strong> [Adresse complète], Maroc</p>
              <p className="mb-2"><strong>Email de contact :</strong> contact@madforbusiness.com</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold font-heading text-white mb-4">2. Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold font-heading text-white mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, codes, logos) est la propriété exclusive de M.A.D for Business, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus sans l'accord préalable et écrit de l'entreprise est strictement interdite.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold font-heading text-white mb-4">4. Protection des données personnelles</h2>
              <p>
                M.A.D for Business s'engage à protéger la vie privée des utilisateurs de son site web. Les informations collectées via le formulaire de contact sont utilisées uniquement dans le but de répondre aux demandes. Conformément aux réglementations en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
