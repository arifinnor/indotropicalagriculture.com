import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { getHSCodeBySlug, getHSCodes, getRelatedHSCodes } from "@/data/hs-codes";
import { locales } from "@/i18n/config";
import Navigation from "../../../components/Navigation";
import Breadcrumb from "../../../components/Breadcrumb";

interface HSCodePageProps {
  params: Promise<{ locale: string; code: string }>;
}

// Generate static params for all HS codes across all locales
export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getHSCodes().map((hsCode) => ({
      locale,
      code: hsCode.slug,
    }))
  );
}

export async function generateMetadata({ params }: HSCodePageProps): Promise<Metadata> {
  const { locale, code } = await params;
  const hsCode = getHSCodeBySlug(code);

  if (!hsCode) {
    return {
      title: "HS Code Not Found",
    };
  }

  const url = locale === "en"
    ? `https://indotropicalagriculture.com/hs-code-${code}`
    : `https://indotropicalagriculture.com/de/hs-code-${code}`;

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  const metaTitle = locale === "en" ? hsCode.metaTitle.en : hsCode.metaTitle.de;
  const metaDescription = locale === "en" ? hsCode.metaDescription.en : hsCode.metaDescription.de;
  const keywords = locale === "en" ? hsCode.keywords.en : hsCode.keywords.de;

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
      publishedTime: "2026-03-15T00:00:00.000Z",
      modifiedTime: "2026-03-15T00:00:00.000Z",
      authors: ["Indo Tropical Agriculture"],
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: locale === "en" ? hsCode.name.en : hsCode.name.de,
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
        en: `https://indotropicalagriculture.com/hs-code-${code}`,
        de: `https://indotropicalagriculture.com/de/hs-code-${code}`,
      },
    },
  };
}

// JSON-LD Schema for HS Code pages
function getHSCodeJsonLd(locale: string, hsCode: ReturnType<typeof getHSCodeBySlug>) {
  if (!hsCode) return {};

  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  const name = locale === "en" ? hsCode.name.en : hsCode.name.de;
  const description = locale === "en" ? hsCode.description.en : hsCode.description.de;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${baseUrl}/hs-code-${hsCode.slug}#article`,
        headline: name,
        description,
        datePublished: "2026-03-15",
        dateModified: new Date().toISOString(),
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
          "@id": `${baseUrl}/hs-code-${hsCode.slug}`,
        },
        articleSection: "Import Regulations",
        keywords: (locale === "en" ? hsCode.keywords.en : hsCode.keywords.de).join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "en" ? "Home" : "Startseite",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "en" ? "HS Code Reference" : "HS-Code-Referenz",
            item: `${baseUrl}/hs-code-${hsCode.slug}`,
          },
        ],
      },
      {
        "@type": "DefinedTerm",
        "@id": `${baseUrl}/hs-code-${hsCode.slug}#hscode`,
        name,
        description,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "Harmonized System (HS) Codes",
          url: "https://www.wcoomd.org/",
        },
        termCode: hsCode.code,
      },
    ],
  };
}

