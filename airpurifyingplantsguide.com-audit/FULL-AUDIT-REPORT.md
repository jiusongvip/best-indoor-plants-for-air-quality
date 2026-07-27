** Overall SEO Health Score: 53/100 ** | ** 29 Pages ** | ** best-indoor-plants-for-air-quality.com **

## Executive Summary

The site is a well-structured Astro static site covering indoor air-purifying plants. The domain targets a clear niche with solid foundational content. However, several critical issues prevent the site from being competitive: there are no real plant images, canonical URLs are missing, and the blog post with the most SEO potential has a title tag bug. The site is close to being good--with a focused sprint of fixes it can reach a solid 75+.

**Top 5 Critical Issues:**

1. All 15 plant pages use emoji placeholders instead of real photographs--severely damages E-E-A-T for a plant guide
2. No rel="canonical" tags exist on any page--risk of duplicate content issues
3. Blog post "how-many-plants-per-room" has doubled site-name in the title tag
4. No OG image or twitter:image tags--zero social share previews
5. Homepage heading hierarchy jumps from H1 directly to H3

**Top 5 Quick Wins:**

1. Add rel=canonical to all pages via Layout.astro (1 line change)
2. Fix the blog post title double-suffix bug (remove site name from the prop)
3. Add OG image meta tags to Layout.astro with a default image
4. Add `&display=swap` to Google Fonts URL
5. Configure @astrojs/sitemap to output lastmod timestamps

---

## Scoring Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 13 | 22% | 2.9 |
| Content Quality | 14 | 23% | 3.2 |
| On-Page SEO | 11 | 20% | 2.2 |
| Schema/Structured Data | 4 | 10% | 0.4 |
| Performance (CWV) | 6 | 10% | 0.6 |
| AI Search Readiness | 3 | 10% | 0.3 |
| Images | 1 | 5% | 0.1 |
| **TOTAL** | **53** | **100%** | **--** |

---

## Technical SEO

**Score: 13/22**

**What Works:**
- robots.txt is correctly configured allowing all crawlers with a proper sitemap reference
- Clean URL structure: lowercase, hyphenated slugs (e.g., /plants/snake-plant/)
- All 29 pages return HTTP 200
- Astro auto-generates a valid XML sitemap with all pages listed
- Static HTML pages serve instantly with no client-side rendering needed

**Critical: Missing Canonical URLs**

No rel="canonical" tag exists anywhere in the site`s pages. Layout.astro should include a canonical link that resolves to each page`s absolute URL. This is table-stakes for any SEO site.

**Medium: Sitemap Missing lastmod and Priority**

The sitemap-0.xml contains only `<loc>` entries. Search engines rely on lastmod to understand content freshness and priority to allocate crawl budget. Configure @astrojs/sitemap with these options.

**Low: No Security Headers**

The site does not set X-Content-Type-Options, X-Frame-Options, or Content-Security-Policy. More relevant for the hosting platform than the static build itself.

---

## On-Page SEO

**Score: 11/20**

**What Works:**
- Every page has a unique, descriptive meta description tag
- Every page has exactly one H1 tag
- URL slugs match page titles cleanly (no IDs or params)
- Mobile hamburger menu with proper aria-labels for accessibility
- Visual breadcrumb navigation on plant and blog pages

**Critical: Double Site-Name in Blog Post Title**

The blog post `how-many-plants-per-room.astro` passes a title prop that already includes the site name suffix: "How Many Plants Do You Need to Clean a Room`s Air? | Air Purifying Plants Guide". Layout.astro then appends "| Air Purifying Plants Guide" AGAIN, producing: "[...] | Air Purifying Plants Guide | Air Purifying Plants Guide". This looks unprofessional in search results.

**High: Missing OG Image Tags**

No og:image or twitter:image meta tags exist. Social sharing will show zero preview image, which drastically reduces click-through rates from Facebook, Twitter, LinkedIn, and messaging apps.

**High: Heading Hierarchy Violation**

