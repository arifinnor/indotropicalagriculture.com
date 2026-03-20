import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getComparisonBySlug, getComparisons, getRelatedComparisons } from "@/data/comparisons";
import { locales } from "@/i18n/config";
import Navigation from "../../../components/Navigation";
import Breadcrumb from "../../../components/Breadcrumb";

interface ComparisonPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Generate static params for all comparisons across all locales
export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getComparisons().map((comparison) => ({
      locale,
      slug: comparison.slug,
    }))
  );
}

export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return {
      title: "Comparison Not Found",
    };
  }

  const url = locale === "en"
    ? `https://indotropicalagriculture.com/vs/${slug}`
    : `https://indotropicalagriculture.com/de/vs/${slug}`;

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  const metaTitle = locale === "en" ? comparison.metaTitle.en : comparison.metaTitle.de;
  const metaDescription = locale === "en" ? comparison.metaDescription.en : comparison.metaDescription.de;
  const keywords = locale === "en" ? comparison.keywords.en : comparison.keywords.de;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
      type: "article",
      publishedTime: comparison.publishedAt,
      modifiedTime: comparison.updatedAt,
      authors: ["Indo Tropical Agriculture"],
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: locale === "en"
            ? `${comparison.productA.name.en} vs ${comparison.productB.name.en}`
            : `${comparison.productA.name.de} vs ${comparison.productB.name.de}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ["https://indotropicalagriculture.com/og-image.svg"],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `https://indotropicalagriculture.com/vs/${slug}`,
        de: `https://indotropicalagriculture.com/de/vs/${slug}`,
      },
    },
  };
}

