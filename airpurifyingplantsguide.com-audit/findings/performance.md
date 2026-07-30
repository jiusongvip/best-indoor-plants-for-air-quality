# Performance / Core Web Vitals Findings

**Score: 75/100**

## Strengths
- Lazy loading on all plant card images
- All images in WebP format
- Minimal JavaScript (recommendation tool + mobile menu only)
- Tailwind CSS v4 with purge capability
- preconnect hints for Google Fonts CDN

## Issues
| Issue | Severity | Impact |
|-------|----------|--------|
| Google Fonts external render-blocking | **High** | +150-300ms LCP |
| No responsive image srcset | Medium | Wasted mobile bandwidth |
| No prefetch/prerender hints | Medium | Delayed navigation |
| Recommender inline script without defer | Low | Minor render blocking |

## Recommendations
1. Self-host Geist and Geist Mono fonts (download from GitHub, serve from /public/fonts/)
2. Generate multiple image sizes and use srcset + sizes attributes
3. Add prefetch hints for top 3 plant pages on homepage
4. Add defer to recommendation tool script
