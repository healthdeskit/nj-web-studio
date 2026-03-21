# NJ Web Studio — Image Strategy & Prompts

## Folder Structure
```
public/images/
├── hero-website-growth.webp   # Homepage hero (480x360+)
├── og-image.jpg               # Social sharing 1200x630
├── why-most-fail.webp         # WhyMostFail section (optional)
├── results-preview.webp       # Results section (optional)
└── niches/                    # Niche page visuals
    ├── dentists.webp
    ├── med-spas.webp
    └── law-firms.webp
```

## Image Prompts

### hero-website-growth.webp
**Placement:** Homepage hero, right side  
**Dimensions:** 480×360 minimum (4:3), WebP  
**Alt:** "NJ service business website with lead generation and local SEO growth"

**Prompt:** Professional hero image for a web design and local SEO agency. Clean composition: laptop showing a modern medical or dental practice website on screen, soft blurred office background, warm professional lighting, blue and gold accent colors. Trustworthy, calm, business-focused. No text. Photorealistic.

---

### og-image.jpg
**Placement:** Open Graph / social sharing  
**Dimensions:** 1200×630, JPG or WebP  
**Alt:** N/A (decorative for shares)

**Prompt:** Open Graph image 1200x630 for NJ Web Studio. Clean layout with subtle gradient in navy blue and gold. Simple geometric shapes suggesting growth. Professional, premium, minimalist.

---

### why-most-fail.webp (optional)
**Placement:** WhyMostFail section, right column  
**Dimensions:** 400×300+  
**Alt:** "Medical practice website audit showing conversion gaps"

---

### Section images
- **why-most-fail.webp** — WhyMostFail section: website audit/analytics, conversion gaps
- **results-preview.webp** — ResultsPreview section: analytics dashboard, growth metrics

### Niche images
- **dentists.webp** — Laptop showing dental practice website (trust, appointment CTA)
- **med-spas.webp** — Laptop showing med spa website (premium aesthetic, booking)
- **law-firms.webp** — Laptop showing law firm website (authority, consultation CTA)

## WebP Conversion
Use `cwebp` or online converter. Recommended quality: 80–85.

```bash
cwebp -q 85 input.jpg -o output.webp
```

## Placement Map
| Page | Section | Image | Required |
|------|---------|-------|----------|
| Home | Hero | hero-website-growth | Yes (or gradient placeholder) |
| Home | WhyMostFail | why-most-fail | Optional |
| All | OG | og-image.jpg | Yes |
| Niche pages | Hero/sub | niches/*.webp | Optional |
