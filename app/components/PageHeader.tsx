"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { locales, defaultLocale } from "@/i18n/config";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  backHref?: string;
  backLabel?: string;
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
  showLanguageSwitcher?: boolean;
}

export default function PageHeader({
  backHref,
  backLabel,
  breadcrumbs,
  title,
  showLanguageSwitcher = true,
}: PageHeaderProps) {
  const locale = useLocale();
  const pathname = usePathname();

  // Build locale-aware href for language switcher
  const getLocaleHref = (targetLocale: string) => {
    const pathWithoutLocale = pathname.startsWith(`/${locale}/`)
      ? pathname.slice(`/${locale}`.length)
      : pathname === `/${locale}`
        ? "/"
        : pathname;

    const prefix = targetLocale === defaultLocale ? "" : `/${targetLocale}`;
    const path = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
    return `${prefix}${path}` || "/";
  };

  const getHomePath = () => locale === "en" ? "/" : `/${locale}`;

  return (
    <>
      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href={getHomePath()}
            className="text-xl font-bold text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
          >
            Indo Tropical Agriculture
          </Link>

          <div className="flex items-center gap-4">
            {/* Back button */}
            {backHref && (
              <Link
                href={backHref}
                className="text-sm text-stone-600 hover:text-emerald-600 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {backLabel || (locale === "en" ? "Back" : "Zurück")}
              </Link>
            )}

            {/* Language Switcher */}
            {showLanguageSwitcher && (
              <div className="flex items-center gap-1 border border-stone-200 rounded-full p-1">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={getLocaleHref(loc)}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                      locale === loc
                        ? "bg-emerald-600 text-white"
                        : "text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    {loc.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-stone-500 hover:text-emerald-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-stone-900 font-medium truncate max-w-[200px]" aria-current="page">
                    {item.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </nav>

          {/* Optional Title */}
          {title && (
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mt-4">{title}</h1>
          )}
        </div>
      )}
    </>
  );
}
