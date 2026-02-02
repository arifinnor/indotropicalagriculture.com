# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Indo Tropical Agriculture - A landing page for an Indonesian agriculture export company targeting European markets. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

**Business**: Export of planting media, cocoa, cloves, ginger, and more from Indonesia to Europe.
**Target Market**: European Union (EU)

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack & Architecture

- **Framework**: Next.js 16 with App Router
- **React**: v19.2.3
- **Styling**: Tailwind CSS v4 with PostCSS plugin
- **TypeScript**: v5 with strict mode enabled
- **Linting**: ESLint v9 with eslint-config-next

## Directory Structure

```
app/
├── layout.tsx       # Root layout with SEO metadata, JSON-LD structured data
├── page.tsx         # Landing page with all sections
├── globals.css      # Global styles with animation utilities, reduced motion support
└── components/
    ├── Navigation.tsx   # Client component: mobile hamburger menu, scroll behaviors
    ├── Hero.tsx         # Hero section with CTAs
    ├── Products.tsx     # Product showcase (planting media, cocoa, cloves, ginger)
    ├── VisionMission.tsx # Company values and mission
    ├── About.tsx        # Company about section with values
    └── Contact.tsx      # Contact form and info
└── products/[slug]/page.tsx  # Dynamic product detail pages with SSG

public/
├── sitemap.xml      # SEO sitemap
├── robots.txt       # Search engine directives
└── favicon.ico      # App icon
```

## Key Architecture Details

- **Product Pages**: `app/products/[slug]/page.tsx` defines products inline and uses `generateStaticParams()` for static generation. Each product has name, description, specifications, keywords, and SEO metadata.
- **Client Components**: Only `Navigation.tsx` uses `"use client"` for mobile menu state and event listeners.
- **Accessibility**: Skip-to-content links, proper ARIA labels, semantic HTML, and `prefers-reduced-motion` media query support.

## SEO Implementation

The site includes comprehensive SEO optimizations:
- **Metadata**: Title, description, keywords, OpenGraph, Twitter cards
- **Structured Data**: JSON-LD Organization schema
- **SEO Files**: sitemap.xml, robots.txt
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
- **Keywords**: Indonesian agriculture export, cocoa beans, cloves, ginger, planting media

## Configuration Notes

- **Path aliases**: `@/*` maps to project root (defined in tsconfig.json)
- **Fonts**: Geist Sans and Geist Mono via `next/font/google`
- **Dark mode**: System preference detection
- **Tailwind v4**: `@import "tailwindcss"` (no config file)
- **Color scheme**: Agriculture-themed (greens, earth tones). Tailwind colors: `emerald-600` (primary), `stone-50` through `stone-900` (neutral/backgrounds)

## Key Patterns

- **Server Components by default**: Only `Navigation.tsx` is a client component
- **CSS custom properties**: `--font-geist-sans`, `--font-geist-mono` variables in globals.css
- **Smooth scroll navigation**: Applied via `html { scroll-behavior: smooth; }`
- **Responsive mobile-first**: Tailwind breakpoints (`md:`, `sm:`)
- **Animation utilities**: `.animate-fade-up`, `.animate-fade-in`, `.animate-scale-in` wrapped in `@media (prefers-reduced-motion: no-preference)`
