# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Indo Tropical Agriculture - A multi-language landing page for an Indonesian agriculture and seafood export company targeting European markets. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

**Business**: Export of spices (cocoa, cloves, ginger, nutmeg, vanilla, black pepper, turmeric), nuts (cashew), and seafood (frozen tuna, canned tuna, precooked tuna products) from Indonesia to Europe.
**Target Market**: European Union (EU)
**Languages**: English (en), German (de)

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

No `typecheck`, `test`, or `format` scripts exist. No testing framework is configured.

## Tech Stack & Architecture

- **Framework**: Next.js 16.2 with App Router
- **i18n**: next-intl ^4.8.1 for multi-language support
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss` (no config file — CSS-first via `@import "tailwindcss"`)
- **TypeScript**: v5 with strict mode enabled
- **Analytics**: Vercel Analytics, Speed Insights, Google Analytics 4 (via `@next/third-parties`)
- **Email**: Resend ^6.9.4 for contact form
- **No UI library, no state management lib, no test framework.**

## Directory Structure

```
app/
├── [locale]/               # Internationalized routes (en, de)
│   ├── layout.tsx           # Locale layout + generateStaticParams for locales
│   ├── page.tsx             # Home page
│   ├── products/
│   │   ├── page.tsx         # Products listing
│   │   └── [slug]/page.tsx  # Product detail pages
│   ├── categories/
│   │   ├── page.tsx         # Categories index
│   │   └── [category]/page.tsx  # Category detail pages
│   ├── glossary/page.tsx    # Glossary/educational content
│   ├── faq/page.tsx         # FAQ page
│   ├── export-to/[country]/page.tsx  # Export destination pages
│   ├── for/[industry]/page.tsx       # Industry-specific pages
│   ├── what-is/[term]/page.tsx       # Educational term pages
│   ├── hs-codes/[code]/page.tsx      # HS code reference pages (dynamic)
│   ├── compare/[slug]/page.tsx       # Product comparison pages
│   └── blog/[slug]/page.tsx          # Blog posts
├── api/
│   └── contact/route.ts    # Contact form email handler (Resend)
├── components/              # Shared components (About, Breadcrumb, Contact,
│   │                        # FAQ, GoogleAnalytics, Hero, Navigation, etc.)
├── hooks/
│   └── useScrollReveal.ts  # Scroll-triggered reveal animations
├── lib/
│   ├── i18n-utils.ts       # getLocalizedPath(path, locale) helper
│   └── products-data.ts    # Product data access layer
├── globals.css             # Global styles + Tailwind v4 import
├── layout.tsx               # Root layout
├── sitemap.ts               # Dynamic sitemap generator
├── robots.ts                # Dynamic robots.txt generator
└── manifest.ts              # PWA manifest generator

middleware.ts                # next-intl locale routing (top-level, NOT in app/)
i18n.ts                      # next-intl getRequestConfig (top-level)
i18n/
└── config.ts                # Locale config: locales, defaultLocale, Locale type

data/
├── products.json             # Product catalog (44 items)
├── glossary.ts              # Glossary terms — TS module with {en, de} content
├── destinations.ts          # Export target countries — TS module with {en, de}
├── industries.ts            # Industry categories — TS module with {en, de}
├── blog-posts.ts            # Blog content — TS module with {en, de}
├── comparisons.ts           # Product comparisons — TS module with {en, de}
└── hs-codes.ts              # HS code reference data — TS module with {en, de}

