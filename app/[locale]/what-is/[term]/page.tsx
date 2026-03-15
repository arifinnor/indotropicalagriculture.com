import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getGlossaryTermBySlug, getGlossaryTerms, getRelatedTerms } from "@/data/glossary";
import { locales } from "@/i18n/config";

interface GlossaryTermPageProps {
  params: Promise<{ locale: string; term: string }>;
}

// Generate static params for all glossary terms across all locales
export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getGlossaryTerms().map((term) => ({
      locale,
      term: term.slug,
    }))
  );
}

export async function generateMetadata({ params }: GlossaryTermPageProps): Promise<Metadata> {
  const { locale, term: termSlug } = await params;
  const term = getGlossaryTermBySlug(termSlug);

  if (!term) {
    return {
      title: "Term Not Found",
    };
  }

  const url = locale === "en"
    ? `https://indotropicalagriculture.com/what-is/${termSlug}`
    : `https://indotropicalagriculture.com/de/what-is/${termSlug}`;

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  const metaTitle = locale === "en" ? term.metaTitle.en : term.metaTitle.de;
  const metaDescription = locale === "en" ? term.metaDescription.en : term.metaDescription.de;
  const keywords = locale === "en" ? term.keywords.en : term.keywords.de;

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
      publishedTime: term.publishedAt,
      modifiedTime: term.updatedAt,
      authors: ["Indo Tropical Agriculture"],
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: locale === "en" ? term.title.en : term.title.de,
        },
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `https://indotropicalagriculture.com/what-is/${termSlug}`,
        de: `https://indotropicalagriculture.com/de/what-is/${termSlug}`,
      },
    },
  };
}

// JSON-LD Article Schema for individual glossary term
function getArticleJsonLd(locale: string, term: ReturnType<typeof getGlossaryTermBySlug>) {
  if (!term) return {};

  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  const title = locale === "en" ? term.title.en : term.title.de;
  const description = locale === "en" ? term.definition.en : term.definition.de;
  const content = locale === "en" ? term.content.en : term.content.de;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${baseUrl}/what-is/${term.slug}#article`,
        headline: title,
        description: content.summary,
        datePublished: term.publishedAt,
        dateModified: term.updatedAt,
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
          "@id": `${baseUrl}/what-is/${term.slug}`,
        },
        articleSection: term.category,
        keywords: (locale === "en" ? term.keywords.en : term.keywords.de).join(", "),
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
            name: locale === "en" ? "Glossary" : "Glossar",
            item: `${baseUrl}/glossary`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
          },
        ],
      },
      {
        "@type": "DefinedTerm",
        "@id": `${baseUrl}/what-is/${term.slug}#term`,
        name: title,
        description,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name: "Indonesian Agricultural Export Glossary",
          url: `${baseUrl}/glossary`,
        },
        termCode: term.id,
      },
    ],
  };
}

export default async function GlossaryTermPage({ params }: GlossaryTermPageProps) {
  const { locale, term: termSlug } = await params;
  const term = getGlossaryTermBySlug(termSlug);

  if (!term) {
    notFound();
  }

  const jsonLd = getArticleJsonLd(locale, term);
  const relatedTerms = getRelatedTerms(term.id, locale);

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;
  const getGlossaryPath = () => locale === "en" ? "/glossary" : `/${locale}/glossary`;
  const getTermPath = (slug: string) => locale === "en" ? `/what-is/${slug}` : `/${locale}/what-is/${slug}`;

  // Get localized content
  const title = locale === "en" ? term.title.en : term.title.de;
  const definition = locale === "en" ? term.definition.en : term.definition.de;
  const content = locale === "en" ? term.content.en : term.content.de;
  const category = term.category;

  // UI strings
  const backToHome = locale === "en" ? "Back to Home" : "Zurück zur Startseite";
  const backToGlossary = locale === "en" ? "Back to Glossary" : "Zurück zum Glossar";
  const categoryLabel = locale === "en" ? "Category" : "Kategorie";
  const lastUpdated = locale === "en" ? "Last updated" : "Zuletzt aktualisiert";
  const relatedTermsLabel = locale === "en" ? "Related Terms" : "Verwandte Begriffe";
  const readMore = locale === "en" ? "Read More" : "Mehr lesen";
  const contactCta = locale === "en" ? "Still Have Questions?" : "Haben Sie noch Fragen?";
  const contactDesc = locale === "en"
    ? "Contact our team for more information about this topic or how we can help with your Indonesian import needs."
    : "Kontaktieren Sie unser Team für weitere Informationen zu diesem Thema oder wie wir bei Ihren indonesischen Importbedürfnissen helfen können.";
  const contactButton = locale === "en" ? "Get in Touch" : "Kontaktieren Sie uns";

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
          <div className="flex items-center gap-4">
            <Link
              href={getGlossaryPath()}
              className="text-sm text-stone-600 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
            >
              {backToGlossary}
            </Link>
            <Link
              href={getHomePath()}
              className="text-sm text-stone-600 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
            >
              <span aria-hidden="true">←</span> <span>{backToHome}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 pb-8 px-6 bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="max-w-4xl mx-auto">
          <Link
            href={getGlossaryPath()}
            className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700 font-medium mb-6"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backToGlossary}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full">
              {categoryLabel}: {category}
            </span>
            <span className="text-sm text-stone-500">
              {lastUpdated}: {formatDate(term.updatedAt)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 text-balance">
            What is {title}?
          </h1>

          <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-500 shadow-sm">
            <p className="text-lg text-stone-700 leading-relaxed">
              {definition}
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Summary */}
          <section className="mb-10">
            <p className="text-lg text-stone-600 leading-relaxed">
              {content.summary}
            </p>
          </section>

          {/* Detailed Sections */}
          {content.sections.map((section, index) => (
            <section key={index} className="mb-10">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                {section.heading}
              </h2>
              <div className="prose prose-stone max-w-none">
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </section>
          ))}

          {/* Related Terms */}
          {relatedTerms.length > 0 && (
            <section className="mt-16 pt-8 border-t border-stone-300">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                {relatedTermsLabel}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedTerms.map((relatedTerm) => {
                  const relatedTitle = locale === "en" ? relatedTerm.title.en : relatedTerm.title.de;
                  const relatedDef = locale === "en"
                    ? relatedTerm.definition.en.substring(0, 100) + "..."
                    : relatedTerm.definition.de.substring(0, 100) + "...";

                  return (
                    <Link
                      key={relatedTerm.id}
                      href={getTermPath(relatedTerm.slug)}
                      className="group bg-white rounded-lg p-5 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all"
                    >
                      <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {relatedTitle}
                      </h3>
                      <p className="text-sm text-stone-600 line-clamp-3">
                        {relatedDef}
                      </p>
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
