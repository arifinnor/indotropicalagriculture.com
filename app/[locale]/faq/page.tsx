import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import FAQClient from "./FAQClient";
import Navigation from "../../components/Navigation";
import Breadcrumb from "../../components/Breadcrumb";

interface FAQPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: FAQPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  const url = locale === "en"
    ? "https://indotropicalagriculture.com/en/faq"
    : "https://indotropicalagriculture.com/de/faq";

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
          alt: "Indo Tropical Agriculture FAQ",
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
        en: "https://indotropicalagriculture.com/en/faq",
        de: "https://indotropicalagriculture.com/de/faq",
      },
    },
  };
}

// JSON-LD FAQ Schema Generator with Breadcrumb
// Note: dangerouslySetInnerHTML is used with trusted, server-side translation data only (not user input)
function getFAQJsonLd(locale: string, t: Awaited<ReturnType<typeof getTranslations>>, bt: Awaited<ReturnType<typeof getTranslations>>) {
  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com/en"
    : "https://indotropicalagriculture.com/de";

  const questions = ["moq", "samples", "payment", "shipping", "shippingTime", "documentation", "quality", "sourcing"];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/faq#faqpage`,
        "url": `${baseUrl}/faq`,
        "inLanguage": locale,
        "about": {
          "@type": "Thing",
          "name": "Indo Tropical Agriculture",
          "description": "Indonesian agriculture exporter FAQs"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Indo Tropical Agriculture",
          "url": "https://indotropicalagriculture.com"
        },
        "mainEntity": questions.map((key, index) => ({
          "@type": "Question",
          "@id": `${baseUrl}/faq#question-${index + 1}`,
          "position": index + 1,
          "name": t.raw(`questions.${key}.question`),
          "acceptedAnswer": {
            "@type": "Answer",
            "@id": `${baseUrl}/faq#answer-${index + 1}`,
            "text": t.raw(`questions.${key}.answer`)
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/faq#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": bt("home"),
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": bt("faq"),
            "item": `${baseUrl}/faq`
          }
        ]
      }
    ]
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  const bt = await getTranslations({ locale, namespace: "breadcrumbs" });
  const jsonLd = getFAQJsonLd(locale, t, bt);

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;

  return (
    <main id="main-content" className="min-h-dvh bg-stone-100">
      {/* JSON-LD Structured Data (trusted server-side translation data only) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      {/* Breadcrumb + Header */}
      <div className="bg-gradient-to-b from-emerald-50/60 to-stone-100">
        <Breadcrumb
          locale={locale}
          items={[
            { label: bt("home"), href: getHomePath() },
            { label: bt("faq") },
          ]}
        />

        <section className="pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 text-balance">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto text-pretty">
              {t("subtitle")}
            </p>
          </div>
        </section>
      </div>

      <FAQClient />

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
