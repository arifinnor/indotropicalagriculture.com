import { Metadata } from "next";
import Link from "next/link";
import { getGlossaryTerms, getGlossaryCategories } from "@/data/glossary";
import { getTranslations } from "next-intl/server";

interface GlossaryPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GlossaryPageProps): Promise<Metadata> {
  const { locale } = await params;

  const url = locale === "en"
    ? "https://indotropicalagriculture.com/glossary"
    : "https://indotropicalagriculture.com/de/glossary";

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  const metaTitle = locale === "en"
    ? "Glossary | Indo Tropical Agriculture - Indonesian Export Terms Explained"
    : "Glossar | Indo Tropical Agriculture - Indonesische Exportbegriffe erklärt";

  const metaDescription = locale === "en"
    ? "Comprehensive glossary of terms related to Indonesian agricultural exports. Learn about HS codes, spice grading, export documentation, vanilla bean grades, clove growing regions, and more."
    : "Umfassendes Glossar der Begriffe im Zusammenhang mit indonesischen Landwirtschaftsexporten. Erfahren Sie mehr über HS-Codes, Gewürzgrading, Exportdokumentation, Vanillebohnen-Grade und mehr.";

  const keywords = locale === "en" ? [
    "indonesian export glossary",
    "agricultural export terms",
    "hs code explanation",
    "spice grading guide",
    "export documentation indonesia",
    "vanilla bean grades",
    "clore growing regions",
    "indonesian spice terms"
  ] : [
    "indonesischer exportglossar",
    "landwirtschaftsexportbegriffe",
    "hs-code-erklärung",
    "gewürzgrading-leitfaden",
    "exportdokumentation indonesien",
    "vanillebohnen-grade",
    "gewürznelken-anbaugebiete",
    "indonesische gewürzbegriffe"
  ];

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
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Indo Tropical Agriculture Glossary",
        },
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        en: "https://indotropicalagriculture.com/glossary",
        de: "https://indotropicalagriculture.com/de/glossary",
      },
    },
  };
}

// JSON-LD CollectionPage Schema for Glossary Index
function getGlossaryJsonLd(locale: string, terms: ReturnType<typeof getGlossaryTerms>) {
  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  const title = locale === "en" ? "Glossary" : "Glossar";
  const description = locale === "en"
    ? "Comprehensive glossary of Indonesian agricultural export terms."
    : "Umfassendes Glossar der Begriffe für indonesische Landwirtschaftsexporte.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${baseUrl}/glossary#collection`,
        url: `${baseUrl}/glossary`,
        name: `Indo Tropical Agriculture ${title}`,
        description,
        numberOfItems: terms.length,
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
            name: title,
          },
        ],
      },
    ],
  };
}

export default async function GlossaryPage({ params }: GlossaryPageProps) {
  const { locale } = await params;
  const terms = getGlossaryTerms();
  const categories = getGlossaryCategories();
  const jsonLd = getGlossaryJsonLd(locale, terms);

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;
  const getGlossaryPath = () => locale === "en" ? "/glossary" : `/${locale}/glossary`;
  const getTermPath = (slug: string) => locale === "en" ? `/what-is/${slug}` : `/${locale}/what-is/${slug}`;

  const pageTitle = locale === "en" ? "Glossary" : "Glossar";
  const pageSubtitle = locale === "en"
    ? "Understanding Indonesian agricultural export terminology"
    : "Verständnis der Terminologie des indonesischen Landwirtschaftsexports";
  const pageDescription = locale === "en"
    ? "Our comprehensive glossary explains the key terms, concepts, and standards related to exporting agricultural products from Indonesia. Whether you're a buyer, importer, or industry professional, these resources will help you navigate the Indonesian export market with confidence."
    : "Unser umfassendes Glossar erklärt die wichtigsten Begriffe, Konzepte und Standards im Zusammenhang mit dem Export von Landwirtschaftsprodukten aus Indonesien. Ob Käufer, Importeur oder Branchenprofi, diese Ressourcen helfen Ihnen, sich sicher auf dem indonesischen Exportmarkt zurechtzufinden.";
  const backToHome = locale === "en" ? "Back to Home" : "Zurück zur Startseite";
  const browseAll = locale === "en" ? "Browse All Terms" : "Alle Begriffe durchsuchen";
  const readMore = locale === "en" ? "Read More" : "Mehr lesen";
  const termsCount = locale === "en"
    ? `${terms.length} educational terms`
    : `${terms.length} Bildungsbegriffe`;

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
            <span aria-hidden="true">←</span> <span>{backToHome}</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full mb-6">
            {pageTitle}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 text-balance">
            {pageTitle}
          </h1>
          <p className="text-lg text-stone-600 mb-4 text-pretty">
            {pageSubtitle}
          </p>
          <p className="text-sm text-stone-500 mb-6">
            {termsCount}
          </p>
          <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {pageDescription}
          </p>
        </div>
      </section>

      {/* Glossary Terms by Category */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">{browseAll}</h2>

          {categories.map((category) => {
            const categoryTerms = terms.filter((t) => t.category === category);
            const categoryLabel = category;

            return (
              <div key={category} className="mb-12">
                <h3 className="text-xl font-semibold text-emerald-700 mb-4 pb-2 border-b border-emerald-200">
                  {categoryLabel}
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryTerms.map((term) => {
                    const termTitle = locale === "en" ? term.title.en : term.title.de;
                    const termDefinition = locale === "en"
                      ? term.definition.en.substring(0, 120) + "..."
                      : term.definition.de.substring(0, 120) + "...";

                    return (
                      <Link
                        key={term.id}
                        href={getTermPath(term.slug)}
                        className="group bg-white rounded-lg p-6 border border-stone-200 hover:border-emerald-300 hover:shadow-lg transition-all"
                      >
                        <h4 className="text-lg font-semibold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {termTitle}
                        </h4>
                        <p className="text-sm text-stone-600 mb-4 line-clamp-3">
                          {termDefinition}
                        </p>
                        <span className="inline-flex items-center text-sm font-medium text-emerald-600 group-hover:text-emerald-700">
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
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "en"
              ? "Need More Information?"
              : "Benötigen Sie weitere Informationen?"}
          </h2>
          <p className="text-emerald-100 mb-6 text-lg">
            {locale === "en"
              ? "Our team is ready to help you understand the Indonesian export process and find the right products for your business."
              : "Unser Team hilft Ihnen gerne, den indonesischen Exportprozess zu verstehen und die richtigen Produkte für Ihr Unternehmen zu finden."}
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
