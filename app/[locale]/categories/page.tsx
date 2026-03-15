import { getCategories, getProductsByCategory } from "../../lib/products-data";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import CategoriesClient from "./CategoriesClient";

interface CategoriesPageProps {
  params: Promise<{ locale: string }>;
}

// Helper function to slugify category names
function slugifyCategory(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export async function generateMetadata({
  params,
}: CategoriesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categories" });

  const url = locale === "en"
    ? "https://indotropicalagriculture.com/categories"
    : "https://indotropicalagriculture.com/de/categories";

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords: t.raw("metaKeywords") as string[],
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url,
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Indo Tropical Agriculture Categories",
        },
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        en: "https://indotropicalagriculture.com/categories",
        de: "https://indotropicalagriculture.com/de/categories",
      },
    },
  };
}

// JSON-LD Structured Data generator for category index
function getCategoryIndexJsonLd(locale: string, categories: Array<{name: string; slug: string; productCount: number}>) {
  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${baseUrl}/categories#collection`,
        url: `${baseUrl}/categories`,
        name: locale === "en"
          ? "Indo Tropical Agriculture Product Categories"
          : "Indo Tropical Agriculture Produktkategorien",
        description: locale === "en"
          ? "Browse Indonesian agricultural products by category including spices, herbs, nuts, coffee, and beans."
          : "Durchsuchen Sie indonesische landwirtschaftliche Produkte nach Kategorie, einschließlich Gewürzen, Kräutern, Nüssen, Kaffee und Bohnen.",
        publisher: {
          "@type": "Organization",
          name: "Indo Tropical Agriculture",
          url: "https://indotropicalagriculture.com",
        },
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
        ],
      },
    ],
  };
}

export default async function CategoriesPage({ params }: CategoriesPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categories" });
  const categories = getCategories();

  // Build category data with translations
  const categoryData = categories.map((category) => {
    const slug = slugifyCategory(category);
    const products = getProductsByCategory(category);
    const categoryKey = slug.toLowerCase();

    return {
      slug,
      name: t.raw(`${categoryKey}.name`) as string || category,
      description: t.raw(`${categoryKey}.description`) as string || `${category} products from Indonesia`,
      productCount: products.length,
    };
  });

  const jsonLd = getCategoryIndexJsonLd(locale, categoryData);
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
            <span aria-hidden="true">←</span> <span>{locale === "en" ? "Back to Home" : "Zurück zur Startseite"}</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 text-balance">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto text-pretty mb-6">
            {t("description")}
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

      <CategoriesClient categories={categoryData} locale={locale} />

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
