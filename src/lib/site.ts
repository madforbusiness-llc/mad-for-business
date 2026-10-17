/**
 * Adresse canonique du site.
 *
 * Un seul endroit a changer le jour ou un nom de domaine est achete et
 * branche dans Vercel (Settings -> Domains). Sert au metadataBase, au
 * sitemap, au robots.txt et au JSON-LD.
 */
export const SITE_URL = "https://mad-for-business.vercel.app";

export const ORG = {
  name: "M.A.D for Business",
  legalName: "M.A.D for Business LLC",
  email: "mad.for.buisness@gmail.com",
  street: "30 N Gould St Ste N",
  city: "Sheridan",
  region: "WY",
  postalCode: "82801",
  country: "US",
} as const;
