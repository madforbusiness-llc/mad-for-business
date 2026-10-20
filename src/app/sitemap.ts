import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { productPages } from "@/data/product-pages";

/**
 * Genere /sitemap.xml.
 *
 * ATTENTION aux dates : `lastModified` doit refleter la derniere
 * modification REELLE du contenu visible de la page, pas la date du
 * build. Mettre `new Date()` ferait mentir le sitemap a chaque
 * deploiement en annoncant que toutes les pages ont change, et Google
 * finit par ignorer le lastmod d'un site qui se montre peu fiable.
 *
 * Les dates ci-dessous sont donc ecrites a la main. A mettre a jour
 * quand le contenu d'une page change vraiment (pas pour un correctif
 * de style ou une modification technique invisible).
 */
const LAST_CONTENT_UPDATE = {
  // Derniers changements de contenu : liens des 5 produits ajoutes.
  home: "2026-09-16",
  // Mentions legales : texte inchange, metadonnees ajoutees.
  legal: "2026-10-17",
  // Pages produit : publication initiale.
  products: "2026-10-20",
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_CONTENT_UPDATE.home,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified: LAST_CONTENT_UPDATE.legal,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...Object.keys(productPages).map((slug) => ({
      url: `${SITE_URL}/products/${slug}`,
      lastModified: LAST_CONTENT_UPDATE.products,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
