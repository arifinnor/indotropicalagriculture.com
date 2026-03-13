import { MetadataRoute } from "next";
import { products, getCategories } from "./lib/products-data";
import { locales } from "@/i18n/config";

const SITE_URL = "https://indotropicalagriculture.com";

// Mapping between category names and URL slugs
const CATEGORY_TO_SLUG: Record<string, string> = {
  Spices: "spices",
  Herbs: "herbs",
  Nuts: "nuts",
  Coffee: "coffee",
  Beans: "beans",
  Cocoa: "cocoa",
  Fruits: "fruits",
  Extracts: "extracts",
  Powders: "powders",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/de`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/de/products`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/de/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Category index pages for each locale
  const categoryIndexPages = [
    {
      url: `${SITE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/de/categories`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Individual category pages for each locale
  const categories = getCategories();
  const categoryPages = categories.flatMap((category) => {
    const slug = CATEGORY_TO_SLUG[category] || category.toLowerCase().replace(/\s+/g, "-");
    return [
      {
        url: `${SITE_URL}/categories/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
      {
        url: `${SITE_URL}/de/categories/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
    ];
  });

  // Product pages for each locale
  const productPages = products.flatMap((product) => [
    {
      url: `${SITE_URL}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/de/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  return [...staticPages, ...categoryIndexPages, ...categoryPages, ...productPages];
}
