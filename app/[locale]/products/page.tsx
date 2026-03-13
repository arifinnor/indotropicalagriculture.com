import { getAllProducts } from "../../lib/products-data";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import ProductsClient from "./ProductsClient";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const url = locale === "en"
    ? "https://indotropicalagriculture.com/products"
    : "https://indotropicalagriculture.com/de/products";

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  return {
    title: locale === "en"
      ? "Products | Indo Tropical Agriculture - Indonesian Exporter"
      : "Produkte | Indo Tropical Agriculture - Indonesischer Exporteur",
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    openGraph: {
      title: locale === "en"
        ? "Products | Indo Tropical Agriculture"
        : "Produkte | Indo Tropical Agriculture",
      description: t("description"),
      url,
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Indo Tropical Agriculture Products",
        },
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        en: "https://indotropicalagriculture.com/products",
        de: "https://indotropicalagriculture.com/de/products",
      },
    },
  };
}

// JSON-LD Structured Data generator
function getProductCatalogJsonLd(locale: string, products: ReturnType<typeof getAllProducts>) {
  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${baseUrl}/products#collection`,
        url: `${baseUrl}/products`,
        name: locale === "en"
          ? "Indo Tropical Agriculture Product Catalog"
          : "Indo Tropical Agriculture Produktkatalog",
        description: locale === "en"
          ? "Complete catalog of Indonesian agricultural products available for export"
          : "Vollständiger Katalog indonesischer landwirtschaftlicher Produkte für den Export",
        publisher: {
          "@type": "Organization",
          name: "Indo Tropical Agriculture",
          url: "https://indotropicalagriculture.com",
        },
      },
      {
        "@type": "ItemList",
        name: locale === "en"
          ? "Indonesian Agricultural Products"
          : "Indonesische Landwirtschaftsprodukte",
        description: locale === "en"
          ? "Premium agricultural products from Indonesia available for export"
          : "Premium-Landwirtschaftsprodukte aus Indonesien zum Export verfügbar",
        numberOfItems: products.length,
        itemListElement: products.slice(0, 100).map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.name,
            description: product.shortDescription,
            url: `${baseUrl}/products/${product.slug}`,
            image: product.image,
            category: product.category,
          },
        })),
      },
    ],
  };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  const products = getAllProducts();
  const jsonLd = getProductCatalogJsonLd(locale, products);

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;

  return (
    <main id="main-content" className="min-h-dvh bg-stone-100">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href={getHomePath()}
            className="text-xl font-bold text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
          >
            Indo Tropical Agriculture
          </Link>
          <Link
            href={getHomePath()}
            className="text-sm text-stone-600 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
          >
            <span aria-hidden="true">←</span> <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 text-balance">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto text-pretty mb-6">
            Premium Indonesian agricultural products sourced directly from farmers
            and processed to meet international quality standards.
          </p>
          <Link
            href={locale === "en" ? "/categories" : `/${locale}/categories`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-700 font-semibold rounded-full border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            {locale === "en" ? "Browse by Category" : "Nach Kategorie durchsuchen"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <ProductsClient products={products} locale={locale} />

      {/* CTA */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-emerald-100 mb-6 text-lg">
            We offer many more products beyond our catalog. Contact us to discuss your
            specific requirements.
          </p>
          <Link
            href={locale === "en" ? "/#contact" : `/${locale}/#contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-100 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} Indo Tropical Agriculture. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
