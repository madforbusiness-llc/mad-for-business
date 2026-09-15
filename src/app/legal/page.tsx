import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-24 bg-brand-900 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl font-bold font-heading text-white mb-8">Legal Notice</h1>
          
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold font-heading text-white mb-4">1. Company Information</h2>
              <p className="mb-2"><strong>Company Name:</strong> M.A.D for Business</p>
              <p className="mb-2"><strong>Legal Form:</strong> Single Member-Managed Limited Liability Company</p>
              <p className="mb-2">
                <strong>Registered Office:</strong><br />
                Northwest Registered Agent Service Inc<br />
                30 N Gould St Ste N<br />
                Sheridan, WY 82801
              </p>
              <p className="mb-2"><strong>Contact Email:</strong> mad.for.buisness@gmail.com</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold font-heading text-white mb-4">2. Hosting</h2>
              <p>
                This website is hosted by Vercel Inc., located at 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold font-heading text-white mb-4">3. Intellectual Property</h2>
              <p>
                All content on this site (texts, images, videos, code, logos) is the exclusive property of M.A.D for Business, unless otherwise stated. Any reproduction, distribution, modification, or use of these contents without prior written consent from the company is strictly prohibited.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold font-heading text-white mb-4">4. Data Protection & Privacy</h2>
              <p>
                M.A.D for Business is committed to protecting the privacy of its website users. Information collected via the contact form is used solely for the purpose of responding to inquiries. In accordance with applicable regulations, you have the right to access, rectify, and delete your personal data.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
