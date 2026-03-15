# SEO Roadmap - Indo Tropical Agriculture

> Last updated: 2026-03-15
> Current indexed pages: ~160 (40 products × 2 locales + 10 category pages × 2 locales + 2 FAQ pages + 16 market pages + 12 industry pages + 14 glossary pages + catalog pages + homepages)

---

## 📊 Progress Summary

| Phase | Status | Progress | Tasks Completed/Total |
|-------|--------|----------|----------------------|
| Phase 1.1: Category Pages | ✅ **Completed** | 100% | 8/8 |
| Phase 1.2: FAQ Schema | ✅ **Completed** | 100% | 4/4 |
| Phase 1.3: Technical SEO Fixes | ✅ **Completed** | 100% | 6/6 |
| Phase 2.1: Market Pages | ✅ **Completed** | 100% | 16/16 |
| Phase 2.2: Industry Pages | ✅ **Completed** | 100% | 12/12 |
| Phase 2.3: HS Code Landing Pages | ⏳ **Not Started** | 0% | 0/20 |
| Phase 3.1: Comparison Pages | ⏳ Not Started | 0% | 0/6 |
| Phase 3.2: Glossary/Educational | ✅ **Completed** | 100% | 12/12 |
| Phase 3.3: Blog/Resources | ⏳ Not Started | 0% | 0/4 |
| **Overall** | 🟡 **In Progress** | **54%** | **58/108** |

### Pages Added So Far
- ✅ **10 Category Pages** (5 categories × 2 locales)
- ✅ **2 FAQ Pages** (`/faq`, `/de/faq`) - complete with JSON-LD schema and content
- ✅ **16 Destination Market Pages** (`/export-to/*`, `/de/export-to/*`) - complete
- ✅ **12 Industry Pages** (`/for/*`, `/de/for/*`) - complete
- ✅ **14 Glossary Pages** (`/glossary`, `/what-is/*`, `/de/` equivalents) - complete with locale fix
- ⏳ **HS Code Landing Pages** - Not started

### Next Immediate Task
- 🔴 **Phase 2.3: HS Code Landing Pages** - Create HS code reference pages for B2B buyers
  - Data file with HS codes, product mappings, duties, regulations
  - Page template with code explanations, product listings, import info
  - Target: ~10 codes × 2 locales = +20 pages

---

## Phase 1: Quick Wins (Immediate) - ✅ **Completed** (3/3 phases complete)

### 1.1 Category Pages ✅ Completed

Create dedicated category pages for better internal linking and SEO targeting.

- [x] Create `app/[locale]/categories/page.tsx` - Category index
- [x] Create `app/[locale]/categories/[category]/page.tsx` - Individual category pages
- [x] Add category-specific metadata (title, description, keywords)
- [x] Add category descriptions (EN + DE)
- [x] Add JSON-LD `CollectionPage` schema for each category
- [x] Add to sitemap.ts
- [x] Update navigation to link to categories
- [x] Add breadcrumbs with structured data

**Pages created**: 5 categories × 2 locales = 10 pages
- `/categories/spices`, `/categories/herbs`, `/categories/nuts`, `/categories/coffee`, `/categories/beans`
- `/de/categories/spices`, `/de/categories/herbs`, etc.

---

### 1.2 FAQ Schema Markup ✅ Completed

Capture "People Also Ask" real estate in Google search results.

- [x] Create FAQ data file with common questions
- [x] Add FAQ JSON-LD schema to relevant pages
- [x] Include FAQ section on contact page
- [ ] Include FAQ section on product category pages

**Status**: FAQ fully implemented with JSON-LD schema and complete content in both EN and DE locales.

**Pages**: `/faq` and `/de/faq`

**Sample FAQ topics**:
- What is your minimum order quantity?
- Do you offer samples?
- What payment methods do you accept?
- Do you handle export documentation?
- What is your shipping time to Europe?

---

### 1.3 Technical SEO Fixes ✅ Completed

- [x] Verify robots.txt is accessible at root
- [x] Add self-referencing canonical to all pages
- [x] Add `lastmod` dates to sitemap entries
- [x] Create image sitemap for product images
- [x] Verify all hreflang tags are correct
- [x] Check for orphan pages

**Status**: All technical SEO fixes verified and in place.

**Details**:
- `robots.txt`: Blocks `/api/`, allows all other pages, includes sitemap reference
- Canonical tags: Self-referencing canonicals on all pages (layout handles home, individual pages handle their own)
- Sitemap: Includes lastmod dates for all pages; FAQ updated to 2026-03-13
- Image sitemap: Product images included in sitemap with proper metadata
- Hreflang: All pages have alternates.languages with en/de pairs
- No orphan pages: All pages are linked from Navigation, Products, or other components

