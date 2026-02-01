import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const products = {
  cloves: {
    name: "Cloves",
    description: "Cloves come from the flower buds of an evergreen tree that is native to the North Moluccas Islands in Indonesia. Strong of aroma and hot and pungent in taste, cloves are used to flavour many foods, particularly meats and bakery products.",
    fullDescription: "Premium Indonesian cloves exported directly from spice islands. High-quality whole cloves and powder suitable for food, pharmaceutical, and essential oil industries. Our cloves are carefully selected, dried, and processed to preserve their intense aroma and pungent flavor.",
    keywords: ["Indonesian cloves", "clove export", "whole cloves", "clove powder", "spice islands", "North Moluccas cloves", "dried cloves"],
    specifications: [
      { label: "Stems", value: "2.5%" },
      { label: "Inferior Cloves", value: "2.25%" },
      { label: "Admixture", value: "≤ 1%" },
      { label: "Moisture", value: "6% - 12%" },
    ],
    image: "/products/cloves.svg",
    bgColor: "bg-red-500",
  },
  cocoa: {
    name: "Cocoa Beans",
    description: "High-quality Indonesian cocoa beans, fermented and dried to perfection. Our cocoa beans are sourced from prime growing regions in Sulawesi and Sumatra, ideal for chocolate manufacturers seeking premium raw materials.",
    fullDescription: "Premium fermented Indonesian cocoa beans sourced from Sulawesi and Sumatra. Our beans meet international quality standards with optimal fermentation and moisture content. Perfect for chocolate manufacturers, cocoa processors, and bulk buyers seeking reliable supply from Indonesia.",
    keywords: ["Indonesian cocoa beans", "cocoa export Indonesia", "fermented cocoa", "Sulawesi cocoa", "Sumatra cocoa", "bulk cocoa beans", "chocolate ingredients"],
    specifications: [
      { label: "Bean Count", value: "90-110 beans/100g" },
      { label: "Moisture", value: "6% - 7%" },
      { label: "Foreign Matter", value: "≤ 0.5%" },
      { label: "Mouldy Beans", value: "≤ 3%" },
    ],
    image: "/products/cocoa.svg",
    bgColor: "bg-amber-500",
  },
  ginger: {
    name: "Fresh Ginger",
    description: "Ginger, (Zingiber officinale), herbaceous perennial plant of the family Zingiberaceae, probably native to southeastern Asia, or its aromatic, pungent rhizome (underground stem) used as a spice, flavouring, food, and medicine. Ginger has anti-inflammatory and anti-oxidative properties which can control the aging process.",
    fullDescription: "Premium Grade A fresh ginger from East Java, Indonesia. Our ginger offers high oil content and characteristic pungent flavor, ideal for culinary, pharmaceutical, and beverage industries. Sourced from farms with minimum 8 months age for optimal potency and aroma.",
    keywords: ["Indonesian ginger", "fresh ginger export", "East Java ginger", "Zingiber officinale", "dried ginger", "ginger root", "Asian spices"],
    specifications: [
      { label: "Grade", value: "Grade A" },
      { label: "Origin", value: "East Java, Indonesia" },
      { label: "Size", value: "Mixed" },
      { label: "Age", value: "Min. 8 months" },
      { label: "Container Capacity", value: "8MT 20FT FCL" },
    ],
    image: "/products/ginger.svg",
    bgColor: "bg-yellow-500",
  },
  "planting-media": {
    name: "Planting Media",
    description: "Premium coconut coir, peat moss alternatives, and organic growing substrates suitable for horticulture and agriculture. Our planting media is eco-friendly, renewable, and provides excellent water retention while maintaining proper aeration for healthy root development.",
    fullDescription: "Sustainable coconut coir planting media from Indonesia. Our eco-friendly growing substrates offer excellent water retention, optimal aeration, and pH balance for horticulture and agriculture. Perfect alternative to peat moss for greenhouse, nursery, and hydroponic applications.",
    keywords: ["coconut coir", "planting media", "growing substrate", "peat moss alternative", "cocopeat", "horticulture media", "Indonesian coir"],
    specifications: [
      { label: "EC", value: "0.5 - 0.8 mS/cm" },
      { label: "pH", value: "5.5 - 6.5" },
      { label: "Moisture", value: "50% - 60%" },
      { label: "Impurities", value: "≤ 5%" },
    ],
    image: "/products/planting-media.svg",
    bgColor: "bg-emerald-500",
  },
};

