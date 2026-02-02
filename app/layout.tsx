import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
};

export const metadata: Metadata = {
  title: "Indo Tropical Agriculture | Indonesian Agriculture Exporter",
  description: "Indonesian agriculture supplier, trader and exporter. Premium planting media, cocoa, cloves, ginger, and more. Supplying across the world.",
  keywords: [
    "indonesian agriculture export",
    "cocoa beans indonesia",
    "cloves export",
    "planting media",
    "ginger export indonesia",
    "agriculture supplier indonesia",
    "tropical agriculture",
    "coconut coir exporter",
  ],
  authors: [{ name: "Indo Tropical Agriculture" }],
  creator: "Indo Tropical Agriculture",
  publisher: "Indo Tropical Agriculture",
  metadataBase: new URL("https://indotropicalagriculture.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Indo Tropical Agriculture | Indonesian Agriculture Exporter",
    description: "Indonesian agriculture supplier, trader and exporter. Premium planting media, cocoa, cloves, ginger, and more.",
    url: "https://indotropicalagriculture.com",
    siteName: "Indo Tropical Agriculture",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://indotropicalagriculture.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Indo Tropical Agriculture - Indonesian Agriculture Exporter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indo Tropical Agriculture | Indonesian Agriculture Exporter",
    description: "Indonesian agriculture supplier, trader and exporter. Supplying across the world.",
    images: ["https://indotropicalagriculture.com/og-image.svg"],
  },
  alternates: {
    canonical: "https://indotropicalagriculture.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Indo Tropical Agriculture",
  description: "Leading Indonesian agriculture exporter. Premium planting media, cocoa, cloves, ginger, and more.",
  url: "https://indotropicalagriculture.com",
  logo: "https://indotropicalagriculture.com/logo.svg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Indonesian agriculture export",
    "Cocoa beans",
    "Cloves",
    "Ginger",
    "Planting media",
    "Coconut coir",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "exports@indotropicalagriculture.com",
    telephone: "+6281331261210",
    availabilityLanguage: ["English", "German", "Indonesian"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" color-scheme="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
