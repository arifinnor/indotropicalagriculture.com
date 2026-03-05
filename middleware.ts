import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  localeDetection: true,
});

export const config = {
  matcher: [
    // Match all paths except api, _next, _vercel, and files with extensions
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
