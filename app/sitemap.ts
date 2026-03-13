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

// Actual last modified dates based on content updates
const LAST_MOD_DATES = {
  home: new Date("2025-02-01"),
  products: new Date("2025-03-01"),
  categories: new Date("2025-03-10"),
  faq: new Date("2025-03-13"),
  // Default date for pages without specific updates
  default: new Date("2025-02-01"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: SITE_URL,
      lastModified: LAST_MOD_DATES.home,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/de`,
      lastModified: LAST_MOD_DATES.home,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: LAST_MOD_DATES.products,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/de/products`,
      lastModified: LAST_MOD_DATES.products,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: LAST_MOD_DATES.faq,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/de/faq`,
      lastModified: LAST_MOD_DATES.faq,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Category index pages for each locale
  const categoryIndexPages = [
    {
      url: `${SITE_URL}/categories`,
      lastModified: LAST_MOD_DATES.categories,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/de/categories`,
      lastModified: LAST_MOD_DATES.categories,
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
        lastModified: LAST_MOD_DATES.categories,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
      {
        url: `${SITE_URL}/de/categories/${slug}`,
        lastModified: LAST_MOD_DATES.categories,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
    ];
  });

  // Product pages for each locale with image references
  const productPages = products.flatMap((product) => [
    {
      url: `${SITE_URL}/products/${product.slug}`,
      lastModified: LAST_MOD_DATES.products,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        {
          url: `${SITE_URL}${product.image}`,
          title: product.name,
          caption: product.shortDescription,
          license: "https://indotropicalagriculture.com",
        },
      ],
    },
    {
      url: `${SITE_URL}/de/products/${product.slug}`,
      lastModified: LAST_MOD_DATES.products,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        {
          url: `${SITE_URL}${product.image}`,
          title: product.name,
          caption: product.shortDescription,
          license: "https://indotropicalagriculture.com",
        },
      ],
    },
  ]);

  return [...staticPages, ...categoryIndexPages, ...categoryPages, ...productPages];
}
