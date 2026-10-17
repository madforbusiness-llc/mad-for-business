import { SITE_URL, ORG } from "@/lib/site";
import { products, getProductStatus } from "@/data/products";

/**
 * Donnees structurees schema.org injectees dans toutes les pages.
 *
 * Volontairement limite a ce qui est verifiable :
 *   - Organization : donnees reprises des mentions legales
 *   - WebSite      : declaration du site
 *   - ItemList     : les 5 produits, generes depuis products.ts
 *
 * Pas de LocalBusiness (aucun etablissement recevant du public) ni de
 * Review (aucun avis reel) : les inventer expose a une action manuelle
 * Google sur les resultats enrichis.
 */
export function JsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG.name,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo-cropped.png`,
      width: 1024,
      height: 578,
    },
    description:
      "Venture studio and digital lab designing, engineering and operating proprietary software products, SaaS platforms and marketplaces.",
    email: ORG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG.street,
      addressLocality: ORG.city,
      addressRegion: ORG.region,
      postalCode: ORG.postalCode,
      addressCountry: ORG.country,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Morocco" },
    ],
    knowsAbout: [
      "Venture building",
      "SaaS platform engineering",
      "Marketplace development",
      "Next.js",
      "Cloud-native architecture",
    ],
    owns: products.map((product) => ({
      "@type": "SoftwareApplication",
      name: product.name,
      applicationCategory: product.category,
      ...(product.url ? { url: product.url } : {}),
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: ORG.name,
    alternateName: "MAD for Business",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: ["en", "fr"],
  };

  const portfolio = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#portfolio`,
    name: "M.A.D for Business portfolio",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: product.name,
        description: product.description,
        applicationCategory: product.category,
        operatingSystem: "Web",
        ...(product.url ? { url: product.url } : {}),
        creator: { "@id": `${SITE_URL}/#organization` },
        // "live" => disponible, sinon encore en construction
        releaseNotes:
          getProductStatus(product) === "live" ? "Live" : "In development",
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, portfolio],
  };

  return (
    <script
      type="application/ld+json"
      // Donnees statiques issues du depot, aucune entree utilisateur.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
