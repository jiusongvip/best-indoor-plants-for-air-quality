# SEO Action Plan: best-indoor-plants-for-air-quality.com

**Overall Health Score: 84/100 — "Launch Ready with ~2 Days of Optimization"**

---

## Phase 1: Critical Fixes (Before Launch)

| # | Task | File(s) | Effort | Impact | Priority |
|---|------|---------|--------|--------|----------|
| 1 | Add BreadcrumbList JSON-LD schema | `src/components/Layout.astro` | 10 min | **High** — enables breadcrumb rich snippet in SERP | P0 |
| 2 | Add `<meta name="robots" content="index, follow">` | `src/components/Layout.astro` | 1 min | **High** — explicit indexing control for production | P0 |
| 3 | Add named author with bio to blog posts | `src/pages/blog/*.astro` (4 files) | 30 min | **High** — E-E-A-T signal, required for AI citation readiness | P0 |
| 4 | Remove unused content collections or create directories | `src/content.config.ts` | 5 min | **Medium** — eliminates build warnings | P1 |

### How to Implement

**#1 BreadcrumbList Schema** — Add to `Layout.astro` `</head>`:

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": (() => {
    const parts = Astro.url.pathname.split('/').filter(Boolean);
    const items = [{ position: 1, name: "Home", item: "https://best-indoor-plants-for-air-quality.com/" }];
    parts.forEach((part, i) => {
      items.push({
        position: i + 2,
        name: part.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        item: "https://best-indoor-plants-for-air-quality.com/" + parts.slice(0, i + 1).join('/')
      });
    });
    return items;
  })()
})} />
```

**#2 Robots Meta Tag** — Add after `<meta charset="UTF-8" />` in `Layout.astro`:
```astro
<meta name="robots" content="index, follow" />
```

**#3 Author Bylines** — In each blog post, add author data in frontmatter:
```astro
---
const author = { name: "Alex Chen", title: "Plant Biologist & Indoor Air Quality Researcher" };
---
```
Then display in the article header and add `"author": { "@type": "Person", "name": author.name }` to the Article schema.

**#4 Content Collections** — Either remove unused collections from `content.config.ts` or create empty directories:
```bash
mkdir src/content/blog src/content/plants
```

---

## Phase 2: High-Impact Improvements (Week 1 Post-Launch)

| # | Task | Effort | Impact | Priority |
|---|------|--------|--------|----------|
| 1 | Expand category pages with 200-400 words editorial content each | 2-3 hrs | **High** — unlocks long-tail keyword traffic from 5 category pages | P1 |
| 2 | Self-host Geist + Geist Mono fonts | 1 hr | **High** — removes render-blocking request, improves LCP by ~150-300ms | P1 |
| 3 | Add responsive image srcset for 15 plant images | 2 hrs | **Medium** — improves mobile Core Web Vitals | P2 |
| 4 | Update blog index H1 and title tag | 5 min | **Medium** — better keyword targeting | P1 |
| 5 | Add article OG metadata to blog posts | 15 min | **Medium** — better social sharing appearance | P2 |

### How to Implement

**#2 Self-Hosting Fonts**

1. Download Geist and Geist Mono from https://github.com/vercel/geist-font
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
@font-face {
  font-family: 'Geist';
  src: url('/fonts/Geist-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Geist';
  src: url('/fonts/Geist-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
/* Geist Mono variants */
```
4. Remove Google Fonts `<link>` from `Layout.astro` (lines 29-31)

**#3 Responsive Images** — Install and configure:
```bash
npm install @astrojs/image
```

Or manually generate 400w, 800w, 1200w WebP variants for each plant and use:
```astro
<img
  src={plant.image}
  srcset={`${plant.image.replace('.webp', '-400w.webp')} 400w, ${plant.image.replace('.webp', '-800w.webp')} 800w, ${plant.image.replace('.webp', '-1200w.webp')} 1200w`}
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
  alt={plant.name}
  width="400" height="300"
  loading="lazy"
/>
```

**#4 Blog Index H1** — In `src/pages/blog/index.astro:26`:
```diff
- <h1 class="...">Blog</h1>
+ <h1 class="...">Indoor Plant Care & Air Quality Blog</h1>
```

---

## Phase 3: Content & Authority (Month 1-2)

