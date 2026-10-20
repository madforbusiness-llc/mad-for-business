import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { getAvailableLogoIds } from "@/lib/product-assets";

export default function Home() {
  // Lu au build : seuls les logos reellement deposes sont rendus.
  const availableLogoIds = getAvailableLogoIds();

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products availableLogoIds={availableLogoIds} />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
