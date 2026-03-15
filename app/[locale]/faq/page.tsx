import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "../../components/FAQ";

interface FAQPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: FAQPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  const url = locale === "en"
    ? "https://indotropicalagriculture.com/faq"
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
        en: "https://indotropicalagriculture.com/faq",
        de: "https://indotropicalagriculture.com/de/faq",
      },
    },
  };
}

// JSON-LD FAQ Schema Generator
function getFAQJsonLd(t: any) {
  const questions = ["moq", "samples", "payment", "shipping", "shippingTime", "documentation", "quality", "sourcing"];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((key) => ({
      "@type": "Question",
      "name": t.raw(`questions.${key}.question`),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t.raw(`questions.${key}.answer`)
      }
    }))
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  const jsonLd = getFAQJsonLd(t);

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
            <span aria-hidden="true">←</span> <span>Back to Home</span>
          </Link>
        </div>
      </nav>

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
