import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import FAQ from "../../components/FAQ";
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
function getFAQJsonLd(locale: string, t: ReturnType<typeof getTranslations>) {
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
            "name": "Home",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "FAQ" : "FAQ",
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
  const jsonLd = getFAQJsonLd(locale, t);

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;

  return (
    <main id="main-content" className="min-h-dvh bg-stone-100">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      {/* Breadcrumb */}
      <Breadcrumb
        locale={locale}
        items={[
          { label: bt("home"), href: getHomePath() },
          { label: bt("faq") },
        ]}
      />

      <FAQ locale={locale} />

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
