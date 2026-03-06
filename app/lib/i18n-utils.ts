import { defaultLocale, type Locale } from "../i18n/config";

/**
 * Build a locale-aware path. For the default locale, no prefix is added.
 * @param path - The path without locale prefix (e.g., "/products", "/")
 * @param locale - The target locale
 * @returns The full path with locale prefix if needed
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return path;
  }
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
