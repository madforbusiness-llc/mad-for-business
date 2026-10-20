import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { products, getProductStatus } from "@/data/products";
import { productPages, getProductPage } from "@/data/product-pages";
import { SITE_URL } from "@/lib/site";

/**
 * Page dediee a un produit du portfolio.
 *
 * Generee statiquement pour les 5 produits. C'est ce qui fait passer le
 * site de 2 a 7 pages indexables, et chaque page porte un contenu
 * autonome : un moteur de reponse peut la citer sans le reste du site.
 */

export function generateStaticParams() {
  return Object.keys(productPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/products/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${SITE_URL}/products/${page.slug}`,
      type: "article",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getProductPage(slug);
  const product = products.find((item) => item.id === slug);

  if (!page || !product) notFound();

  const isLive = getProductStatus(product) === "live" && Boolean(product.url);

  // SoftwareApplication + FAQPage + fil d'Ariane. Le FAQPage ne reprend
  // que des questions reellement affichees sur la page : baliser des
  // questions invisibles est une violation des regles Google.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/products/${page.slug}#software`,
        name: product.name,
        description: page.lead,
        applicationCategory: product.category,
        operatingSystem: "Web",
        ...(product.url ? { url: product.url } : {}),
        creator: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/products/${page.slug}#faq`,
        mainEntity: page.faq.map((entry) => ({
          "@type": "Question",
          name: entry.question,
          acceptedAnswer: { "@type": "Answer", text: entry.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/products/${page.slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: `${SITE_URL}/#portfolio`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: `${SITE_URL}/products/${page.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-32 pb-24 bg-brand-900 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {/* Fil d'Ariane : maillage interne, l'un des points faibles du site */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all products
            </Link>
          </nav>

          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/80">
                {product.category}
              </span>
              {isLive ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/15 rounded-full text-xs font-medium text-emerald-300 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 rounded-full text-xs font-medium text-amber-200 border border-amber-400/20">
                  In Progress
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              {page.heading}
            </h1>

            {/* Premier paragraphe : la reponse autonome que les moteurs citent */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {page.lead}
            </p>

            {isLive && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-brand-accent text-white font-medium hover:opacity-90 transition-opacity"
              >
                {page.visitLabel}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </header>

          <div className="space-y-12">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-5">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-6">
                What {product.name} includes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {page.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="p-5 rounded-xl border border-white/10 bg-brand-800/40"
                  >
                    <h3 className="text-white font-semibold mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-6">
                Who {product.name} is for
              </h2>
              <ul className="space-y-3">
                {page.audience.map((entry) => (
                  <li key={entry} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{entry}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {page.faq.map((entry) => (
                  <div
                    key={entry.question}
                    className="pb-6 border-b border-white/5 last:border-0"
                  >
                    <h3 className="text-white font-semibold mb-2">
                      {entry.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {entry.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Maillage interne vers les autres produits */}
          <section className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-5">
              Other products
            </h2>
            <div className="flex flex-wrap gap-3">
              {products
                .filter((item) => item.id !== product.id)
                .map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className="px-4 py-2 rounded-lg border border-white/10 bg-brand-800/40 text-sm text-white/80 hover:border-brand-accent/50 hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