export default async function HSCodePage({ params }: HSCodePageProps) {
  const { locale, code } = await params;
  const hsCode = getHSCodeBySlug(code);
  const bt = await getTranslations({ locale, namespace: "breadcrumbs" });

  if (!hsCode) {
    notFound();
  }

  const jsonLd = getHSCodeJsonLd(locale, hsCode);
  const relatedCodes = getRelatedHSCodes(hsCode.id);

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;
  const getHSCodePath = (slug: string) => locale === "en" ? `/hs-code-${slug}` : `/${locale}/hs-code-${slug}`;

  // Get localized content
  const name = locale === "en" ? hsCode.name.en : hsCode.name.de;
  const description = locale === "en" ? hsCode.description.en : hsCode.description.de;
  const structure = locale === "en" ? hsCode.structure.en : hsCode.structure.de;
  const euDuty = locale === "en" ? hsCode.euDuty.en : hsCode.euDuty.de;
  const usDuty = locale === "en" ? hsCode.usDuty.en : hsCode.usDuty.de;
  const certifications = locale === "en" ? hsCode.certifications.en : hsCode.certifications.de;
  const regulations = locale === "en" ? hsCode.regulations.en : hsCode.regulations.de;

  // UI strings
  const backToHome = locale === "en" ? "Back to Home" : "Zurück zur Startseite";
  const hsCodeLabel = locale === "en" ? "HS Code" : "HS-Code";
  const productsLabel = locale === "en" ? "Products" : "Produkte";
  const structureLabel = locale === "en" ? "HS Code Structure" : "HS-Code-Struktur";
  const euDutyLabel = locale === "en" ? "EU Import Duty" : "EU-Importzoll";
  const usDutyLabel = locale === "en" ? "US Import Duty" : "US-Importzoll";
  const certificationsLabel = locale === "en" ? "Required Certifications" : "Erforderliche Zertifizierungen";
  const regulationsLabel = locale === "en" ? "Import Regulations" : "Importvorschriften";
  const relatedCodesLabel = locale === "en" ? "Related HS Codes" : "Verwandte HS-Codes";
  const viewMore = locale === "en" ? "View Details" : "Mehr erfahren";
  const contactCta = locale === "en" ? "Need Help with HS Code Compliance?" : "Hilfe bei HS-Code-Compliance?";
  const contactDesc = locale === "en"
    ? `Our team can help you understand the import requirements for ${name}. Contact us for detailed information on documentation, certifications, and importing from Indonesia.`
    : `Unser Team kann Ihnen helfen, die Importanforderungen für ${name} zu verstehen. Kontaktieren Sie uns für detaillierte Informationen zu Dokumentationen, Zertifizierungen und dem Import aus Indonesien.`;
  const contactButton = locale === "en" ? "Contact Our Team" : "Kontaktieren Sie unser Team";
  const rateLabel = locale === "en" ? "Rate" : "Satz";

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
        locale={locale}
        items={[
          { label: bt("home"), href: getHomePath() },
          { label: bt("hsCodeReference") },
        ]}
      />

      <section className="pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
              {hsCodeLabel} {hsCode.code}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 text-balance">
            {name}
          </h1>

          <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-500 shadow-sm">
            <p className="text-lg text-stone-700 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>
      </div>

      {/* Content Sections */}
      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Products */}
          {hsCode.products.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                {productsLabel}
              </h2>
              <div className="flex flex-wrap gap-2">
                {hsCode.products.map((product) => (
                  <span
                    key={product}
                    className="inline-block px-3 py-1 bg-stone-200 text-stone-700 text-sm font-medium rounded-full"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* HS Code Structure */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              {structureLabel}
            </h2>
            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <code className="text-emerald-700 font-mono text-sm">
                {structure}
              </code>
            </div>
          </section>

          {/* Import Duties */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              {locale === "en" ? "Import Duties" : "Importzölle"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-stone-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇪🇺</span>
                  <h3 className="text-lg font-semibold text-stone-900">{euDutyLabel}</h3>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-stone-500">{rateLabel}:</span>
                  <span className="ml-2 text-xl font-bold text-emerald-600">{hsCode.euDuty.rate}</span>
                </div>
                <p className="text-sm text-stone-600">{euDuty}</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-stone-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇺🇸</span>
                  <h3 className="text-lg font-semibold text-stone-900">{usDutyLabel}</h3>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-stone-500">{rateLabel}:</span>
                  <span className="ml-2 text-xl font-bold text-emerald-600">{hsCode.usDuty.rate}</span>
                </div>
                <p className="text-sm text-stone-600">{usDuty}</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              {certificationsLabel}
            </h2>
            <div className="bg-white rounded-lg p-6 border border-stone-200">
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-stone-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Regulations */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              {regulationsLabel}
            </h2>
            <div className="space-y-6">
              {regulations.map((regulation, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-stone-200">
                  <h3 className="text-lg font-semibold text-stone-900 mb-3">
                    {regulation.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                    {regulation.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related HS Codes */}
          {relatedCodes.length > 0 && (
            <section className="mt-16 pt-8 border-t border-stone-300">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                {relatedCodesLabel}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedCodes.map((relatedCode) => {
                  const relatedName = locale === "en" ? relatedCode.name.en : relatedCode.name.de;
                  const relatedDesc = locale === "en"
                    ? relatedCode.description.en.substring(0, 100) + "..."
                    : relatedCode.description.de.substring(0, 100) + "...";

                  return (
                    <Link
                      key={relatedCode.id}
                      href={getHSCodePath(relatedCode.slug)}
                      className="group bg-white rounded-lg p-5 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all"
                    >
                      <div className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full mb-3">
                        {hsCodeLabel} {relatedCode.code}
                      </div>
                      <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {relatedName}
                      </h3>
                      <p className="text-sm text-stone-600 line-clamp-3">
                        {relatedDesc}
                      </p>
                      <span className="inline-flex items-center mt-3 text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
                        {viewMore}
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
            </section>
          )}
        </div>
      </article>

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