---

## Phase 2: Content Expansion (Medium Term) - 🟡 **Implemented** (2/2 phases complete - Review Pending)

### 2.1 Destination Market Pages ✅ Implemented (Review Pending)

Target specific export destinations with localized content.

- [x] Create `app/[locale]/export-to/[country]/page.tsx`
- [x] Research import regulations for top 8 markets
- [x] Create content templates for market pages
- [x] Add country-specific metadata
- [x] Add JSON-LD schema for each page
- [x] Add to sitemap with proper lastmod dates

**Target markets** (priority order):
1. [x] Germany (/export-to/germany)
2. [x] Netherlands (/export-to/netherlands)
3. [x] United Kingdom (/export-to/uk)
4. [x] France (/export-to/france)
5. [x] United States (/export-to/usa)
6. [x] United Arab Emirates (/export-to/uae)
7. [x] Japan (/export-to/japan)
8. [x] China (/export-to/china)

**Content per page**:
- ✅ Import regulations for that country (EN + DE)
- ✅ Popular products in that market
- ✅ Shipping routes and transit times
- ✅ Payment methods preferred
- ✅ Contact options for that region

**Pages created**: 8 countries × 2 locales = 16 pages
- Data file: `data/destinations.ts` with full content

---

### 2.2 Industry/Application Pages ✅ Implemented (Review Pending)

Target specific buyer personas and use cases.

- [x] Create `app/[locale]/for-[industry]/page.tsx`
- [x] Create industry-specific messaging
- [x] Add industry-specific product filtering
- [x] Add JSON-LD schema for each page
- [x] Add to sitemap with proper lastmod dates

**Target industries**:
1. [x] `/for-food-manufacturers` - Industrial-scale buyers
2. [x] `/for-pharmaceutical` - Medicinal herb buyers
3. [x] `/for-essential-oils` - Aromatic product buyers
4. [x] `/for-beverage` - Ginger, vanilla for drinks
5. [x] `/for-bakery` - Spices for baking
6. [x] `/for-distributors` - B2B distributors

**Pages created**: 6 industries × 2 locales = 12 pages
- Data file: `data/industries.ts` with full content

---

### 2.3 HS Code Landing Pages ⏳ Not Started

Target B2B search for specific HS codes and tariff classifications.

- [ ] Create HS codes data file with code mappings
- [ ] Create `app/[locale]/hs-code-[code]/page.tsx` template
- [ ] Add code-specific metadata (title, description, keywords)
- [ ] Add JSON-LD schema for each page
- [ ] Add to sitemap with proper lastmod dates
- [ ] Link from product pages and glossary

**Target HS Codes** (priority order):
1. [ ] 0904 - Pepper (piper spp.)
2. [ ] 0905 - Vanilla
3. [ ] 0906 - Cinnamon and tree flowers
4. [ ] 0907 - Nutmeg, mace and cardamoms
5. [ ] 0908 - Nutmeg and mace
6. [ ] 0910 - Ginger, saffron, turmeric
7. [ ] 0801 - Cashew nuts
8. [ ] 0901 - Coffee
9. [ ] 0804 - Coconut, brazil nut, cashew

**Content per page**:
- HS code structure and meaning
- Products covered under this code
- Import duties for key markets (EU, US)
- Required documentation/certifications
- Related products available for export
- Contact/quote CTA

**Pages to create**: ~10 HS codes × 2 locales = +20 pages
- Routes: `/hs-code-0904/`, `/hs-code-0905/`, etc. and `/de/` equivalents

**Search intent**:
- "HS code 0904 import", "cinnamon HS code", " cloves tariff rate EU"

---

## Phase 3: Comparison & Educational (Long Term) - 🟡 **In Progress** (1/3 phases complete)

### 3.1 Product Comparison Pages

Help buyers choose between similar products.

- [ ] Create comparison page template
- [ ] Create side-by-side spec tables
- [ ] Add "Which should you choose?" guidance

**Potential comparisons**:
- [ ] White Pepper vs Black Pepper
- [ ] Clove Stem vs Whole Clove
- [ ] Nutmeg ABC vs BWP vs Dust
- [ ] Fresh Ginger vs Dried Ginger
- [ ] Robusta vs Arabica Coffee
- [ ] Cassia vs Ceylon Cinnamon

---

### 3.2 Glossary/Educational Content ✅ Implemented (Review Pending)

