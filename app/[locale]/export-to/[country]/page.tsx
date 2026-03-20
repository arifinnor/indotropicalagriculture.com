import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getDestinationBySlug, destinations } from "@/data/destinations";
import { locales } from "@/i18n/config";
import { products } from "@/app/lib/products-data";
import Navigation from "@/app/components/Navigation";
import Breadcrumb from "@/app/components/Breadcrumb";

interface DestinationPageProps {
  params: Promise<{ locale: string; country: string }>;
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    destinations.map((destination) => ({
      locale,
      country: destination.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { locale, country } = await params;
  const destination = getDestinationBySlug(country);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  const t = await getTranslations({ locale, namespace: "destination" });
  const countryName = locale === "de" && destination.nameDe ? destination.nameDe : destination.name;

  const url = locale === "en"
    ? `https://indotropicalagriculture.com/export-to/${country}`
    : `https://indotropicalagriculture.com/de/export-to/${country}`;

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  return {
    title: t("metaTitle", { country: countryName }),
    description: t("metaDescription", { country: countryName }),
    keywords: destination.keywords[locale as "en" | "de"],
    openGraph: {
      title: t("metaTitle", { country: countryName }),
      description: t("metaDescription", { country: countryName }),
      url,
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: `Export to ${countryName} - Indo Tropical Agriculture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle", { country: countryName }),
      description: t("metaDescription", { country: countryName }),
      images: ["https://indotropicalagriculture.com/og-image.svg"],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `https://indotropicalagriculture.com/export-to/${country}`,
        de: `https://indotropicalagriculture.com/de/export-to/${country}`,
      },
    },
  };
}

// JSON-LD Structured Data for Country Page
function getCountryJsonLd(destination: NonNullable<ReturnType<typeof getDestinationBySlug>>, locale: string, bt: Awaited<ReturnType<typeof getTranslations>>) {
  const countryName = locale === "de" && destination.nameDe ? destination.nameDe : destination.name;
  const baseUrl = locale === "en"
    ? "https://indotropicalagriculture.com"
    : "https://indotropicalagriculture.com/de";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `Export to ${countryName} - Indo Tropical Agriculture`,
        description: destination.importRegulations[locale as "en" | "de"] || "",
        about: {
          "@type": "Country",
          name: countryName,
        },
        audience: {
          "@type": "Audience",
          audienceType: "Importers, wholesalers, and buyers in " + countryName,
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
            name: bt("exportTo", { country: countryName }),
          },
        ],
      },
    ],
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { locale, country } = await params;
  const destination = getDestinationBySlug(country);
  const t = await getTranslations({ locale, namespace: "destination" });
  const bt = await getTranslations({ locale, namespace: "breadcrumbs" });

  if (!destination) {
    return (
      <main className="min-h-dvh bg-stone-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-900 mb-4">Destination Not Found</h1>
          <Link href="/" className="text-emerald-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const countryName = locale === "de" && destination.nameDe ? destination.nameDe : destination.name;
  const jsonLd = getCountryJsonLd(destination, locale, bt);
  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;

  // Filter products based on popular products for this country
  const popularProductSlugs = destination.popularProducts[locale as "en" | "de"] || [];
  const relevantProducts = products.filter((p) =>
    popularProductSlugs.some((name: string) =>
      p.name.toLowerCase().includes(name.toLowerCase().replace(/\s+/g, "-"))
    )
  );

  return (
    <main id="main-content" className="min-h-dvh bg-stone-100">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb + Hero */}
      <div className="bg-gradient-to-b from-emerald-50/60 to-stone-100">
      <Breadcrumb
        locale={locale}
        items={[
          { label: bt("home"), href: getHomePath() },
          { label: bt("exportTo", { country: countryName }) },
        ]}
      />

      <section className="pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-6xl mb-6" role="img" aria-label={countryName}>
            {destination.flag}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            {t("heroTitle", { country: countryName })}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            {t("heroSubtitle", { country: countryName })}
          </p>
        </div>
      </section>
      </div>

      {/* Import Regulations */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-stone-200">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              {t("regulationsTitle")}
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              {destination.importRegulations[locale as "en" | "de"]}
            </p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            {t("productsTitle", { country: countryName })}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relevantProducts.map((product) => (
              <Link
                key={product.slug}
                href={locale === "en" ? `/products/${product.slug}` : `/${locale}/products/${product.slug}`}
                className="group bg-stone-50 rounded-xl border border-stone-200 overflow-hidden hover:border-emerald-500 transition-all duration-300"
              >
                <div className="aspect-square bg-stone-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
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

      {/* Shipping Information */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Shipping Route */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4" role="img" aria-hidden="true">
                  🚢
                </span>
                <h3 className="text-2xl font-bold text-stone-900">
                  {t("shippingRouteTitle")}
                </h3>
              </div>
              <p className="text-lg text-stone-700">
                {destination.shippingRoute[locale as "en" | "de"]}
              </p>
            </div>

            {/* Transit Time */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4" role="img" aria-hidden="true">
                  ⏱️
                </span>
                <h3 className="text-2xl font-bold text-stone-900">
                  {t("transitTimeTitle")}
                </h3>
              </div>
              <p className="text-lg text-stone-700">
                {destination.transitTime[locale as "en" | "de"]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 sm:px-6 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-stone-200">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4" role="img" aria-hidden="true">
                💳
              </span>
              <h2 className="text-3xl font-bold text-stone-900">
                {t("paymentTitle")}
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {destination.preferredPayment[locale as "en" | "de"].map((method) => (
                <li key={method} className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">✓</span>
                  <span className="text-lg text-stone-700">{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("ctaTitle", { country: countryName })}
          </h2>
          <p className="text-emerald-100 mb-6 text-lg">
            {t("ctaSubtitle", { country: countryName })}
          </p>
          <Link
            href={locale === "en" ? "/#contact" : `/${locale}/#contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
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