type ProductSlug = keyof typeof products;

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug as ProductSlug];
  if (!product) return { title: "Product Not Found" };

  const url = `https://indotropicalagriculture.com/products/${slug}`;

  return {
    title: `${product.name} | Indo Tropical Agriculture - Indonesian Exporter`,
    description: product.fullDescription,
    keywords: product.keywords,
    authors: [{ name: "Indo Tropical Agriculture" }],
    creator: "Indo Tropical Agriculture",
    publisher: "Indo Tropical Agriculture",
    metadataBase: new URL("https://indotropicalagriculture.com"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${product.name} | Indo Tropical Agriculture`,
      description: product.fullDescription,
      url,
      siteName: "Indo Tropical Agriculture",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://indotropicalagriculture.com/og-image.svg",
          width: 1200,
          height: 630,
          alt: `${product.name} - Indo Tropical Agriculture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Indo Tropical Agriculture`,
      description: product.fullDescription,
      images: ["https://indotropicalagriculture.com/og-image.svg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug as ProductSlug];

  if (!product) {
    notFound();
  }

  // JSON-LD Structured Data for Product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.fullDescription,
    keywords: product.keywords.join(", "),
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Indo Tropical Agriculture",
        url: "https://indotropicalagriculture.com",
      },
    },
  };

  return (
    <main id="main-content" lang="en" className="min-h-dvh bg-stone-50">
      {/* Skip Navigation Link for Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded">
            Indo Tropical Agriculture
          </Link>
          <Link
            href="/#products"
            className="text-sm text-stone-600 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
          >
            <span aria-hidden="true">←</span> <span>Back to Products</span>
          </Link>
        </div>
      </nav>

      {/* Product Content */}
      <section aria-labelledby="product-title" className="min-h-[calc(100dvh-80px)] mt-20 flex flex-col items-center justify-center px-6 py-6 bg-stone-50 gap-6">
        <div className="max-w-5xl w-full flex-1 flex items-center">
          <article aria-labelledby="product-title" className="bg-white rounded-3xl shadow-lg overflow-hidden w-full">
            <div className="flex md:grid md:grid-cols-2 flex-col md:flex-row">
              {/* Left: Product Image */}
              <div className={`${product.bgColor} relative overflow-hidden flex-1 min-h-56 sm:min-h-64 md:min-h-0`}>
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

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold text-stone-900 mb-2">Description</h2>
                  <p className="text-stone-600 leading-relaxed text-sm line-clamp-4">{product.description}</p>
                </div>

                {/* Specifications */}
                <div>
                  <h2 className="text-sm font-bold text-stone-900 mb-3">Specifications</h2>
                  <dl className="bg-stone-50 rounded-xl divide-y divide-stone-200" aria-label={`${product.name} specifications`}>
                    {product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-3 py-2 last:rounded-b-xl"
                      >
                        <dt id={`spec-label-${index}`} className="text-stone-700 text-sm font-medium">{spec.label}</dt>
                        <dd aria-labelledby={`spec-label-${index}`} className="text-emerald-700 text-sm font-semibold">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 justify-center pb-4" role="group" aria-label="Product actions">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 hover:scale-105 active:scale-100 transition-transform duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Request a Quote
            <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center px-6 py-2.5 bg-white text-stone-900 font-semibold rounded-full border border-stone-200 hover:scale-105 active:scale-100 transition-transform duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            View All Products
          </Link>
        </div>

        {/* Footer */}
        <footer className="w-full text-center text-xs text-stone-400">
          <p>&copy; {new Date().getFullYear()} Indo Tropical Agriculture. All rights reserved.</p>
        </footer>
      </section>
    </main>
  );
}
