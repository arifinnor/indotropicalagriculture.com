import { defaultLocale } from "@/i18n/config";

/**
 * Build a locale-aware path. For the default locale, no prefix is added.
 * @param path - The path without locale prefix (e.g., "/products", "/")
 * @param locale - The current locale (e.g. from useLocale())
 * @returns The full path with locale prefix if needed
 */
export function getLocalizedPath(path: string, locale: string): string {
  if (locale === defaultLocale) {
    return path;
  }
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
