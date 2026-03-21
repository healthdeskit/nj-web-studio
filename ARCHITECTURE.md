# NJ Web Studio – Architecture Summary

## Stack Decisions

- **Astro** – Static-first, fast, SEO-optimized. Ideal for marketing sites.
- **TypeScript** – Type safety and maintainability.
- **Tailwind CSS** – Design system, utilities, and responsive layout.
- **Render** – Static site hosting with GitHub integration, CDN, TLS, custom domains.

## Design System

- **Typography:** DM Sans (body), DM Serif Display (headings)
- **Colors:** Stone palette for neutrals, custom primary (#1e3a5f), accent (#c9a227)
- **Components:** btn-primary, btn-secondary, btn-accent, card-premium, section-padding, content-width
- **Layout:** Max-width containers, mobile-first, clear visual hierarchy

## Page Architecture

| Page | Purpose | Word Count Target |
|------|---------|-------------------|
| / | Homepage, conversion funnel | 800+ |
| /web-design-new-jersey | Core service, packages | 1000+ |
| /website-redesign-new-jersey | Redesign offering | 600+ |
| /local-seo-new-jersey | SEO services, packages | 800+ |
| /google-business-profile-optimization-nj | GBP offering | 600+ |
| /website-maintenance-care-plans | Care plans | 600+ |
| /results | Proof and approach | 700+ |
| /contact | Lead capture | 400+ |
| /about | Trust and positioning | 500+ |
| Niche pages (3) | Dentists, med spas, law firms | 800+ each |

## Component Plan

- **Layout:** BaseLayout (SEO, Schema, Header, Footer)
- **Sections:** Hero, TrustStrip, ServicesSection, WhyMostFail, ResultsPreview, IndustriesSection, ProcessSection, FAQSection, CTASection
- **Forms:** AuditForm (inline, sidebar, full variants)
- **Utility:** SEO, Schema, Breadcrumb

## SEO Implementation

- Canonical tags on all pages
- Open Graph and Twitter card meta
- Organization schema (JSON-LD)
- Sitemap via @astrojs/sitemap
- robots.txt in public/
- Semantic heading structure
- Internal linking between service and niche pages

## Deployment

- Build: `npm run build`
- Output: `dist/`
- Render: Connect GitHub, set build command and publish directory
- Custom domain: njwebstudio.net (configure in Render dashboard)
