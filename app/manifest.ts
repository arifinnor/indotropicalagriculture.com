import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Indo Tropical Agriculture - Indonesian Agriculture Exporter",
    short_name: "Indo Tropical",
    description: "Indonesian agriculture supplier, trader and exporter. Premium cloves, ginger, nutmeg, vanilla, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#059669",
    orientation: "portrait",
    categories: ["business", "agriculture", "shopping"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
