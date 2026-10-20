import fs from "node:fs";
import path from "node:path";

import { products } from "@/data/products";

/**
 * Liste les logos produits REELLEMENT presents dans public/images/products.
 *
 * Lu au build, sur le serveur. Sans ce filtre, le HTML servi contient une
 * balise <img> pour chaque produit meme quand le fichier n'existe pas : le
 * repli texte ne s'active qu'une fois l'image en echec, cote navigateur.
 * Resultat, cinq ressources en 404 pour les crawlers et un decalage visuel
 * pour l'utilisateur.
 *
 * Le fonctionnement reste le meme pour toi : tu deposes le fichier dans
 * public/images/products, il apparait au prochain build. Rien a modifier
 * dans le code.
 */
export function getAvailableLogoIds(): string[] {
  return products
    .filter((product) => {
      if (!product.logo) return false;

      // product.logo vaut "/images/products/xxx.png" : on le resout depuis
      // la racine du projet, ou vit le dossier public.
      const filePath = path.join(process.cwd(), "public", product.logo);
      return fs.existsSync(filePath);
    })
    .map((product) => product.id);
}
