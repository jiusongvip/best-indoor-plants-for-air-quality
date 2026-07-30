# Performance / Core Web Vitals Findings

**Score: 75/100**

## Strengths
- Lazy loading on all plant card images (`loading="lazy"`)
- All images in WebP format
- Minimal JavaScript (~8KB total: recommendation tool + mobile menu)
- Tailwind CSS v4 with automatic unused-style removal
- preconnect hints for Google Fonts CDN
- Aspect-ratio containers (`aspect-[4/3]`) on plant cards — CLS mitigation
- Static HTML output — no hydration overhead

## Issues

| # | Issue | Severity | Impact | Fix |
|---|-------|----------|--------|-----|
| 1 | Google Fonts external render-blocking | **High** | +150-300ms LCP | Self-host fonts from `/public/fonts/` |
| 2 | No responsive image srcset | **Medium** | Up to 2x wasted bandwidth on mobile | Generate 400w/800w/1200w variants |
| 3 | No prefetch/prerender hints | **Medium** | Delayed navigation | Add `<link rel="prefetch">` for top 3 plant pages |
| 4 | Recommender inline script | **Low** | Minor parse delay (~5KB JSON inlined) | Add defer or use client:load |

## Performance Budget (Estimated)

| Metric | Estimated (Lab) | Target |
|--------|-----------------|--------|
| LCP | 2.0-2.5s (with Google Fonts) | < 1.8s |
| LCP | 1.5-1.8s (self-hosted fonts) | ✅ |
| CLS | < 0.05 | ✅ Likely passing |
| INP | < 100ms | ✅ Likely passing |
| TBT | < 50ms | ✅ Minimal JS |
| FCP | 1.2-1.5s | < 1.5s |

## Recommendations Priority

1. **Self-host Geist + Geist Mono** — biggest single improvement available
2. **Add responsive srcset** — implement for all 15 plant images
3. **Add prefetch hints** — prefetch top 3 plant cards on homepage hover/intersection
4. **Convert recommender script** — use `type="module"` with `async` or Astro island pattern