// JSON-LD Schema for comparison pages
function getComparisonJsonLd(locale: string, comparison: ReturnType<typeof getComparisonBySlug>, bt: Awaited<ReturnType<typeof getTranslations>>) {
  if (!comparison) return {};

  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  const productAName = locale === "en" ? comparison.productA.name.en : comparison.productA.name.de;
  const productBName = locale === "en" ? comparison.productB.name.en : comparison.productB.name.de;
  const metaTitle = locale === "en" ? comparison.metaTitle.en : comparison.metaTitle.de;
  const metaDescription = locale === "en" ? comparison.metaDescription.en : comparison.metaDescription.de;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${baseUrl}/vs/${comparison.slug}#article`,
        headline: metaTitle,
        description: metaDescription,
        datePublished: comparison.publishedAt,
        dateModified: comparison.updatedAt,
        author: {
          "@type": "Organization",
          name: "Indo Tropical Agriculture",
          url: "https://indotropicalagriculture.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Indo Tropical Agriculture",
          url: "https://indotropicalagriculture.com",
          logo: {
            "@type": "ImageObject",
            url: "https://indotropicalagriculture.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${baseUrl}/vs/${comparison.slug}`,
        },
        articleSection: "Product Comparison",
        keywords: (locale === "en" ? comparison.keywords.en : comparison.keywords.de).join(", "),
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
            name: bt("comparisons"),
            item: `${baseUrl}/vs/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${productAName} vs ${productBName}`,
          },
        ],
      },
    ],
  };
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { locale, slug } = await params;
  const comparison = getComparisonBySlug(slug);
  const bt = await getTranslations({ locale, namespace: "breadcrumbs" });

  if (!comparison) {
    notFound();
  }

  const jsonLd = getComparisonJsonLd(locale, comparison, bt);
  const relatedComparisons = getRelatedComparisons(comparison.id, locale, 3);

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;
  const getComparisonPath = (slug: string) => locale === "en" ? `/vs/${slug}` : `/${locale}/vs/${slug}`;
  const getProductPath = (productSlug: string) => locale === "en" ? `/products/${productSlug}` : `/${locale}/products/${productSlug}`;

  // Get localized content
  const productAName = locale === "en" ? comparison.productA.name.en : comparison.productA.name.de;
  const productBName = locale === "en" ? comparison.productB.name.en : comparison.productB.name.de;
  const productADesc = locale === "en" ? comparison.productA.description.en : comparison.productA.description.de;
  const productBDesc = locale === "en" ? comparison.productB.description.en : comparison.productB.description.de;
  const intro = locale === "en" ? comparison.intro.en : comparison.intro.de;
  const keyDifference = locale === "en" ? comparison.keyDifference.en : comparison.keyDifference.de;
  const chooseATitle = locale === "en" ? comparison.chooseA.title.en : comparison.chooseA.title.de;
  const chooseAReasons = locale === "en" ? comparison.chooseA.reasons.en : comparison.chooseA.reasons.de;
  const chooseBTitle = locale === "en" ? comparison.chooseB.title.en : comparison.chooseB.title.de;
  const chooseBReasons = locale === "en" ? comparison.chooseB.reasons.en : comparison.chooseB.reasons.de;
  const conclusion = locale === "en" ? comparison.conclusion.en : comparison.conclusion.de;

  // UI strings
  const backToHome = locale === "en" ? "Back to Home" : "Zurück zur Startseite";
  const comparisonLabel = locale === "en" ? "Product Comparison" : "Produktvergleich";
  const specificationsLabel = locale === "en" ? "Specifications" : "Spezifikationen";
  const keyDifferenceLabel = locale === "en" ? "Key Difference" : "Hauptunterschied";
  const conclusionLabel = locale === "en" ? "Conclusion" : "Fazit";
  const relatedComparisonsLabel = locale === "en" ? "Related Comparisons" : "Verwandte Vergleiche";
  const readMore = locale === "en" ? "Read Comparison" : "Vergleich lesen";
  const contactCta = locale === "en" ? "Need Help Choosing the Right Product?" : "Hilfe bei der Produktauswahl?";
  const contactDesc = locale === "en"
    ? "Our team can help you select the right product for your market. Contact us for detailed information, samples, and pricing."
    : "Unser Team kann Ihnen helfen, das richtige Produkt für Ihren Markt auszuwählen. Kontaktieren Sie uns für detaillierte Informationen, Muster und Preise.";
  const contactButton = locale === "en" ? "Contact Our Team" : "Kontaktieren Sie unser Team";

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return locale === "en"
      ? date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
      : date.toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <main id="main-content" className="min-h-dvh bg-stone-100">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <Breadcrumb
        locale={locale}
        items={[
          { label: bt("home"), href: getHomePath() },
          { label: bt("comparisons") },
          { label: `${productAName} vs ${productBName}` },
        ]}
      />

      {/* Header */}
      <section className="pb-8 px-6 bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
              {comparisonLabel}
            </span>
            <span className="text-sm text-stone-500">
              {formatDate(comparison.updatedAt)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 text-balance">
            {productAName} vs {productBName}
          </h1>

          <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-500 shadow-sm">
            <p className="text-lg text-stone-700 leading-relaxed">
              {intro}
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product A Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-stone-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <h2 className="text-2xl font-bold text-stone-900">{productAName}</h2>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {productADesc}
              </p>
              {comparison.productA.slug && (
                <Link
                  href={getProductPath(comparison.productA.slug)}
                  className="inline-flex items-center mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  {locale === "en" ? "View Product Details" : "Produktdetails anzeigen"}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>

            {/* Product B Card */}
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  B
                </div>
                <h2 className="text-2xl font-bold text-stone-900">{productBName}</h2>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {productBDesc}
              </p>
              {comparison.productB.slug && (
                <Link
                  href={getProductPath(comparison.productB.slug)}
                  className="inline-flex items-center mt-4 text-amber-600 hover:text-amber-700 font-medium"
                >
                  {locale === "en" ? "View Product Details" : "Produktdetails anzeigen"}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Difference */}
      <section className="py-12 px-6 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {keyDifferenceLabel}
            </h2>
            <p className="text-emerald-50 text-lg leading-relaxed">
              {keyDifference}
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            {specificationsLabel}
          </h2>
          <div className="overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-stone-900 border-b border-stone-200">
                    {locale === "en" ? "Specification" : "Spezifikation"}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-700 border-b border-stone-200 bg-emerald-50">
                    {productAName}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-amber-700 border-b border-stone-200 bg-amber-50">
                    {productBName}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {comparison.specs.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-6 py-4 text-sm font-medium text-stone-900">
                      {locale === "en" ? spec.label.en : spec.label.de}
                    </td>
                    <td className="px-6 py-4 text-sm text-stone-700 bg-emerald-50/50">
                      {spec.valueA}
                    </td>
                    <td className="px-6 py-4 text-sm text-stone-700 bg-amber-50/50">
                      {spec.valueB}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Choosing Guidance */}
      <section className="py-12 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Choose A */}
            <div className="bg-white rounded-xl p-6 border-t-4 border-emerald-500 shadow-sm">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {productAName}: {chooseATitle}
              </h2>
              <ul className="space-y-3">
                {chooseAReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-stone-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose B */}
            <div className="bg-white rounded-xl p-6 border-t-4 border-amber-500 shadow-sm">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {productBName}: {chooseBTitle}
              </h2>
              <ul className="space-y-3">
                {chooseBReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-stone-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            {conclusionLabel}
          </h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-stone-700 leading-relaxed text-lg">
              {conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Related Comparisons */}
      {relatedComparisons.length > 0 && (
        <section className="py-12 px-6 bg-stone-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              {relatedComparisonsLabel}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedComparisons.map((related) => {
                const relatedTitleA = locale === "en" ? related.productA.name.en : related.productA.name.de;
                const relatedTitleB = locale === "en" ? related.productB.name.en : related.productB.name.de;

                return (
                  <Link
                    key={related.id}
                    href={getComparisonPath(related.slug)}
                    className="group bg-white rounded-lg p-5 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all"
                  >
                    <div className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-semibold rounded-full mb-3">
                      {comparisonLabel}
                    </div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {relatedTitleA} vs {relatedTitleB}
                    </h3>
                    <span className="inline-flex items-center mt-3 text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                      {readMore}
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {contactCta}
          </h2>
          <p className="text-emerald-100 mb-6 text-lg max-w-2xl mx-auto">
            {contactDesc}
          </p>
          <Link
            href={locale === "en" ? "/#contact" : `/${locale}/#contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
          >
            {contactButton}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
