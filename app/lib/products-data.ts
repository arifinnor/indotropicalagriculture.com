import type { Metadata } from "next";
import rawProductsJson from "@//data/products.json";

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

/**
 * Hand-picked product slugs to show on the landing page (max 6).
 * Edit this list to change which products are featured.
 */
const FEATURED_PRODUCT_SLUGS: string[] = [
  "clove",
  "nutmeg-ab",
  "blackpepper-500-gl",
  "vanilla-bean",
  "dried-slice-turmeric",
  "cashew-nut-w320",
];

// Get featured products for landing page (order follows FEATURED_PRODUCT_SLUGS)
export function getFeaturedProducts(limit = 6): Product[] {
  const slugs = FEATURED_PRODUCT_SLUGS.slice(0, limit);
  const bySlug = new Map(products.map((p) => [p.slug, p]));
  return slugs.map((slug) => bySlug.get(slug)).filter((p): p is Product => p != null);
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
export function getLocalizedDescription(product: Product, locale: string): string {
  if (locale === "de" && product.descriptionDe) {
    return product.descriptionDe;
  }
  return product.shortDescription;
}
