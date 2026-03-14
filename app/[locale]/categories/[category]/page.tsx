import { notFound } from "next/navigation";
import { getCategories, getProductsByCategory } from "../../../lib/products-data";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import CategoryProductsClient from "./CategoryProductsClient";
import { getGlossaryTerms } from "@/data/glossary";

interface CategoryPageProps {
  params: Promise<{ locale: string; category: string }>;
}

// Mapping between URL slugs and actual category names
const SLUG_TO_CATEGORY: Record<string, string> = {
  spices: "Spices",
  herbs: "Herbs",
  nuts: "Nuts",
  coffee: "Coffee",
  beans: "Beans",
  cocoa: "Cocoa",
  fruits: "Fruits",
  extracts: "Extracts",
  powders: "Powders",
};

// Reverse mapping for generateStaticParams
const CATEGORY_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_TO_CATEGORY).map(([slug, category]) => [category, slug])
);

// Helper to get category from slug
function getCategoryFromSlug(slug: string): string | undefined {
  return SLUG_TO_CATEGORY[slug];
}

// Helper to get slug from category
function getSlugFromCategory(category: string): string {
  return CATEGORY_TO_SLUG[category] || category.toLowerCase().replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    category: getSlugFromCategory(category),
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { locale, category: categorySlug } = await params;
  const t = await getTranslations({ locale, namespace: "categories" });

  const category = getCategoryFromSlug(categorySlug);
  if (!category) return { title: "Category Not Found" };

  const categoryKey = categorySlug.toLowerCase();

  const url = locale === "en"
    ? `https://indotropicalagriculture.com/categories/${categorySlug}`
    : `https://indotropicalagriculture.com/de/categories/${categorySlug}`;

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  const categoryName = t.raw(`${categoryKey}.name`) as string || category;
  const metaTitle = t.raw(`${categoryKey}.metaTitle`) as string || `${category} | Indo Tropical Agriculture`;
  const metaDescription = t.raw(`${categoryKey}.metaDescription`) as string || `Premium ${category.toLowerCase()} sourced directly from Indonesian farmers.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: t.raw(`${categoryKey}.metaKeywords`) as string[] || [
      `indonesian ${category.toLowerCase()}`,
      `${category.toLowerCase()} export indonesia`,
      `wholesale ${category.toLowerCase()}`,
    ],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: `${categoryName} - Indo Tropical Agriculture`,
        },
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `https://indotropicalagriculture.com/categories/${categorySlug}`,
        de: `https://indotropicalagriculture.com/de/categories/${categorySlug}`,
      },
    },
  };
}

// JSON-LD Structured Data generator for individual category page
function getCategoryJsonLd(
  locale: string,
  categorySlug: string,
  categoryName: string,
  products: ReturnType<typeof getProductsByCategory>
) {
  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  const categoryTitle = locale === "en"
    ? `Indo Tropical Agriculture ${categoryName}`
    : `Indo Tropical Agriculture ${categoryName}`;

  const description = locale === "en"
    ? `Premium ${categoryName.toLowerCase()} sourced directly from Indonesian farmers. Wholesale export to European and global markets.`
    : `Premium-${categoryName.toLowerCase()} direkt von indonesischen Bauern bezogen. Großexport für europäische und globale Märkte.`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${baseUrl}/categories/${categorySlug}#collection`,
        url: `${baseUrl}/categories/${categorySlug}`,
        name: categoryTitle,
        description,
        numberOfItems: products.length,
        publisher: {
          "@type": "Organization",
          name: "Indo Tropical Agriculture",
          url: "https://indotropicalagriculture.com",
        },
      },
      {
        "@type": "ItemList",
        name: `${categoryName} Products`,
        description,
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
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "en" ? "Categories" : "Kategorien",
            item: `${baseUrl}/categories`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: categoryName,
          },
        ],
      },
    ],
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category: categorySlug } = await params;
  const t = await getTranslations({ locale, namespace: "categories" });

  const category = getCategoryFromSlug(categorySlug);
  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category);
  const categoryKey = categorySlug.toLowerCase();
  const categoryName = t.raw(`${categoryKey}.name`) as string || category;
  const categoryDescription = t.raw(`${categoryKey}.description`) as string || `${category} products from Indonesia`;

  // Get relevant glossary terms
  const allGlossaryTerms = getGlossaryTerms();

  const jsonLd = getCategoryJsonLd(locale, categorySlug, categoryName, products);
  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;
  const getGlossaryPath = (slug: string) => locale === "en" ? `/what-is/${slug}` : `/${locale}/what-is/${slug}`;

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
            <span aria-hidden="true">←</span> <span>{locale === "en" ? "Back to Home" : "Zurück zur Startseite"}</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 text-balance">
            {categoryName}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto text-pretty">
            {categoryDescription}
          </p>
          <p className="text-sm text-stone-500 mt-4 mb-6">
            {products.length} {products.length === 1
              ? (locale === "en" ? "product available" : "Produkt verfügbar")
              : (locale === "en" ? "products available" : "Produkte verfügbar")}
          </p>
          <Link
            href={locale === "en" ? "/products" : `/${locale}/products`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-700 font-semibold rounded-full border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            {locale === "en" ? "Browse All Products" : "Alle Produkte durchsuchen"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <CategoryProductsClient
        products={products}
        categoryName={categoryName}
        locale={locale}
      />

      {/* Learn More - Glossary Links */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-3">
            {locale === "en" ? "Learn About Indonesian Exports" : "Erfahren Sie mehr über indonesische Exporte"}
          </h2>
          <p className="text-stone-600 mb-6">
            {locale === "en"
              ? "Understanding the terminology and standards helps you make informed purchasing decisions."
              : "Das Verständnis der Terminologie und Standards hilft Ihnen, fundierte Kaufentscheidungen zu treffen."}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {allGlossaryTerms.slice(0, 4).map((term) => {
              const termTitle = locale === "en" ? term.title.en : term.title.de;
              return (
                <Link
                  key={term.id}
                  href={getGlossaryPath(term.slug)}
                  className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {termTitle}
                </Link>
              );
            })}
            <Link
              href={locale === "en" ? "/glossary" : `/${locale}/glossary`}
              className="inline-flex items-center px-4 py-2 bg-stone-100 text-stone-700 text-sm font-medium rounded-full border border-stone-200 hover:bg-stone-200 hover:border-stone-300 transition-colors"
            >
              {locale === "en" ? "View All Terms →" : "Alle Begriffe anzeigen →"}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "en"
              ? "Can't Find What You're Looking For?"
              : "Sie finden nicht, was Sie suchen?"}
          </h2>
          <p className="text-emerald-100 mb-6 text-lg">
            {locale === "en"
              ? "We offer many more products beyond our catalog. Contact us to discuss your specific requirements."
              : "Wir bieten viele weitere Produkte über unseren Katalog hinaus. Kontaktieren Sie uns, um Ihre speziellen Anforderungen zu besprechen."}
          </p>
          <Link
            href={locale === "en" ? "/#contact" : `/${locale}/#contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
          >
            {locale === "en" ? "Contact Us" : "Kontaktieren Sie uns"}
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
