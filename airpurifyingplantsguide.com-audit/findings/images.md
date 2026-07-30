# Images Findings

**Score: 80/100**

## Image Inventory
| Property | Count | Status |
|----------|-------|--------|
| Plant images | 15 | ✅ All present |
| Format | WebP | ✅ |
| Alt text | 15/15 | ✅ |
| Lazy loading | PlantCard | ✅ |
| Explicit dimensions | Detail page | ✅ |
| Responsive srcset | 0/15 | ❌ Missing |
| Per-plant OG images | 0 | ❌ Using single fallback |

## Issues
1. **No responsive srcset** — all viewports download the same file
2. **Single OG image** — `/og-image.jpg` used for all pages. Plant shares lack relevant visuals.
3. **Recommender uses emojis** — recommendation results show emoji, not real plant images

## Recommendations
1. Generate 400w, 800w, 1200w variants for each plant image
2. Implement srcset: `<img srcset="...400w,...800w" sizes="(max-width:768px) 100vw, 50vw">`
3. Create per-plant OG images using existing plant photos
4. Include plant thumbnail images in recommendation results
