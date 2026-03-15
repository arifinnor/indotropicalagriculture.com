import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Rewrite /hs-code-0904 to /hs-codes/0904
  // Matches: /hs-code-XXXX or /de/hs-code-XXXX
  const hsCodeMatch = url.pathname.match(/^\/([a-z]{2}\/)?hs-code-(.+)$/);

  if (hsCodeMatch) {
    const [, locale, code] = hsCodeMatch;
    const newLocale = locale || `${defaultLocale}/`;
    url.pathname = `/${newLocale}hs-codes/${code}`;
    return NextResponse.rewrite(url);
  }

  // Rewrite /vs/white-pepper-vs-black-pepper to /compare/white-pepper-vs-black-pepper
  // Matches: /vs/XXXX or /de/vs/XXXX
  const comparisonMatch = url.pathname.match(/^\/([a-z]{2}\/)?vs\/(.+)$/);

  if (comparisonMatch) {
    const [, locale, slug] = comparisonMatch;
    const newLocale = locale || `${defaultLocale}/`;
    url.pathname = `/${newLocale}compare/${slug}`;
    return NextResponse.rewrite(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except api, _next, _vercel, and files with extensions
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
