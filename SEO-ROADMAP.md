# SEO Roadmap - Indo Tropical Agriculture

> Last updated: 2026-03-13
> Current indexed pages: ~96 (40 products × 2 locales + 10 category pages × 2 locales + catalog pages + homepages)

---

## 📊 Progress Summary

| Phase | Status | Progress | Tasks Completed/Total |
|-------|--------|----------|----------------------|
| Phase 1.1: Category Pages | ✅ **Completed** | 100% | 8/8 |
| Phase 1.2: FAQ Schema | ✅ **Completed** | 100% | 4/4 |
| Phase 1.3: Technical SEO Fixes | ✅ **Completed** | 100% | 6/6 |
| Phase 2.1: Market Pages | ⏳ Not Started | 0% | 0/16 |
| Phase 2.2: Industry Pages | ⏳ Not Started | 0% | 0/12 |
| Phase 3.1: Comparison Pages | ⏳ Not Started | 0% | 0/6 |
| Phase 3.2: Glossary/Educational | ⏳ Not Started | 0% | 0/12 |
| Phase 3.3: Blog/Resources | ⏳ Not Started | 0% | 0/4 |
| **Overall** | 🟡 **In Progress** | **20%** | **18/92** |

### Pages Added So Far
- ✅ **10 Category Pages** (5 categories × 2 locales)
- ✅ **2 FAQ Pages** (`/faq`, `/de/faq`) - complete with JSON-LD schema and content

### Next Immediate Task
- 🔴 **Phase 2.1: Destination Market Pages** - Create export destination pages for target markets
  - Germany, Netherlands, UK, France, USA, UAE, Japan, China (16 pages total: 8 markets × 2 locales)

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

## Phase 2: Content Expansion (Medium Term) - ⏳ Not Started (0/2 phases complete)

### 2.1 Destination Market Pages

Target specific export destinations with localized content.

- [ ] Create `app/[locale]/export-to/[country]/page.tsx`
- [ ] Research import regulations for top 5 markets
- [ ] Create content templates for market pages
- [ ] Add country-specific metadata
- [ ] Add local business schema variations

**Target markets** (priority order):
1. [ ] Germany (/export-to/germany)
2. [ ] Netherlands (/export-to/netherlands)
3. [ ] United Kingdom (/export-to/uk)
4. [ ] France (/export-to/france)
5. [ ] United States (/export-to/usa)
6. [ ] United Arab Emirates (/export-to/uae)
7. [ ] Japan (/export-to/japan)
8. [ ] China (/export-to/china)

**Content per page**:
- Import regulations for that country
- Popular products in that market
- Shipping routes and transit times
- Payment methods preferred
- Contact options for that region

---

### 2.2 Industry/Application Pages

Target specific buyer personas and use cases.

- [ ] Create `app/[locale]/for-[industry]/page.tsx`
- [ ] Create industry-specific messaging
- [ ] Add industry-specific product filtering

**Target industries**:
1. [ ] `/for-food-manufacturers` - Industrial-scale buyers
2. [ ] `/for-pharmaceutical` - Medicinal herb buyers
3. [ ] `/for-essential-oils` - Aromatic product buyers
4. [ ] `/for-beverage` - Ginger, vanilla for drinks
5. [ ] `/for-bakery` - Spices for baking
6. [ ] `/for-distributors` - B2B distributors

---

## Phase 3: Comparison & Educational (Long Term) - ⏳ Not Started (0/3 phases complete)

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

### 3.2 Glossary/Educational Content

Build authority with informational content.

- [ ] Create `/glossary` page
- [ ] Create `/what-is/[term]` pages
- [ ] Add `Article` structured data

**Potential topics**:
- [ ] What is HS Code?
- [ ] Indonesian Spice Grading System
- [ ] Export Documentation Guide
- [ ] Clove Growing Regions in Indonesia
- [ ] Vanilla Bean Grades Explained

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
| 🟡 Medium | Market Pages | Medium | High | +16 |
| 🟡 Medium | Industry Pages | Medium | Medium | +12 |
| 🟢 Low | Comparison Pages | Medium | Low | +10 |
| 🟢 Low | Glossary/Blog | High | Medium | +20+ |

**Potential total pages**: +68-100+ pages

---

## Next Steps

1. Start with **Category Pages** (Phase 1.1) - highest ROI
2. Add **FAQ Schema** (Phase 1.2) - quick win for SERP real estate
3. Expand to **Destination Market Pages** (Phase 2.1) once foundations are solid

---

*Use `/programmatic-seo` to implement any phase*
