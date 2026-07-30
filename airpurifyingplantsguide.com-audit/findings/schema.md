# Schema & Structured Data Findings

**Score: 78/100**

## Implemented Schemas
| Schema Type | Location | Status |
|-------------|----------|--------|
| Organization | Layout.astro (all pages) | ✅ |
| WebSite | Layout.astro (all pages) | ✅ |
| CollectionPage + ItemList | Homepage | ✅ |
| FAQPage | /faq | ✅ |
| Article | Blog posts (4) | ✅ |
| Thing + PropertyValue | Plant detail pages | ✅ |

## Missing Schemas
| Schema | Pages Missing | Priority |
|--------|---------------|----------|
| BreadcrumbList | All pages with breadcrumbs (~20 pages) | **High** |
| Article.image | Blog posts | Medium |
| Product (instead of Thing) | Plant detail pages | Medium |

## Recommendations
1. Add BreadcrumbList schema — breadcrumb HTML already exists, just needs JSON-LD
2. Upgrade `@type: Thing` to `@type: Product` on plant pages
3. Add `image` property to all Article schemas in blog posts
4. Expand Organization schema to include `@type: ['Organization', 'Publisher']`
