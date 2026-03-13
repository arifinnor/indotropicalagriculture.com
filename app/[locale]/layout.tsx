import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/config";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1917" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const localeMap: Record<string, string> = {
    en: "en_US",
    de: "de_DE",
  };

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),
    authors: [{ name: "Indo Tropical Agriculture" }],
    creator: "Indo Tropical Agriculture",
    publisher: "Indo Tropical Agriculture",
    metadataBase: new URL("https://indotropicalagriculture.com"),
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://indotropicalagriculture.com",
      siteName: "Indo Tropical Agriculture",
      locale: localeMap[locale] || "en_US",
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
      title: t("title"),
      description: t("description"),
      images: ["https://indotropicalagriculture.com/og-image.svg"],
    },
    alternates: {
      canonical: locale === "en" ? "https://indotropicalagriculture.com" : "https://indotropicalagriculture.com/de",
      languages: {
        en: "https://indotropicalagriculture.com",
        de: "https://indotropicalagriculture.com/de",
      },
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
    verification: {
      // Replace with your Google Search Console verification code
      // Get it from: https://search.google.com/search-console → Add Property → Verify ownership
      google: process.env.GOOGLE_SITE_VERIFICATION || "YOUR_GOOGLE_VERIFICATION_CODE",
    },
  };
}

// JSON-LD Structured Data for SEO
async function getJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://indotropicalagriculture.com#organization",
        inLanguage: locale,
        name: "Indo Tropical Agriculture",
        legalName: "Indo Tropical Agriculture",
        description: "Leading Indonesian agriculture exporter. Premium cocoa, cloves, ginger, nutmeg, vanilla, and more.",
        url: "https://indotropicalagriculture.com",
        logo: {
          "@type": "ImageObject",
          url: "https://indotropicalagriculture.com/logo.svg",
          width: 512,
          height: 512,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "ID",
          addressLocality: "Jakarta",
          addressRegion: "DKI Jakarta",
        },
        areaServed: ["EU", "US", "AS", "WW"],
        knowsAbout: [
          "Indonesian agriculture export",
          "Cocoa beans",
          "Cloves",
          "Ginger",
          "Nutmeg",
          "Vanilla",
          "Black pepper",
          "Turmeric",
          "Cashew nuts",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          "@id": "https://indotropicalagriculture.com#contact",
          contactType: "sales",
          email: "exports@indotropicalagriculture.com",
          telephone: "+6281331261210",
          availabilityLanguage: ["English", "German", "Indonesian"],
          areaServed: ["EU", "US", "AS"],
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://indotropicalagriculture.com#website",
        url: "https://indotropicalagriculture.com",
        name: "Indo Tropical Agriculture",
        description: "Indonesian agriculture supplier, trader and exporter. Premium cocoa, cloves, ginger, nutmeg, vanilla, and more.",
        inLanguage: locale,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://indotropicalagriculture.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://indotropicalagriculture.com#business",
        name: "Indo Tropical Agriculture",
        description: "Indonesian agriculture exporter supplying premium products to European and global markets.",
        url: "https://indotropicalagriculture.com",
        telephone: "+6281331261210",
        email: "exports@indotropicalagriculture.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "ID",
          addressLocality: "Jakarta",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        priceRange: "$$",
      },
    ],
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const jsonLd = await getJsonLd(locale);

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:font-medium"
          >
            Skip to main content
          </a>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
