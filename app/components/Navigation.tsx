"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { locales, defaultLocale } from "@/i18n/config";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#products", label: t("products") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact"), isButton: true },
  ];

  // Memoized path without locale prefix
  const pathWithoutLocale = useMemo(() => {
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(`/${locale}`.length);
    }
    if (pathname === `/${locale}`) {
      return "/";
    }
    if (pathname.startsWith(`/${locale}`)) {
      return pathname.slice(`/${locale}`.length) || "/";
    }
    return pathname;
  }, [pathname, locale]);

  // Build locale-aware href for IntlLink
  const getLocaleHref = (targetLocale: string) => {
    const prefix = targetLocale === defaultLocale ? "" : `/${targetLocale}`;
    const path = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
    return `${prefix}${path}` || "/";
  };

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-emerald-600">
          {t("brand")}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isButton ? (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 shadow-md hover:scale-105 active:scale-100 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-transform duration-200"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-md transition-colors font-medium"
              >
                {link.label}
              </a>
            )
          )}

          {/* Language Switcher */}
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
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="md:hidden p-2 rounded-lg hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors"
        >
          <svg
            className="w-6 h-6 text-stone-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-b border-stone-200 shadow-lg"
          role="region"
          aria-label={t("mobileNav")}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isButton ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 shadow-md text-center focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-stone-700 hover:text-emerald-600 hover:bg-stone-100 rounded-lg focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-1 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}

            {/* Mobile Language Switcher */}
            <div className="flex justify-center gap-2 pt-2 border-t border-stone-200">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={getLocaleHref(loc)}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    locale === loc
                      ? "bg-emerald-600 text-white"
                      : "text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  {loc === "en" ? "English" : "Deutsch"}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
