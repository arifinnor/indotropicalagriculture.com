import { getAllProducts, getCategories } from "../lib/products-data";
import type { Metadata } from "next";
import Link from "next/link";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Indo Tropical Agriculture - Indonesian Exporter",
  description:
    "Explore our complete catalog of premium Indonesian agricultural products including spices, cocoa, coffee, nuts, and more. Direct export from Indonesia to global markets.",
  keywords: [
    "Indonesian products",
    "agriculture export",
    "spice export",
    "cocoa beans",
    "coffee beans",
    "Indonesian spices",
    "wholesale",
  ],
  openGraph: {
    title: "Products | Indo Tropical Agriculture",
    description: "Explore our complete catalog of premium Indonesian agricultural products.",
    url: "https://indotropicalagriculture.com/products",
    siteName: "Indo Tropical Agriculture",
    locale: "en_US",
    type: "website",
  },
};

// JSON-LD Structured Data for Product Catalog
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Indo Tropical Agriculture Product Catalog",
  description:
    "Complete catalog of Indonesian agricultural products available for export",
  publisher: {
    "@type": "Organization",
    name: "Indo Tropical Agriculture",
    url: "https://indotropicalagriculture.com",
  },
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const products = getAllProducts();
  const categories = getCategories();

  return (
    <main id="main-content" className="min-h-dvh bg-stone-50">
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
          <Link
            href="/"
            className="text-sm text-stone-600 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
          >
            <span aria-hidden="true">←</span> <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 text-balance">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto text-pretty">
            Premium Indonesian agricultural products sourced directly from farmers
            and processed to meet international quality standards.
          </p>
        </div>
      </section>

      <ProductsClient products={products} categories={categories} />

      {/* CTA */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-emerald-100 mb-6 text-lg">
            We offer many more products beyond our catalog. Contact us to discuss your
            specific requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
