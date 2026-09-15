export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export const products: Product[] = [
  {
    id: "idishyou",
    name: "iDishYou",
    description: "Marketplace culinaire connectant cuisiniers à domicile et clients avec une expérience fluide et authentique.",
    category: "Marketplace / Foodtech",
    tags: ["Maroc", "App Mobile", "Cuisine"],
    imageUrl: "/images/products/idishyou.jpg",
  },
  {
    id: "ravium",
    name: "Ravium",
    description: "Application communautaire incontournable pour les amateurs de festivals, événements et de vie nocturne.",
    category: "Communauté / Événementiel",
    tags: ["Sorties", "Réseau Social", "Billetterie"],
    imageUrl: "/images/products/ravium.jpg",
  },
  {
    id: "syndichubs",
    name: "SyndicHubs",
    description: "Plateforme SaaS innovante de gestion de copropriétés facilitant la vie des syndics et des résidents grâce à l'IA.",
    category: "SaaS / Proptech",
    tags: ["Gestion", "IA", "Immobilier"],
    imageUrl: "/images/products/syndichubs.jpg",
  },
  {
    id: "skoolhubs",
    name: "SkoolHubs",
    description: "Plateforme éducative et communautaire nouvelle génération pour transformer l'expérience d'apprentissage.",
    category: "EdTech",
    tags: ["Éducation", "Communauté", "E-learning"],
    imageUrl: "/images/products/skoolhubs.jpg",
  },
  {
    id: "showyourcause",
    name: "ShowYourCause",
    description: "Boutique en ligne de vêtements engagés permettant de soutenir des causes à travers la mode.",
    category: "E-commerce",
    tags: ["Mode", "Impact social", "Boutique"],
    imageUrl: "/images/products/showyourcause.jpg",
  }
];
