# Images Findings

**Score: 80/100**

## Image Inventory

| Property | Count | Status |
|----------|-------|--------|
| Plant images (WebP) | 15 | ✅ All present |
| Alt text | 15/15 | ✅ Descriptive |
| Lazy loading | PlantCard | ✅ |
| Explicit dimensions (detail) | 15/15 | ✅ 1200x900 |
| Explicit dimensions (card) | 15/15 | ✅ 400x300 |
| Aspect-ratio containers | 15/15 | ✅ CLS mitigation |
| Responsive srcset | 0/15 | ❌ Missing |
| Per-plant OG images | 0 | ❌ Using single fallback |

## Issues

| # | Issue | Severity | Detail |
|---|-------|----------|--------|
| 1 | No responsive srcset | **Medium** | All viewports download same file. Mobile wastes bandwidth on desktop-sized images. |
| 2 | Single OG image | **Low** | `/og-image.jpg` used for all 30 pages. Plant page shares lack relevant visuals. |
| 3 | Recommender uses emoji | **Low** | Recommendation results show emoji (🌿) instead of real plant thumbnails. |

## Image Sizes

| Plant | File | Size (est) |
|-------|------|------------|
| All 15 plants | `public/images/plants/*.webp` | 15-60 KB each |
| OG image | `public/og-image.jpg` | ~50 KB |
| Favicon | `public/favicon.svg` | ~0.5 KB |

## Recommendations

1. **Generate responsive variants**: 400w (card), 800w (detail half), 1200w (full width)
2. **Implement srcset**:
   ```html
   <img srcset="plant-400w.webp 400w, plant-800w.webp 800w, plant-1200w.webp 1200w"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
        src="plant-800w.webp" alt="...">
   ```
3. **Create per-plant OG images** using existing plant photos with text overlay
4. **Add plant thumbnails** to recommendation tool results for higher engagement
