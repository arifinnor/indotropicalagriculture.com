import type { Metadata } from "next";
import rawProductsJson from "@//data/products.json";
import { type Locale } from "../i18n/config";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: string;
  unit: string;
  hsCode: string | null;
  description: string;
  descriptionDe: string | null;
  shortDescription: string;
  fullDescription: string;
  keywords: string[];
  specifications: { label: string; value: string }[];
  image: string;
  bgColor: string;
  category: string;
}

// Products data directly from JSON
const products: Product[] = rawProductsJson as Product[];

// Get featured products (first 6 for landing page)
export function getFeaturedProducts(limit = 6): Product[] {
  return products.slice(0, limit);
}

// Get all products
export function getAllProducts(): Product[] {
  return products;
}

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

// Get all categories
export function getCategories(): string[] {
  return [...new Set(products.map(p => p.category))].sort();
}

// Generate static params for SSG
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

// Generate metadata for a product
export function generateProductMetadata(product: Product): Metadata {
  const url = `https://indotropicalagriculture.com/products/${product.slug}`;

  return {
    title: `${product.name} | Indo Tropical Agriculture - Indonesian Exporter`,
    description: product.fullDescription,
    keywords: product.keywords,
    authors: [{ name: "Indo Tropical Agriculture" }],
    creator: "Indo Tropical Agriculture",
    publisher: "Indo Tropical Agriculture",
    metadataBase: new URL("https://indotropicalagriculture.com"),
    alternates: { canonical: url },
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
    robots: { index: true, follow: true },
  };
}

// Export all products for direct access
export { products };

/**
 * Get the localized description for a product.
 * German descriptions are available for some products.
 */
export function getLocalizedDescription(product: Product, locale: Locale): string {
  if (locale === "de" && product.descriptionDe) {
    return product.descriptionDe;
  }
  return product.shortDescription;
}
