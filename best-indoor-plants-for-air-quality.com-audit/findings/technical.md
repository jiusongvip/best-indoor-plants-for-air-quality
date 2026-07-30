# Technical SEO Findings

**Score: 87/100**

## Strengths
- Canonical URLs on all pages via `Layout.astro`
- robots.txt correctly configured (`Allow: /` + Sitemap link)
- hreflang tags (en + x-default) on every page
- Clean URL structure with no trailing slashes (`trailingSlash: 'never'`)
- @astrojs/sitemap configured — verified 30 pages in build output
- Proper 404 page with navigation
- No broken internal links detected
- Build produces static HTML (no JS required for content)
- Production build: 30 pages, 6.94s, clean

## Issues

| # | Issue | Severity | File | Fix |
|---|-------|----------|------|-----|
| 1 | No meta robots tags | **High** | `Layout.astro` | Add `<meta name="robots" content="index, follow">` |
| 2 | Content collections config stale | **Medium** | `content.config.ts` | Remove unused or create `src/content/blog/`, `src/content/plants/` dirs |
| 3 | No security headers | **Medium** | Hosting layer | Configure CSP, HSTS, X-Frame-Options at CDN level |
| 4 | Sitemap build-only | **Low** | `astro.config.mjs` | Verified: all 30 pages present in output |
| 5 | Trailing slash redirects | **Low** | `astro.config.mjs` | Monitor in GSC post-launch |

## Key Source Files
- `astro.config.mjs` — site config, sitemap, tailwind integration
- `src/components/Layout.astro:11` — canonical URL generation
- `public/robots.txt` — crawl directives
- `src/content.config.ts` — content collections (stale)
