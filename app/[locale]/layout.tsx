import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../../i18n/config";
import "../globals.css";

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
      canonical: "https://indotropicalagriculture.com",
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
  };
}

// JSON-LD Structured Data for SEO
async function getJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    inLanguage: locale,
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
  if (!locales.includes(locale as any)) {
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
