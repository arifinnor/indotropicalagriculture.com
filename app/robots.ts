import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "*",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://indotropicalagriculture.com/sitemap.xml",
    host: "https://indotropicalagriculture.com",
  };
}
