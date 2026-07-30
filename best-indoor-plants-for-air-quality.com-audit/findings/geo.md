# AI Search Readiness (GEO) Findings

**Score: 82/100**

## Strengths
- llms.txt present with complete site structure (44 lines, all 30+ pages listed)
- Rich schema markup: FAQPage (8 Q&As), Article (4 posts), CollectionPage (15 plants)
- Factual content with cited primary sources (NASA, EPA, ASPCA)
- FAQ format directly targets featured snippets and AI answer boxes
- Clean heading hierarchy (H1 → H2 → H3) aids passage extraction
- Authoritative outbound citations to peer-reviewed journals
- Balanced, nuanced content — avoids overclaiming, builds citability trust

## AI Citability Assessment

| Signal | Status | Weight |
|--------|--------|--------|
| llms.txt | ✅ Present, comprehensive | High |
| Schema markup | ✅ Rich (FAQ, Article, Collection) | High |
| Source citations | ✅ NASA, EPA, ASPCA, journals | High |
| Author expertise | ❌ Missing (Organization only) | **Critical** |
| Brand mentions | ❌ No monitoring | Low |
| Section-level anchors | ⚠️ Top-level only | Medium |

## Perplexity/ChatGPT Readiness

| Criteria | Status | Notes |
|----------|--------|-------|
| Direct answers to questions | ✅ | FAQ page has 8 well-framed Q&As |
| Cited statistics | ✅ | Purification scores, NASA removal rates |
| Balanced perspective | ✅ | Acknowledges study limitations |
| Readable prose | ✅ | 8th grade reading level target |
| Named expert | ❌ | No human author to cite |
| Brand distinctiveness | ⚠️ | Generic niche name, low brand recognition |

## Recommendations

### Critical (Fix Before Launch)
1. **Add named author with expertise bio** to every page. AI citation algorithms heavily weight content attributed to named humans with credentials. Even one persona ("Alex Chen, Plant Biologist") across all content significantly improves citability. Add to:
   - Blog post Article schemas (`author.name`)
   - Plant page schemas
   - Visible byline on each post

### High Priority
2. **Extend llms.txt with section anchors** for granular AI passage extraction:
   ```
   - [Snake Plant - Care Guide](https://best-indoor-plants-for-air-quality.com/plants/snake-plant#care-guide)
   - [NASA Study - Results](https://best-indoor-plants-for-air-quality.com/nasa-clean-air-study#key-findings)
   ```

### Ongoing
3. **Set up brand mention monitoring** across AI platforms:
   - Google Alerts for "Air Purifying Plants Guide"
   - Monthly ChatGPT/Perplexity/Gemini queries: "best indoor plants for air quality site:best-indoor-plants-for-air-quality.com"
4. **Consider `llms-full.txt`** for complete content extraction by AI crawlers
