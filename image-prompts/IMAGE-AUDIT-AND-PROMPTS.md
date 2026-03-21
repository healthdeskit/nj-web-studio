# NJ Web Studio — Complete Image Audit & Intent-Based Prompts

## Scan Summary

| Page | Hero | Section Images | Current Status |
|------|------|----------------|----------------|
| **Homepage** | Yes (image) | WhyMostFail, ResultsPreview, IndustriesSection | Hero has image; sections have none |
| **Web Design** | Page (no image) | Niche cards, packages | No images |
| **Website Redesign** | Page (no image) | Framework, packages | No images |
| **Local SEO** | Page (no image) | Packages, GBP link | No images |
| **GBP Optimization** | Page (no image) | Offers | No images |
| **Care Plans** | Page (no image) | Plan options | No images |
| **Results** | Page (no image) | Proof cards | No images |
| **About** | Page (no image) | Industries | No images |
| **Contact** | Page (no image) | Form | No images |
| **Dentists niche** | Page (no image) | **Main section image** | Has dentists.webp (wrong intent) |
| **Med Spas niche** | Page (no image) | **Main section image** | Has med-spas.webp (wrong intent) |
| **Law Firms niche** | Page (no image) | **Main section image** | Has law-firms.webp (wrong intent) |

---

## Total Images Needed: 8

### Reasoning

| # | Image | Placement | Business Goal | Why It Helps |
|---|-------|-----------|---------------|--------------|
| 1 | **hero-website-growth** | Homepage hero | Trust + service clarity | First impression: "We build lead-gen websites." Converts cold visitors. |
| 2 | **og-image** | All pages (social) | Brand recognition | Already exists. Keeps consistency on shares. |
| 3 | **why-most-fail** | WhyMostFail section | Credibility | Shows "audit/analysis" — we find conversion gaps. Reduces skepticism. |
| 4 | **results-preview** | ResultsPreview section | Proof | Shows results/dashboard — we deliver outcomes. Increases conversion. |
| 5 | **dentists** | Dentists niche page | Niche trust | Laptop with DENTAL WEBSITE — "We build sites for dentists." |
| 6 | **med-spas** | Med spas niche page | Niche trust | Laptop with MED SPA WEBSITE — "We build sites for med spas." |
| 7 | **law-firms** | Law firms niche page | Niche trust | Laptop with LAW FIRM WEBSITE — "We build sites for law firms." |
| 8 | **industries-hero** | IndustriesSection (home) | Service scope | Optional: one image showing "3 industries, 1 expertise" — or skip. |

**Skip:** Service pages (Web Design, Redesign, SEO, GBP, Care Plans) have dense content; adding hero images would need layout changes. Focus on high-impact placements first.

---

## Intent-Based Prompts (Final)

### 1. hero-website-growth.webp — Homepage Hero
**Placement:** Hero right column (home only)  
**Intent:** "We build websites that generate leads and local visibility."  
**Dimensions:** 840×840 (square, object-cover) / 480×360 min

**Prompt:**  
Professional marketing image. Laptop on desk displaying a modern, clean service business website on screen (dental/medical/law style—trust-focused layout). Soft office background blurred. Warm lighting, navy and gold accents. Conveys lead generation and growth. Photorealistic. No text on image.

---

### 2. og-image.jpg — Social Sharing
**Placement:** Open Graph, all pages  
**Intent:** Brand recognition on LinkedIn, Facebook, etc.  
**Dimensions:** 1200×630

**Prompt:**  
Open Graph image 1200x630. Clean gradient background navy blue and gold. Minimal geometric shapes suggesting growth. Professional, premium, minimalist. NJ Web Studio brand feel. No text.

---

### 3. why-most-fail.webp — WhyMostFail Section
**Placement:** Right column of "Why Most Local Business Websites Don't Convert"  
**Intent:** "We audit and identify conversion gaps."  
**Dimensions:** 400×300+

**Prompt:**  
Professional image. Laptop screen showing website audit or analytics dashboard with highlighted issues—red/yellow markers, performance metrics. Desk setting, focused professional vibe. Conveys analysis and problem-solving. Photorealistic. No text overlay.

---

### 4. results-preview.webp — ResultsPreview Section
**Placement:** Above or beside "How We Approach Results" cards  
**Intent:** "We deliver measurable outcomes."  
**Dimensions:** 600×400+

**Prompt:**  
Professional image. Laptop or tablet showing website analytics dashboard—traffic growth, conversion metrics, clean charts. Upward trend, positive data. Conveys results and progress. Photorealistic. No text overlay.

---

### 5. dentists.webp — Dentists Niche Page
**Placement:** Full-width below hero, above "Dental Practices Need Trust"  
**Intent:** "We build dental practice websites."  
**Dimensions:** 1200×800

**Prompt:**  
Professional image. Laptop or monitor displaying a modern dental practice website on screen—clean layout, provider photos, appointment CTA visible. Trust-focused design. Desk or office setting. Photorealistic. No text overlay. Focus on the WEBSITE as product, not dental office interior.

---

### 6. med-spas.webp — Med Spas Niche Page
**Placement:** Full-width below hero, above "Med Spas Need Aesthetic Excellence"  
**Intent:** "We build med spa websites."  
**Dimensions:** 1200×800

**Prompt:**  
Professional image. Laptop or monitor displaying a premium med spa website on screen—elegant layout, treatment imagery, booking CTA. Luxurious aesthetic. Desk setting. Photorealistic. No text overlay. Focus on the WEBSITE as product, not spa interior.

---

### 7. law-firms.webp — Law Firms Niche Page
**Placement:** Full-width below hero, above "Law Firms Need Authority"  
**Intent:** "We build law firm websites."  
**Dimensions:** 1200×800

**Prompt:**  
Professional image. Laptop or monitor displaying a professional law firm website on screen—authoritative layout, attorney profiles, consultation CTA. Serious, credible design. Desk setting. Photorealistic. No text overlay. Focus on the WEBSITE as product, not law office interior.

---

## Implementation Order

1. Generate images 1, 3, 4, 5, 6, 7 (skip 2 if og-image exists and is good)
2. Copy to `public/images/` and `public/images/niches/`
3. Update Hero.astro (1), WhyMostFail.astro (3), ResultsPreview.astro (4), niche pages (5,6,7)
4. Update image-prompts/README.md with new paths

---

## Component Changes Required

- **Hero.astro** — Already has hero-website-growth; ensure path correct
- **WhyMostFail.astro** — Add right-column image slot for why-most-fail.webp
- **ResultsPreview.astro** — Add image slot above/beside cards for results-preview.webp
- **Niche pages** — Already reference niches/*.webp; replace files
