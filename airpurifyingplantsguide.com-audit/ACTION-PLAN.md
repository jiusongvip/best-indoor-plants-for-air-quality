# SEO Action Plan: best-indoor-plants-for-air-quality.com

**Overall Health Score: 84/100 — "Launch Ready with Improvements"**

---

## Phase 1: Critical Fixes (Before Launch)

| # | Task | File(s) | Effort | Impact |
|---|------|---------|--------|--------|
| 1 | Add BreadcrumbList JSON-LD schema | `src/components/Layout.astro` | 10 min | **High** — enables rich snippet in SERP |
| 2 | Add `<meta name="robots" content="index, follow">` | `src/components/Layout.astro` | 1 min | **High** — explicit index control |
| 3 | Add named author with bio to blog posts | `src/pages/blog/*.astro` | 30 min | **High** — E-E-A-T signal for Google |
| 4 | Verify sitemap post-build output | Run `npm run build` | 5 min | **High** — ensures all pages discoverable |

### Fix Details

**#1 BreadcrumbList Schema** — Add to `src/components/Layout.astro` before `</head>`:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://best-indoor-plants-for-air-quality.com/" }
    // Dynamically generate based on current path
  ]
}
</script>
```

**#2 Robots Meta Tag** — Add after line 17 in `Layout.astro`:

```html
<meta name="robots" content="index, follow" />
```

**#3 Author Bylines** — In each blog post, add:

```astro
---
const author = { name: "Alex Chen", bio: "Plant biologist and indoor air quality researcher" };
---
```

Then display in the article header and add `author` to Article schema.

---

## Phase 2: High-Impact Improvements (Week 1 Post-Launch)

| # | Task | Effort | Impact |
|---|------|--------|--------|
| 1 | Expand category pages with editorial content (200-400 words each) | 2-3 hrs | **High** — unlocks long-tail keyword traffic |
| 2 | Self-host Geist + Geist Mono Google Fonts | 1 hr | **High** — removes render-blocking, improves LCP |
| 3 | Add responsive image srcset for plant images | 2 hrs | **Medium** — improves mobile performance |
| 4 | Update blog index H1 and title tag | 5 min | **Medium** — better keyword targeting |
| 5 | Add article OG metadata to blog posts | 15 min | **Medium** — better social sharing |

### Self-Hosting Fonts

1. Download Geist and Geist Mono from GitHub (https://github.com/vercel/geist-font)
2. Place WOFF2 files in `public/fonts/`
3. Add to `src/styles/global.css`:

```css
@font-face {
  font-family: 'Geist';
  src: url('/fonts/Geist-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
/* Repeat for each weight/variant */
```

4. Remove the Google Fonts `<link>` from `Layout.astro`

---

## Phase 3: Content & Authority (Month 1-2)

| # | Task | Effort | Impact |
|---|------|--------|--------|
| 1 | Write 3-5 new blog posts targeting low-competition keywords | 1-2 days | **High** — content depth signals |
| 2 | Implement topic cluster linking: blog → category → plant | 1 day | **Medium** — semantic SEO boost |
| 3 | Add 'About' link to main navigation | 15 min | **Medium** — E-E-A-T visibility |
| 4 | Upgrade plant schema from `@type: Thing` to `@type: Product` | 30 min | **Medium** — shopping feature eligibility |
| 5 | Generate per-plant OG images | 1-2 hrs | **Low** — social share quality |

### Suggested Blog Post Topics
- Best Plants for New Apartments (moving + air quality)
- How to Care for Air-Purifying Plants in Winter
- Bamboo Palm vs. Areca Palm: Which is Better?
- Do Snake Plants Really Produce Oxygen at Night?
- The Complete Guide to Pet-Safe Indoor Plants

---

## Phase 4: Monitoring & Iteration (Ongoing)

| # | Task | Frequency | Detail |
|---|------|-----------|--------|
| 1 | Monitor Google Search Console | Weekly | Index status, sitemap coverage, 404s |
| 2 | Check Core Web Vitals in PageSpeed Insights | Monthly | Track LCP, INP, CLS post-launch |
| 3 | Track AI platform citations | Monthly | Check ChatGPT, Perplexity, Gemini for brand mentions |
| 4 | Update freshness signals | Quarterly | Update dates, review content accuracy |
| 5 | Expand plant collection | As needed | Add more plant profiles based on search demand |

---

## Effort vs. Impact Matrix

```
High Impact
    ↑
    │  Phase 1 (#1,#2,#3)     Phase 2 (#1,#2)
    │  ●●●                     ●●
    │
    │  Phase 2 (#3,#4,#5)     Phase 3 (#1)
    │  ●                       ●●
    │
    │  Phase 3 (#5)            Phase 3 (#2,#4)
    │  ○                       ●
    │
    └──────────────────────────────→ Effort
       Low                          High
       
       ● = Done     ○ = Planned
```

---

## KPIs to Track

| KPI | Current Baseline | Target (3 Months) |
|-----|-----------------|-------------------|
| Pages Indexed | N/A (pre-launch) | 24/24 |
| Organic Traffic | 0 | 500+/month |
| Core Web Vitals Pass | Lab: ~75 | Field: >90% |
| AI Overview Citations | N/A | 3+ organic mentions |
| Average Position | N/A | Top 20 for target keywords |

---

*Generated from source code audit of best-indoor-plants-for-air-quality.com. Priority: Pre-Launch Ready with ~2 days of optimization work.*
