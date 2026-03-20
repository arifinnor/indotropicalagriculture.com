import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { getProductBySlug, products } from "../../../lib/products-data";
import { getGlossaryTerms } from "@/data/glossary";
import Navigation from "../../../components/Navigation";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  const name = product.name;
  const description = product.fullDescription;

  const url = `https://indotropicalagriculture.com/products/${slug}`;
  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  return {
    title: `${name} | Indo Tropical Agriculture - Indonesian Exporter`,
    description: description,
    keywords: product.keywords,
    authors: [{ name: "Indo Tropical Agriculture" }],
    creator: "Indo Tropical Agriculture",
    publisher: "Indo Tropical Agriculture",
    metadataBase: new URL("https://indotropicalagriculture.com"),
    ...(product.lastUpdated && {
      modifiedTime: new Date(product.lastUpdated).toISOString(),
    }),
    alternates: {
      canonical: url,
      languages: {
        en: `https://indotropicalagriculture.com/products/${slug}`,
        de: `https://indotropicalagriculture.com/de/products/${slug}`,
      },
    },
    openGraph: {
      title: `${name} | Indo Tropical Agriculture`,
      description: description,
      url,
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: `${name} - Indo Tropical Agriculture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | Indo Tropical Agriculture`,
      description: description,
      images: ["https://indotropicalagriculture.com/og-image.svg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function ProductContent({ slug }: { slug: string }) {
  const t = useTranslations("productPage");
  const locale = useLocale();

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const fullDescription = product.fullDescription;
  const specs = product.specifications.filter(spec => spec.label !== "Price");

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;
  const getProductsPath = () => locale === "en" ? "/products" : `/${locale}/products`;
  const getGlossaryPath = (slug: string) => locale === "en" ? `/what-is/${slug}` : `/${locale}/what-is/${slug}`;

  // Get relevant glossary terms for this product
  const allGlossaryTerms = getGlossaryTerms();
  const relevantTerms = allGlossaryTerms.slice(0, 3);

  // JSON-LD Structured Data - Combined Product + Breadcrumb
  const productJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://indotropicalagriculture.com${locale === "en" ? "" : `/${locale}`}/products/${slug}#product`,
        inLanguage: locale,
        name: product.name,
        description: fullDescription,
        category: product.category,
        keywords: product.keywords.join(", "),
        image: product.image,
        ...(product.lastUpdated && {
          modifiedTime: new Date(product.lastUpdated).toISOString(),
        }),
        brand: {
          "@type": "Brand",
          name: "Indo Tropical Agriculture",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Indo Tropical Agriculture",
          url: "https://indotropicalagriculture.com",
        },
        countryOfOrigin: "ID",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Indo Tropical Agriculture",
            url: "https://indotropicalagriculture.com",
          },
          availableDeliveryMethod: "https://schema.org/ParcelDelivery",
          deliveryLeadTime: {
            "@type": "QuantitativeValue",
            minValue: 7,
            maxValue: 21,
            unitCode: "DAY",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "en" ? "Home" : "Startseite",
            item: `https://indotropicalagriculture.com${locale === "en" ? "" : `/${locale}`}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "en" ? "Products" : "Produkte",
            item: `https://indotropicalagriculture.com${locale === "en" ? "" : `/${locale}`}/products`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
          },
        ],
      },
    ],
  };

  return (
    <main id="main-content" lang={locale} className="min-h-dvh bg-gradient-to-b from-stone-50 via-white to-stone-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
          <Link href={getHomePath()} className="text-stone-500 hover:text-emerald-600 transition-colors">
            {locale === "en" ? "Home" : "Startseite"}
          </Link>
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href={getProductsPath()} className="text-stone-500 hover:text-emerald-600 transition-colors">
            {locale === "en" ? "Products" : "Produkte"}
          </Link>
          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-stone-900 font-medium truncate max-w-[200px]" aria-current="page">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Product Hero */}
      <section
        aria-labelledby="product-title"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Product Image */}
          <div className="relative">
            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-stone-700 text-sm font-semibold shadow-md">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {product.category}
              </span>
            </div>

            {/* Image container */}
            <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-stone-200/50 ${product.bgColor}`}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none" aria-hidden />
            </div>

            {/* Freshness indicator */}
            {product.lastUpdated && (
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" aria-hidden />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" aria-hidden />
                  </span>
                  <span className="text-xs font-medium text-stone-600">
                    {locale === "en" ? "Updated" : "Aktualisiert"}: {new Date(product.lastUpdated).toLocaleDateString(locale === "de" ? "de-DE" : "en-US", {
                      month: "short",
                      day: "numeric"
                    })}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col h-full">
            {/* Title */}
            <header className="mb-4">
              <h1 id="product-title" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
                {product.name}
              </h1>
            </header>

            {/* Description */}
            <p className="text-base text-stone-600 leading-relaxed mb-6">
              {fullDescription}
            </p>

            {/* Specifications */}
            <div className="flex-1 bg-white rounded-2xl border border-stone-200 overflow-hidden">
              <div className="bg-gradient-to-r from-stone-50 to-stone-100 px-4 py-2.5 border-b border-stone-200">
                <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wide flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {t("specifications")}
                </h2>
              </div>
              <dl className="divide-y divide-stone-100" aria-label={`${product.name} specifications`}>
                {specs.map((spec, index) => (
                  <div key={index} className="group flex hover:bg-stone-50 transition-colors">
                    <dt className="px-4 py-2 text-left text-xs font-semibold text-stone-500 uppercase tracking-wide w-1/2">
                      {spec.label}
                    </dt>
                    <dd className="px-4 py-2 text-right text-xs font-semibold text-emerald-700">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 md:p-12 shadow-xl shadow-emerald-200/50 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden />

          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {locale === "en" ? "Interested in this product?" : "An diesem Produkt interessiert?"}
            </h2>
            <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
              {locale === "en"
                ? "Get in touch with us for pricing, availability, and shipping information."
                : "Kontaktieren Sie uns für Preise, Verfügbarkeit und Versandinformationen."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={locale === "en" ? "/#contact" : `/${locale}/#contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t("requestQuote")}
              </Link>
              <Link
                href={getProductsPath()}
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500/30 text-white font-semibold rounded-full border-2 border-white/30 hover:bg-emerald-500/50 hover:border-white/50 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
              >
                {t("viewAllProducts")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More - Glossary Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-stone-900 mb-2">
            {locale === "en" ? "Learn more about Indonesian exports" : "Erfahren Sie mehr über indonesische Exporte"}
          </h3>
          <p className="text-stone-500 text-sm">
            {locale === "en"
              ? "Explore our glossary for detailed information about agricultural products and terms."
              : "Erkunden Sie unser Glossar für detaillierte Informationen zu landwirtschaftlichen Produkten und Begriffen."}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {relevantTerms.map((term) => {
            const termTitle = locale === "en" ? term.title.en : term.title.de;
            return (
              <Link
                key={term.id}
                href={getGlossaryPath(term.slug)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-stone-700 text-sm font-medium rounded-full shadow-sm hover:shadow-md hover:text-emerald-600 border border-stone-200 hover:border-emerald-300 transition-all"
              >
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {termTitle}
              </Link>
            );
          })}
          <Link
            href={locale === "en" ? "/glossary" : `/${locale}/glossary`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-full border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
          >
            {locale === "en" ? "View all terms" : "Alle Begriffe anzeigen"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-stone-500">
              &copy; {new Date().getFullYear()} Indo Tropical Agriculture. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href={getHomePath()} className="text-stone-500 hover:text-emerald-600 transition-colors">
                {locale === "en" ? "Home" : "Startseite"}
              </Link>
              <Link href={getProductsPath()} className="text-stone-500 hover:text-emerald-600 transition-colors">
                {locale === "en" ? "Products" : "Produkte"}
              </Link>
              <Link href={locale === "en" ? "/#contact" : `/${locale}/#contact`} className="text-stone-500 hover:text-emerald-600 transition-colors">
                {locale === "en" ? "Contact" : "Kontakt"}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return <ProductContent slug={slug} />;
}
