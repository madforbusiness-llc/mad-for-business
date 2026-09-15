export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  url?: string;
  status: "live" | "coming_soon";
  theme: string;
}

export const products: Product[] = [
  {
    id: "idishyou",
    name: "iDishYou",
    description: "A culinary marketplace connecting home cooks and customers with a seamless, authentic experience.",
    category: "Marketplace / Foodtech",
    tags: ["Morocco", "Mobile App", "Food"],
    imageUrl: "/images/products/idishyou.jpg",
    url: "https://idishyou.com",
    status: "live",
    theme: "from-orange-500/20 to-rose-500/20"
  },
  {
    id: "ravium",
    name: "Ravium",
    description: "The ultimate community app for festival, event, and nightlife enthusiasts.",
    category: "Community / Events",
    tags: ["Nightlife", "Social", "Ticketing"],
    imageUrl: "/images/products/ravium.jpg",
    status: "coming_soon",
    theme: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "syndichubs",
    name: "SyndicHubs",
    description: "An innovative SaaS platform for property management, making life easier for syndics and residents through AI.",
    category: "SaaS / Proptech",
    tags: ["Management", "AI", "Real Estate"],
    imageUrl: "/images/products/syndichubs.jpg",
    status: "coming_soon",
    theme: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "skoolhubs",
    name: "SkoolHubs",
    description: "A next-generation educational and community platform to transform the learning experience.",
    category: "EdTech",
    tags: ["Education", "Community", "E-learning"],
    imageUrl: "/images/products/skoolhubs.jpg",
    status: "coming_soon",
    theme: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "showyourcause",
    name: "ShowYourCause",
    description: "An impact-driven online clothing store allowing people to support causes through fashion.",
    category: "E-commerce",
    tags: ["Fashion", "Social Impact", "Store"],
    imageUrl: "/images/products/showyourcause.jpg",
    status: "coming_soon",
    theme: "from-amber-500/20 to-yellow-500/20"
  }
];
