import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { getIndustryBySlug, industries } from "@/data/industries";
import { locales } from "@/i18n/config";
import { products } from "@/app/lib/products-data";
import { getCategories } from "@/app/lib/products-data";

interface IndustryPageProps {
  params: Promise<{ locale: string; industry: string }>;
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    industries.map((industry) => ({
      locale,
      industry: industry.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { locale, industry } = await params;
  const industryData = getIndustryBySlug(industry);

  if (!industryData) {
    return {
      title: "Industry Not Found",
    };
  }

  const t = await getTranslations({ locale, namespace: "industry" });
  const industryName = locale === "de" && industryData.nameDe ? industryData.nameDe : industryData.name;

  const url = locale === "en"
    ? `https://indotropicalagriculture.com/for/${industry}`
    : `https://indotropicalagriculture.com/de/for/${industry}`;

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  return {
    title: t("metaTitle", { industry: industryName }),
    description: t("metaDescription", { industry: industryName }),
    keywords: industryData.keywords[locale as "en" | "de"],
    openGraph: {
      title: t("metaTitle", { industry: industryName }),
      description: t("metaDescription", { industry: industryName }),
      url,
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: `For ${industryName} - Indo Tropical Agriculture`,
        },
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `https://indotropicalagriculture.com/for/${industry}`,
        de: `https://indotropicalagriculture.com/de/for/${industry}`,
      },
    },
  };
}

// JSON-LD Structured Data for Industry Page
function getIndustryJsonLd(industry: any, locale: string) {
  const industryName = locale === "de" && industry.nameDe ? industry.nameDe : industry.name;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `For ${industryName} - Indo Tropical Agriculture`,
    description: industry.description?.[locale] || industry.description?.en || "",
    about: {
      "@type": "Industry",
      name: industryName,
    },
    audience: {
      "@type": "Audience",
      audienceType: industryName + " businesses and companies",
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { locale, industry } = await params;
  const industryData = getIndustryBySlug(industry);
  const t = await getTranslations({ locale, namespace: "industry" });

  if (!industryData) {
    return (
      <main className="min-h-dvh bg-stone-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">Industry Not Found</h1>
          <Link href="/" className="text-emerald-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const industryName = locale === "de" && industryData.nameDe ? industryData.nameDe : industryData.name;
  const jsonLd = getIndustryJsonLd(industryData, locale);
  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;

  // Get all categories
  const allCategories = getCategories();

  // Filter products by relevant categories for this industry
  const relevantProducts = products.filter((product) =>
    industryData.relevantCategories.includes(product.category)
  );

  // Map category names to slugs
  const categorySlugs: Record<string, string> = {
    Spices: "spices",
    Herbs: "herbs",
    Nuts: "nuts",
    Coffee: "coffee",
    Beans: "beans",
    Cocoa: "cocoa",
    Fruits: "fruits",
    Extracts: "extracts",
    Powders: "powders",
  };

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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-b from-emerald-50 to-stone-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-6xl mb-6" role="img" aria-label={industryName}>
            {industryData.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            {t("heroTitle", { industry: industryName })}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            {industryData.description[locale as "en" | "de"]}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            {t("benefitsTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industryData.benefits.map((benefit: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-stone-200"
              >
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1" role="img" aria-hidden="true">
                    ✓
                  </span>
                  <p className="text-lg text-stone-700">
                    {benefit[locale as "en" | "de"]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 border border-emerald-200">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              {t("useCaseTitle")}
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              {industryData.useCase[locale as "en" | "de"]}
            </p>
          </div>
        </div>
      </section>

      {/* Relevant Products */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            {t("productsTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantProducts.map((product) => (
              <Link
                key={product.slug}
                href={locale === "en" ? `/products/${product.slug}` : `/${locale}/products/${product.slug}`}
                className="group bg-stone-50 rounded-xl border border-stone-200 overflow-hidden hover:border-emerald-500 transition-all duration-300"
              >
                <div className="aspect-square bg-stone-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-stone-900 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-stone-600 mt-1 line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Categories */}
      <section className="py-16 px-4 sm:px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            {t("categoriesTitle")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industryData.relevantCategories.map((category: string) => {
              const slug = categorySlugs[category] || category.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={category}
                  href={locale === "en" ? `/categories/${slug}` : `/${locale}/categories/${slug}`}
                  className="bg-white rounded-lg p-6 text-center border border-stone-200 hover:border-emerald-500 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-stone-900 hover:text-emerald-600 transition-colors">
                    {category}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            {t("ctaTitle", { industry: industryName })}
          </h2>
          <p className="text-lg opacity-90 mb-8">
            {t("ctaSubtitle")}
          </p>
          <Link
            href={`mailto:exports@indotropicalagriculture.com?subject=${encodeURIComponent(industryData.ctaText[locale as "en" | "de"])}`}
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
          >
            {industryData.ctaText[locale as "en" | "de"]}
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
