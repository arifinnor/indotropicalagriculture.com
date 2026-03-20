import { getCategories, getProductsByCategory } from "../../lib/products-data";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import CategoriesClient from "./CategoriesClient";
import Navigation from "../../components/Navigation";
import Breadcrumb from "../../components/Breadcrumb";

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
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: ["https://indotropicalagriculture.com/og-image.svg"],
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
function getCategoryIndexJsonLd(locale: string, bt: Awaited<ReturnType<typeof getTranslations>>) {
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
            name: bt("home"),
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: bt("categories"),
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

  const bt = await getTranslations({ locale, namespace: "breadcrumbs" });
  const jsonLd = getCategoryIndexJsonLd(locale, bt);
  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;

  return (
    <main id="main-content" className="min-h-dvh bg-stone-100">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb + Header */}
      <div className="bg-gradient-to-b from-emerald-50/60 to-stone-100">
      <Breadcrumb
        items={[
          { label: bt("home"), href: getHomePath() },
          { label: bt("categories") },
        ]}
      />

      <section className="pb-12 px-6">
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
      </div>

      <CategoriesClient categories={categoryData} locale={locale} />

      {/* CTA */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("ctaHeading")}
          </h2>
          <p className="text-emerald-100 mb-6 text-lg">
            {t("ctaDescription")}
          </p>
          <Link
            href={locale === "en" ? "/#contact" : `/${locale}/#contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
          >
            {t("ctaButton")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
