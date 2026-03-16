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
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
