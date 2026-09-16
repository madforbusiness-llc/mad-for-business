/* ==========================================================================
   FICHIER À ÉDITER POUR LE PORTFOLIO
   --------------------------------------------------------------------------
   1. LE LIEN  -> champ `url`
        - `url` rempli   => le projet s'affiche automatiquement en "Live"
                            et la carte devient cliquable.
        - `url` absent   => le projet s'affiche en "In Progress" (en cours).
        - pour forcer :    ajouter `status: "building"` ou `status: "live"`.

   2. LE LOGO  -> champ `logo`
        - dépose le fichier dans :  public/images/products/
        - puis écris ici :          logo: "/images/products/<nom-du-fichier>"
        - format conseillé : PNG fond transparent, 800 x 400 px, < 300 Ko
        - si le fichier n'existe pas, le nom du produit s'affiche à la place
          (aucune page cassée).

   3. L'IMAGE DE FOND (facultatif) -> champ `cover`
        - screenshot / visuel d'ambiance derrière le logo.
        - format conseillé : JPG ou WEBP, 1200 x 675 px (16:9), < 400 Ko
   ========================================================================== */

export type ProductStatus = "live" | "building";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  /** Lien public du projet. Présent => badge "Live" + carte cliquable. */
  url?: string;
  /** Logo du projet, ex: "/images/products/idishyou.png" */
  logo?: string;
  /** Visuel de fond facultatif, ex: "/images/products/idishyou-cover.jpg" */
  cover?: string;
  /** Laisser vide : déduit de `url`. À remplir seulement pour forcer. */
  status?: ProductStatus;
  theme: string;
}

export const products: Product[] = [
  {
    id: "idishyou",
    name: "iDishYou",
    description:
      "A culinary marketplace connecting home cooks and customers with a seamless, authentic experience.",
    category: "Marketplace / Foodtech",
    tags: ["Morocco", "Mobile App", "Food"],
    url: "https://idishyou.com",
    logo: "/images/products/idishyou.png",
    theme: "from-orange-500/20 to-rose-500/20",
  },
  {
    id: "ravium",
    name: "Ravium",
    description:
      "The ultimate community app for festival, event, and nightlife enthusiasts.",
    category: "Community / Events",
    tags: ["Nightlife", "Social", "Ticketing"],
    // url: "https://ravium.com",
    logo: "/images/products/ravium.png",
    theme: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "syndichubs",
    name: "SyndicHubs",
    description:
      "An innovative SaaS platform for property management, making life easier for syndics and residents through AI.",
    category: "SaaS / Proptech",
    tags: ["Management", "AI", "Real Estate"],
    // url: "https://syndichubs.com",
    logo: "/images/products/syndichubs.png",
    theme: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "skoolhubs",
    name: "SkoolHubs",
    description:
      "A next-generation educational and community platform to transform the learning experience.",
    category: "EdTech",
    tags: ["Education", "Community", "E-learning"],
    // url: "https://skoolhubs.com",
    logo: "/images/products/skoolhubs.png",
    theme: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "showyourcause",
    name: "ShowYourCause",
    description:
      "An impact-driven online clothing store allowing people to support causes through fashion.",
    category: "E-commerce",
    tags: ["Fashion", "Social Impact", "Store"],
    // url: "https://showyourcause.com",
    logo: "/images/products/showyourcause.png",
    theme: "from-amber-500/20 to-yellow-500/20",
  },
];

/** Règle unique : un lien => "live", sinon "building". `status` peut forcer. */
export function getProductStatus(product: Product): ProductStatus {
  return product.status ?? (product.url ? "live" : "building");
}