| # | Task | Effort | Impact | Priority |
|---|------|--------|--------|----------|
| 1 | Write 3-5 new blog posts targeting low-competition keywords | 1-2 days | **High** — content depth signals, fresh content crawl | P2 |
| 2 | Implement topic cluster linking: blog posts → category pages | 4 hrs | **Medium** — semantic SEO boost through pillar-cluster architecture | P2 |
| 3 | Add 'About' link to main navigation | 15 min | **Medium** — E-E-A-T page visibility | P2 |
| 4 | Upgrade plant schema from `@type: Thing` to `@type: Product` | 30 min | **Medium** — enables Google Shopping-like features | P3 |
| 5 | Generate per-plant OG images | 1-2 hrs | **Low** — social share quality | P3 |

### Suggested Blog Post Topics (Keyword Research)
- "Best plants for new apartments" — moving + air quality (low competition)
- "How to care for air-purifying plants in winter" — seasonal, recurring search
- "Bamboo Palm vs Areca Palm" — comparison intent
- "Do snake plants really produce oxygen at night?" — myth-busting
- "Complete guide to pet-safe indoor plants" — category pillar content
- "Air purifying plants for bathroom" — long-tail niche

### Internal Linking Strategy

```
Blog Post ──→ Category Page ──→ Plant Pages
    │              │                 │
    └──contextual──┘                 │
         links                       └──footer links──┐
                                                       │
                                              Homepage (hub)
```

Example: In `how-many-plants-per-room.astro`, add:
```astro
<p>For pet-safe options, see our <a href="/categories/pet-safe">pet-safe plants collection</a>.</p>
```

---

## Phase 4: Monitoring & Iteration (Ongoing)

| # | Task | Frequency | Detail | Priority |
|---|------|-----------|--------|----------|
| 1 | Monitor Google Search Console | Weekly | Index status, sitemap coverage, 404s, core web vitals | P1 |
| 2 | Check PageSpeed Insights | Monthly | Track LCP, INP, CLS on real user data | P1 |
| 3 | Track AI platform citations | Monthly | Check ChatGPT, Perplexity, Gemini/AI Overviews for brand mentions | P2 |
| 4 | Update content freshness | Quarterly | Update dates, review scientific accuracy, add new research | P2 |
| 5 | Expand plant collection | As needed | Add more plant profiles based on search demand and keyword data | P3 |
| 6 | Add blog pagination | When >10 posts | Prevent thin index page, add paginated structure | P2 |

---

## Effort vs Impact Matrix

```
High Impact
    ↑
    │  Phase 1 (#1,#2)        Phase 1 (#3)
    │  Phase 2 (#1,#2)        Phase 3 (#1)
    │  ●●●●●                  ●●●
    │
    │  Phase 2 (#3,#4,#5)     Phase 3 (#2,#4)
    │  Phase 1 (#4)           Phase 3 (#3)
    │  ●●●                    ●●
    │
    │  Phase 3 (#5)           Phase 4 (#3,#4)
    │  Phase 4 (#6)           Phase 4 (#5)
    │  ○                      ○
    │
    └──────────────────────────────→ Effort
       Low                          High

       ● = P0/P1 priority    ○ = P2/P3 priority
```

---

## KPIs to Track

| KPI | Current Baseline | Target (3 Months) |
|-----|-----------------|-------------------|
| Pages Indexed | N/A (pre-launch) | 30/30 |
| Organic Traffic | 0 | 500+/month |
| Core Web Vitals Pass | Lab: ~75 | Field: >90% |
| AI Overview Citations | N/A | 3+ organic brand mentions |
| Average SERP Position | N/A | Top 20 for target keywords |
| Category Page Traffic | 0 | 15% of total organic |

---

## Deployment Checklist

- [ ] Build passes: `npm run build` → 30 pages, no errors
- [ ] Sitemap verified: `dist/sitemap-0.xml` includes all 30 pages
- [ ] Security headers configured at hosting layer (CSP, HSTS, X-Frame-Options)
- [ ] Domain DNS pointed to hosting provider (Cloudflare Pages / Netlify / Vercel)
- [ ] Google Search Console property verified
- [ ] Sitemap submitted to GSC
- [ ] robots.txt confirms `Allow: /` + correct Sitemap URL
- [ ] Canonical URLs point to production domain (✅ already correct)
- [ ] All internal links resolve (✅ verified in source)
- [ ] 404 page tested
- [ ] Social previews verified (Facebook Sharing Debugger, Twitter Card Validator)

---

*Generated from source code review + production build verification of best-indoor-plants-for-air-quality.com. Build: 30 pages, 6.94s, clean. Estimated optimization: ~2 days for all P0-P1 items.*
