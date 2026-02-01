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
├── globals.css      # Global styles with agriculture-themed colors
└── components/
    ├── Hero.tsx     # Hero section with CTAs
    ├── Products.tsx # Product showcase (planting media, cocoa, cloves, ginger)
    ├── About.tsx    # Company about section with values
    └── Contact.tsx  # Contact form and info

public/
├── sitemap.xml      # SEO sitemap
├── robots.txt       # Search engine directives
└── favicon.ico      # App icon
```

## SEO Implementation

The site includes comprehensive SEO optimizations:
- **Metadata**: Title, description, keywords, OpenGraph, Twitter cards
- **Structured Data**: JSON-LD Organization schema
- **SEO Files**: sitemap.xml, robots.txt
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
- **Keywords**: Indonesian agriculture export, cocoa beans, cloves, ginger, planting media

## Configuration Notes

- **Path aliases**: `@/*` maps to project root
- **Fonts**: Geist Sans and Geist Mono via `next/font/google`
- **Dark mode**: System preference detection
- **Tailwind v4**: `@import "tailwindcss"` (no config file)
- **Color scheme**: Agriculture-themed (greens, earth tones)

## Key Patterns

- React Server Components by default
- CSS custom properties: `--primary`, `--earth`, `--background`, `--foreground`
- Smooth scroll navigation
- Responsive mobile-first design
