# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Indo Tropical Agriculture - A multi-language landing page for an Indonesian agriculture export company targeting European markets. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

**Business**: Export of cocoa, cloves, ginger, nutmeg, vanilla, black pepper, turmeric, cashew nuts, and more from Indonesia to Europe.
**Target Market**: European Union (EU)
**Languages**: English (en), German (de)

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack & Architecture

- **Framework**: Next.js 16 with App Router
- **i18n**: next-intl for multi-language support
- **React**: v19.2.3
- **Styling**: Tailwind CSS v4 with PostCSS plugin
- **TypeScript**: v5 with strict mode enabled
- **Analytics**: Vercel Analytics, Speed Insights, Google Analytics 4

## Directory Structure

```
app/
├── [locale]/               # Internationalized routes (en, de)
│   ├── layout.tsx         # Locale-specific layout
│   ├── page.tsx           # Home page
│   ├── products/
│   │   ├── page.tsx       # Products listing
│   │   └── [slug]/page.tsx # Product detail pages
│   ├── categories/[category]/page.tsx  # Category pages
│   ├── glossary/page.tsx  # Glossary/educational content
│   ├── faq/page.tsx       # FAQ page
│   ├── export-to/[country]/page.tsx    # Export destination pages
│   ├── for/[industry]/page.tsx         # Industry-specific pages
│   └── what-is/[term]/page.tsx         # Educational term pages
├── components/            # Shared components
│   ├── Navigation.tsx     # "use client" - mobile menu, locale switcher
│   ├── Hero.tsx, Products.tsx, About.tsx, etc.
│   └── GoogleAnalytics.tsx
├── lib/
│   ├── i18n-utils.ts      # i18n utilities
│   └── products-data.ts   # Product data helpers
├── globals.css            # Global styles
├── layout.tsx             # Root layout
├── middleware.ts          # next-intl locale routing
├── sitemap.ts             # Dynamic sitemap generator
├── robots.ts              # Dynamic robots.txt generator
└── manifest.ts            # PWA manifest generator

data/
├── products.json          # Product catalog (70k+ items)
├── glossary.ts            # Glossary/education content
├── destinations.ts        # Export target countries
└── industries.ts          # Industry categories

messages/
├── en.json                # English translations
└── de.json                # German translations

i18n/
└── config.ts              # Locale configuration (en, de)
```

## Internationalization (i18n)

**Supported locales**: `en` (default), `de`

- **Routing**: All pages under `app/[locale]/` with locale prefix always required (`/en/...`, `/de/...`)
- **Middleware**: `middleware.ts` handles locale detection and routing
- **Translations**: JSON files in `messages/` directory
- **Locale detection**: Disabled in middleware (explicit locale prefix required)
- **Type**: `Locale` type exported from `i18n/config.ts`

When adding new routes, always place them under `app/[locale]/`.

## Content Data

Product and content data is centralized in the `data/` directory:
- **products.json**: Full product catalog with specifications, HS codes, keywords
- **glossary.ts**: Educational content for agricultural terms
- **destinations.ts**: Export target country data
- **industries.ts**: Industry categorization data

Use these data files rather than hardcoding content in components.

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX              # Google Analytics 4 Measurement ID
GOOGLE_SITE_VERIFICATION=YOUR_VERIFICATION_CODE  # Search Console verification
```

## Key Architecture Details

- **Server Components by default**: Only components with `"use client"` directive are client-side (Navigation, various `*Client.tsx` files)
- **Static Generation**: Product pages use `generateStaticParams()` for SSG
- **Accessibility**: Skip-to-content links, ARIA labels, semantic HTML, `prefers-reduced-motion` support

## Configuration Notes

- **Path aliases**: `@/*` maps to project root (defined in tsconfig.json)
- **Fonts**: Geist Sans and Geist Mono via `next/font/google`
- **Dark mode**: System preference detection
- **Tailwind v4**: `@import "tailwindcss"` (no config file)
- **Color scheme**: Agriculture-themed (greens, earth tones). `emerald-600` (primary), `stone-50` through `stone-900` (neutral/backgrounds)

## Key Patterns

- **Server Components by default**: Only add `"use client"` when needed (interactivity, event listeners)
- **CSS custom properties**: `--font-geist-sans`, `--font-geist-mono` variables in globals.css
- **Smooth scroll navigation**: Applied via `html { scroll-behavior: smooth; }`
- **Responsive mobile-first**: Tailwind breakpoints (`md:`, `sm:`)
- **Animation utilities**: `.animate-fade-up`, `.animate-fade-in`, `.animate-scale-in` wrapped in `@media (prefers-reduced-motion: no-preference)`
- **Adding translations**: When adding new content with user-facing text, add translations to both `messages/en.json` and `messages/de.json`
