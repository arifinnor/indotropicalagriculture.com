import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { getProductBySlug, products } from "../../../lib/products-data";

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

  // Use German description if locale is de and it's available
  const description = locale === "de" && product.descriptionDe
    ? product.descriptionDe
    : product.description;

  const fullDescription = product.fullDescription;
  const specs = product.specifications;

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;
  const getProductsPath = () => locale === "en" ? "/products" : `/${locale}/products`;

  // JSON-LD Structured Data for Product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    inLanguage: locale,
    name: product.name,
    description: fullDescription,
    offers: {
      "@type": "AggregateOffer",
      price: product.price,
      priceCurrency: product.currency,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Indo Tropical Agriculture",
        url: "https://indotropicalagriculture.com",
      },
    },
  };

  return (
    <main id="main-content" lang={locale} className="min-h-dvh bg-stone-50">
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
          <Link href={getHomePath()} className="text-xl font-bold text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded">
            Indo Tropical Agriculture
          </Link>
          <Link
            href={getProductsPath()}
            className="text-sm text-stone-600 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
          >
            <span aria-hidden="true">←</span> <span>{t("backToProducts")}</span>
          </Link>
        </div>
      </nav>

      {/* Product Content */}
      <section
        aria-labelledby="product-title"
        className="min-h-[calc(100dvh-80px)] mt-20 flex flex-col items-center justify-center px-6 py-6 bg-stone-100 gap-6"
      >
        <div className="max-w-5xl w-full flex-1 flex items-center">
          <article
            aria-labelledby="product-title"
            lang={locale}
            className="bg-white rounded-3xl shadow-lg overflow-hidden w-full"
          >
            <div className="flex md:grid md:grid-cols-2 flex-col md:flex-row">
              {/* Left: Product Image */}
              <div
                className={`${product.bgColor} relative overflow-hidden flex-1 min-h-56 sm:min-h-64 md:min-h-0`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right: Product Info */}
              <div className="p-6 md:p-10 flex flex-col justify-center flex-1 min-h-56 sm:min-h-64 md:min-h-0">
                <h1 id="product-title" className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">{product.name}</h1>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.category === "Spices"
                      ? "bg-amber-100 text-amber-800"
                      : product.category === "Cocoa"
                      ? "bg-amber-100 text-amber-800"
                      : product.category === "Coffee"
                      ? "bg-stone-200 text-stone-800"
                      : product.category === "Nuts"
                      ? "bg-orange-100 text-orange-800"
                      : product.category === "Beans"
                      ? "bg-green-100 text-green-800"
                      : product.category === "Fruits"
                      ? "bg-yellow-100 text-yellow-800"
                      : product.category === "Herbs"
                      ? "bg-emerald-100 text-emerald-800"
                      : product.category === "Extracts"
                      ? "bg-red-100 text-red-800"
                      : product.category === "Powders"
                      ? "bg-stone-200 text-stone-800"
                      : "bg-stone-100 text-stone-800"
                  }`}>
                    {product.category}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold text-stone-900 mb-2">{t("description")}</h2>
                  <p className="text-stone-600 leading-relaxed text-sm line-clamp-4">{description}</p>
                </div>

                {/* Specifications */}
                <div>
                  <h2 className="text-sm font-bold text-stone-900 mb-3">{t("specifications")}</h2>
                  <dl className="bg-stone-50 rounded-xl divide-y divide-stone-200" aria-label={`${product.name} specifications`}>
                    {specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-3 py-2 last:rounded-b-xl"
                      >
                        <dt
                          id={`spec-label-${index}`}
                          className="text-stone-700 text-sm font-medium"
                        >
                          {spec.label}
                        </dt>
                        <dd
                          aria-labelledby={`spec-label-${index}`}
                          className="text-emerald-700 text-sm font-semibold"
                        >
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div
          className="flex flex-wrap gap-3 justify-center pb-4"
          role="group"
          aria-label="Product actions"
        >
          <Link
            href={locale === "en" ? "/#contact" : `/${locale}/#contact`}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 hover:scale-105 active:scale-100 transition-transform duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            {t("requestQuote")}
            <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={getProductsPath()}
            className="inline-flex items-center px-6 py-2.5 bg-white text-stone-900 font-semibold rounded-full border border-stone-200 hover:scale-105 active:scale-100 transition-transform duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            {t("viewAllProducts")}
          </Link>
        </div>

        {/* Footer */}
        <footer className="w-full text-center text-xs text-stone-400">
          <p>
            &copy; {new Date().getFullYear()} Indo Tropical Agriculture. All rights
            reserved.
          </p>
        </footer>
      </section>
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