The RecommendationTool component on the homepage uses an H3 heading ("Find Your Perfect Plant") immediately after the page`s H1, with no intervening H2. This breaks HTML heading hierarchy and makes page structure harder for search engines to parse.

**Medium: Homepage H1 Broken with `<br>` Tag**

The homepage H1 reads "Best Indoor Plants for<br class='hidden sm:block'>Air Quality". Search engines may interpret this as two fragments. Use CSS max-width to control visual line breaks instead.

---

## Content Quality

**Score: 14/23**

**What Works:**
- Homepage content compelling with "2026 Guide" positioning and clear value proposition
- NASA Clean Air Study page provides useful scientific context
- FAQ page has 8 well-structured questions with substantive answers
- Plant pages include scientific names, care summaries, and toxicity warnings
- Blog topics are well-chosen for the niche

**High: Blog Posts Are Thin (400-600 words)**

Each of the 4 blog posts is only 400-600 words. For competitive keywords like "do plants really clean air" and "air purifier vs plants", posts should target 1500-2500+ words with comprehensive coverage, data points, and expert citations.

**High: No Author Credentials**

The About page lacks author biographies, professional credentials, or any personal attribution. For a health-adjacent YMYL (Your Money or Your Life) topic dealing with indoor air quality, E-E-A-T signals are critical.

**Medium: Missing Privacy Policy**

No privacy policy or terms of service page. Essential for trust signals and potentially required for Google AdSense or affiliate monetization.

**Medium: Templated Plant Page Content**

All 15 plant pages follow an identical template from plants/[slug].astro. While data values differ, the structural repetition may be flagged as thin/duplicate content by search engines.

---

## Schema & Structured Data

**Score: 4/10**

**What Works:**
- Organization JSON-LD on all pages (via Layout.astro)
- WebSite JSON-LD with URL and description (via Layout.astro)
- FAQPage JSON-LD on the FAQ page with proper Question/Answer pairs
- Article schema on individual blog posts with datePublished and dateModified
- ItemList schema on the blog listing page

**High: Wrong Schema Type on Homepage**

Homepage uses @type:Article instead of @type:CollectionPage or @type:WebPage. The homepage is clearly not an article--it`s a collection of plants. Change the schema type.

**High: No Schema on Plant Pages**

Individual plant pages have zero structured data. For a content site about products (plants), each plant page should carry appropriate schema.

**Medium: Missing BreadcrumbList Schema**

Visual breadcrumb navigation exists on plant and blog pages, but there is no BreadcrumbList JSON-LD to help search engines understand page hierarchy.

---

## Performance (Core Web Vitals)

**Score: 6/10**

**What Works:**
- All pages are static HTML--no server-side rendering delays
- Page sizes are small (14-63 KB uncompressed)
- No heavy JavaScript framework or client-side hydration
- Tailwind CSS treeshakes unused classes in production build
- No third-party tracking or analytics scripts detected

**High: Google Fonts Without font-display:swap**

Geist and Geist Mono load from fonts.googleapis.com without `&display=swap`. This can cause FOIT (Flash of Invisible Text), delaying First Contentful Paint and hurting perceived performance.

**Medium: External Font Requests Are Render-Blocking**

fonts.googleapis.com and fonts.gstatic.com are cross-origin requests that block text rendering. Self-hosting fonts would eliminate these dependencies entirely.

---

## Images

**Score: 1/5**

**What Works:**
- Emoji placeholders correctly use aria-hidden="true" for decorative purposes
- Aspect ratio containers maintain layout stability (no CLS from image loading)

**Critical: No Real Plant Images**

Every plant page uses emoji characters (🌿, 🌴, 🌸, etc.) as hero images instead of actual photographs. For a plant guide website, this is a foundational E-E-A-T failure. Users come to see what plants look like.

**High: Missing Social Share Image**

No dedicated OG image exists for social media sharing. Create a 1200x630px branded preview image and reference it via og:image.

---

## AI Search Readiness

**Score: 3/10**

**What Works:**
- Strong topical authority on air-purifying plants
- NASA study references add factual weight
- FAQ page structured with clear Q/A format useful for AI training

**High: Missing llms.txt**

No llms.txt file exists at the site root. This is increasingly important for AI-powered search engines (ChatGPT, Perplexity, Google AI Overviews) to understand and cite site content.

**Medium: No llms-full.txt**

No expanded content file for detailed AI training access.

**Medium: Lacks Citation Signals**

The site references NASA studies but does not link to original research sources. Adding named authors with credentials and external citations would strengthen citability.

---

*Audit completed 2026-07-27. Site platform: Astro SSG. Pages analyzed: 29.*
