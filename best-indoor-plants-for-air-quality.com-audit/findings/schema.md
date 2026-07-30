# Schema & Structured Data Findings

**Score: 78/100**

## Implemented Schemas

| Schema Type | Location | Status |
|-------------|----------|--------|
| Organization | Layout.astro (all pages) | ✅ |
| WebSite | Layout.astro (all pages) | ✅ |
| CollectionPage + ItemList | Homepage (15 plants, with itemListElement) | ✅ |
| FAQPage | /faq (8 Q&A pairs) | ✅ |
| Article | Blog posts (4 posts, with headline/description/date/author/publisher) | ✅ |
| Thing + PropertyValue | Plant detail pages (score, difficulty, light, pet safety, toxins) | ✅ |

## Missing Schemas

| Schema | Pages Missing | Priority |
|--------|---------------|----------|
| BreadcrumbList | All 20+ pages with visual breadcrumbs | **High** |
| Article.image | 4 blog posts | Medium |
| Product (instead of Thing) | 15 plant detail pages | Medium |
| ImageObject | Plant page images | Low |

## Recommendations

1. **Add BreadcrumbList schema** — breadcrumb HTML already exists, just needs JSON-LD. Generate dynamically from `Astro.url.pathname` in Layout.astro.
2. **Upgrade `@type: Thing` to `@type: Product`** on plant pages — enables Google Shopping-like features. Add `offers` if affiliate links are planned.
3. **Add `image` property** to all Article schemas in blog posts — use `og-image.jpg` or per-post OG images.
4. **Add `dateModified`** to plant page schemas.
5. **Expand Organization schema** to include `@type: ['Organization', 'Publisher']` with full logo URL.

## Schema Coverage

```
Pages with schema:    30/30 (100%)
Schema types:         6 types across site
Missing breadcrumbs:  ~20 pages
```