messages/
├── en.json                  # English translations
└── de.json                  # German translations
```

## Internationalization (i18n)

**Supported locales**: `en` (default), `de`

- **Routing**: All pages under `app/[locale]/` with locale prefix always required (`/en/...`, `/de/...`). English (default) is **unprefixed** for internal links (`/products`); German is prefixed (`/de/products`).
- **Config**: `i18n/config.ts` defines `locales`, `defaultLocale`, and the `Locale` type. The next-intl request config is the top-level `i18n.ts`.
- **Middleware**: Top-level `middleware.ts` (default export named `proxy` per Next 16 convention). Uses `localePrefix: "always"`, `localeDetection: false`. Includes two custom rewrites: `/hs-code-XXXX` → `/hs-codes/XXXX` and `/vs/<slug>` → `/compare/<slug>`.
- **Translations**: JSON files in `messages/` directory. Both files share the same 16 top-level namespace keys: `about, breadcrumbs, categories, common, contact, destination, faq, footer, hero, industry, metadata, navigation, productPage, products, productsPage, visionMission`.

### Translation usage patterns

- **Server components**: `const t = await getTranslations({ locale, namespace: "..." })` from `next-intl/server`. Most-used namespaces: `breadcrumbs` (12 call sites), `categories`, `metadata`, `industry`, `faq`, `destination`.
- **Client components**: `const t = useTranslations("namespace")` from `next-intl` — used in `*Client.tsx` files and `app/components/*.tsx`.

### Gotcha — `t.raw()` throws on missing keys

Dynamic lookups like `t.raw(\`${slug}.name\`)` raise `IntlError(MISSING_MESSAGE)` when the key is absent — they do **not** return undefined. The trailing `|| fallback` written after the call never runs. A missing key crashes the page/build. When adding any user-facing key, add it to **both** `messages/en.json` and `messages/de.json`.

### Locale-link convention

Prefer `getLocalizedPath(path, locale)` from [app/lib/i18n-utils.ts](app/lib/i18n-utils.ts). Much of the codebase still uses inline `locale === "en" ? "/path" : \`/${locale}/path\`` ternaries. Note: the sitemap emits fully-prefixed `/en/...` URLs, which is an inconsistency vs. internal links.

When adding new routes, always place them under `app/[locale]/`.

## Content Data

Product and content data is centralized in the `data/` directory:

- **products.json**: 44 products with specifications, HS codes, keywords, and per-product `descriptionDe` for German. Only this file is JSON; the others are TypeScript modules.
- **glossary.ts, destinations.ts, industries.ts, blog-posts.ts, comparisons.ts, hs-codes.ts**: TypeScript modules exporting typed arrays with `{en, de}` content objects. Each backs a corresponding `[locale]/...` route.

Use these data files rather than hardcoding content in components.

## Working with Product Data

The product data layer lives in [app/lib/products-data.ts](app/lib/products-data.ts). Key exports:

- **`getCategories()`** — derives categories dynamically from product data (`[...new Set(products.map(p => p.category))].sort()`). It is NOT a hardcoded list. Any new `category` value in `data/products.json` appears in listings automatically. Current categories: `Beans`, `Coffee`, `Herbs`, `Nuts`, `Seafood`, `Spices`.
- **`getProductsByCategory(category)`** — exact string match on the `category` field (e.g. `"Seafood"`).
- **`getFeaturedProducts(limit = 6)`** — returns products ordered by `FEATURED_PRODUCT_SLUGS`. This is what the homepage gallery renders. Edit that list to change featured products.
- **`getAllProducts()`**, **`getProductBySlug(slug)`**, **`products`** (raw array export), **`getLocalizedDescription(product, locale)`** (returns `descriptionDe` for German, `shortDescription` otherwise).

## Adding a Product Category

A category is stored as its human name (e.g. `"Seafood"`) on each product in `data/products.json`, but its URL slug (`"seafood"`) is mapped in **several independent files** with no shared source. To add a category, update all of these:

1. **`data/products.json`** — set `"category": "<Name>"` on at least one product (source of truth; discovered automatically by `getCategories()`).
2. **`messages/en.json` and `messages/de.json`** — add a `categories.<slug>` object with `{name, description, metaTitle, metaDescription, metaKeywords[]}` in **both** files. Missing this throws `MISSING_MESSAGE` in dev.
3. **`app/[locale]/categories/[category]/page.tsx`** — add to `SLUG_TO_CATEGORY` (the reverse map is auto-derived). Without this the category page **404s**.
4. **`app/[locale]/categories/CategoriesClient.tsx`** — add to `CATEGORY_COLORS` and `CATEGORY_ICONS` (falls back to generic `other` styling if omitted).
5. **`app/sitemap.ts`** `CATEGORY_TO_SLUG` and **`app/[locale]/for/[industry]/page.tsx`** `categorySlugs` — both have a slugify fallback so links work without an entry, but the explicit map is the intended place.

The slug is always `category.toLowerCase()`; the duplication across files is a known smell.

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX              # Google Analytics 4 Measurement ID
GOOGLE_SITE_VERIFICATION=YOUR_VERIFICATION_CODE  # Search Console verification
RESEND_API_KEY=re_XXXXXXXXXX               # Resend API key for contact form emails
RESEND_TO_EMAIL=exports@yourdomain.com     # Contact form recipient email
RESEND_FROM_EMAIL=onboarding@resend.dev    # Sender email (must use verified Resend domain)
```

## Key Architecture Details

- **Server Components by default**: Only components with `"use client"` directive are client-side (Navigation, `*Client.tsx` files).
- **Static Generation**: All dynamic routes (`products/[slug]`, `categories/[category]`, `for/[industry]`, `what-is/[term]`, `blog/[slug]`, `compare/[slug]`, `export-to/[country]`, `hs-codes/[code]`) use `generateStaticParams()` for SSG. 2 locales × all routes ≈ 199 static pages.
- **Accessibility**: Skip-to-content links, ARIA labels, semantic HTML, `prefers-reduced-motion` support.

## Configuration Notes

- **Path aliases**: `@/*` maps to repo root via tsconfig `paths: { "@/*": ["./*"] }` (no `baseUrl`). Use `@/data/...`, `@/app/lib/...`, `@/i18n/...`.
- **Fonts**: Geist Sans and Geist Mono via `next/font/google`
- **Dark mode**: System preference detection
- **Tailwind v4**: CSS-first config via `@import "tailwindcss"` in `globals.css` + `@tailwindcss/postcss` plugin in `postcss.config.mjs`. No `tailwind.config.js`.

## Key Patterns

- **Server Components by default**: Only add `"use client"` when needed (interactivity, event listeners).
- **CSS custom properties**: `--font-geist-sans`, `--font-geist-mono` variables in globals.css.
- **Smooth scroll navigation**: Applied via `html { scroll-behavior: smooth; }`.
- **Responsive mobile-first**: Tailwind breakpoints (`md:`, `sm:`).
- **Animation utilities**: `.animate-fade-up`, `.animate-fade-in`, `.animate-scale-in` wrapped in `@media (prefers-reduced-motion: no-preference)`.
- **Adding translations**: When adding new content with user-facing text, add translations to **both** `messages/en.json` and `messages/de.json`.
