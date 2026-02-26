import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  getProductBySlug,
  generateStaticParams as generateProductParams,
  generateProductMetadata,
  type Product,
} from "../../lib/products-data";

export async function generateStaticParams() {
  return generateProductParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return generateProductMetadata(product);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

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
    <main id="main-content" lang="en" className="min-h-dvh bg-stone-100">
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
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
          >
            Indo Tropical Agriculture
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="text-sm text-stone-600 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
            >
              All Products
            </Link>
            <Link
              href="/"
              className="text-sm text-stone-600 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
            >
              <span aria-hidden="true">←</span> <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Product Content */}
      <section
        aria-labelledby="product-title"
        className="min-h-[calc(100dvh-80px)] mt-20 flex flex-col items-center justify-center px-6 py-6 bg-stone-50 gap-6"
      >
        <div className="max-w-5xl w-full flex-1 flex items-center">
          <article
            aria-labelledby="product-title"
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
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
                <h1
                  id="product-title"
                  className="text-2xl md:text-3xl font-bold text-stone-900 mb-4"
                >
                  {product.name}
                </h1>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-sm font-bold text-stone-900 mb-2">
                    Description
                  </h2>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Specifications */}
                <div>
                  <h2 className="text-sm font-bold text-stone-900 mb-3">
                    Specifications
                  </h2>
                  <dl
                    className="bg-stone-50 rounded-xl divide-y divide-stone-200"
                    aria-label={`${product.name} specifications`}
                  >
                    {product.specifications.map((spec, index) => (
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
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 hover:scale-105 active:scale-100 transition-transform duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Request a Quote
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-2.5 bg-white text-stone-900 font-semibold rounded-full border border-stone-200 hover:scale-105 active:scale-100 transition-transform duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            View All Products
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