Build authority with informational content.

- [x] Create `/glossary` page
- [x] Create `/what-is/[term]` pages
- [x] Add `Article` structured data
- [x] Add internal links from product/category pages

**Glossary Terms Implemented:**
1. [x] What is HS Code? (Was ist HS-Code?)
2. [x] Indonesian Spice Grading System (Indonesisches Gewürz-Bewertungssystem)
3. [x] Export Documentation Guide (Export-Dokumentationsleitfaden)
4. [x] Clove Growing Regions in Indonesia (Nelken-Anbaugebiete in Indonesien)
5. [x] Vanilla Bean Grades Explained (Vanillebohnen-Qualitätsstufen)
6. [x] Bulk vs Container Shipping (Großmengen vs. Container-Versand)

**Pages created**: 6 terms × 2 locales + 2 glossary index pages = 14 pages
- Routes: `/glossary`, `/what-is/[term]` and `/de/` equivalents

**Data file**: `data/glossary.ts` (55KB) with full EN + DE content

**Schema**: Article, DefinedTerm, CollectionPage, BreadcrumbList

---

### 3.3 Blog/Resources Section

Content marketing for long-term SEO growth.

- [ ] Create `/blog` or `/resources` section
- [ ] Set up blog post template with proper schema
- [ ] Create RSS feed
- [ ] Add author profiles if multiple contributors

**Initial blog topics**:
- [ ] Sustainable Sourcing in Indonesian Agriculture
- [ ] 2025 Indonesian Spice Export Guide
- [ ] How We Ensure Quality Control
- [ ] Shipping Indonesian Products to Europe: A Complete Guide

---

## Implementation Checklist

### Pre-Launch (for each page type)

- [ ] Unique title and meta description
- [ ] Proper heading structure (h1 → h2 → h3)
- [ ] Schema markup implemented
- [ ] Internal links to/from the page
- [ ] Mobile responsive design
- [ ] Page speed acceptable (< 3s LCP)
- [ ] Added to XML sitemap
- [ ] No conflicting noindex tags
- [ ] Language alternates (hreflang) correct

### Post-Launch Monitoring

- [ ] Submit updated sitemap to Google Search Console
- [ ] Monitor indexation rate
- [ ] Track rankings for target keywords
- [ ] Monitor organic traffic growth
- [ ] Check for thin content warnings
- [ ] Review crawl errors in GSC

---

## Priority Summary

| Priority | Task | Effort | Impact | Pages Added |
|----------|------|--------|--------|-------------|
| 🔴 High | Category Pages | Low | High | +10 |
| 🔴 High | FAQ Schema | Low | Medium | 0 |
| 🔴 High | HS Code Pages | Medium | High | +20 |
| 🟡 Medium | Market Pages | Medium | High | +16 |
| 🟡 Medium | Industry Pages | Medium | Medium | +12 |
| 🟢 Low | Comparison Pages | Medium | Low | +12 |
| 🟢 Low | Glossary/Blog | High | Medium | +22+ |

**Current total pages**: +54 pages (+10 + 0 + 16 + 12 + 14 + 2 FAQ index)
**Projected total**: +94 pages (including HS codes + comparisons + blog)

---

## Next Steps

1. ✅ **Phase 3.2: Glossary/Educational Content** - Complete (locale fix committed)
2. 🔴 **Phase 2.3: HS Code Landing Pages** - Create HS code reference pages
3. **Phase 3.1: Comparison Pages** - Can be done after HS code pages
4. **Phase 3.3: Blog/Resources Section** - Content marketing for long-term SEO growth

---

## Implementation Status

| Phase | Status | Pages | Notes |
|-------|--------|--------|-------|
| 1.1 Category Pages | ✅ Complete | +10 pages |
| 1.2 FAQ Schema | ✅ Complete | +2 pages |
| 1.3 Technical SEO | ✅ Complete | No new pages |
| 2.1 Market Pages | ✅ Complete | +16 pages |
| 2.2 Industry Pages | ✅ Complete | +12 pages |
| 2.3 HS Code Pages | ⏳ Not Started | +20 pages |
| 3.1 Comparison | ⏳ Not Started | +12 pages |
| 3.2 Glossary | ✅ Complete | +14 pages |
| 3.3 Blog | ⏳ Not Started | +8+ pages |

**Total implemented:** 58/108 tasks (54%)
**Pages created:** 54 pages total
**Pages remaining:** ~40+ (HS codes + comparisons + blog)

---

*Use `/programmatic-seo` to implement any phase*
