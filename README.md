# NJ Web Studio

Lead-focused web design and local SEO for New Jersey service businesses. Built with Astro, TypeScript, and Tailwind CSS.

## Tech Stack

- **Astro** – Static site framework
- **TypeScript** – Type safety
- **Tailwind CSS** – Design system and utilities
- **Render** – Static site deployment

## Local Setup

### Prerequisites

- Node.js 22.12.0 or later

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

Output is written to `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Deploy to Render

### Option 1: GitHub + Render (Recommended)

1. Push this repo to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com).
3. Click **New** → **Static Site**.
4. Connect your GitHub repository.
5. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Add custom domain: `njwebstudio.net` (or your domain).
7. Render will auto-deploy on every push.

### Option 2: Manual Deploy

1. Run `npm run build`.
2. Upload the contents of `dist/` to any static host (Render, Netlify, Vercel, etc.).

## Form Handling

The audit form supports production lead capture via **Formspree**:

1. Create a form at [formspree.io](https://formspree.io) (free tier).
2. Copy your form ID (e.g. `xrgzwqab`).
3. Set `PUBLIC_FORMSPREE_ID=xrgzwqab` in `.env` or in your hosting environment.
4. Form will POST to Formspree and redirect to `/thank-you` on success.

Without `PUBLIC_FORMSPREE_ID`, the form falls back to GET `/thank-you` (demo mode).

## Launch Checklist

Before going live:

1. **Contact details:** Set `PUBLIC_PHONE`, `PUBLIC_EMAIL` in `.env` or hosting env.
2. **Form capture:** Set `PUBLIC_FORMSPREE_ID` (see Form Handling above).
3. **Domain:** Update `site` in `astro.config.mjs` and `SITE.url` in `src/config/site.ts` if needed.
4. **Verify:** Run `npm run build` and `npm run preview` to test.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── config/         # Site config and constants
├── layouts/        # Page layouts
├── pages/          # Astro pages (file-based routing)
└── styles/         # Global CSS
public/             # Static assets
```

## Site Architecture

- `/` – Homepage
- `/web-design-new-jersey` – Web design services
- `/website-redesign-new-jersey` – Redesign services
- `/local-seo-new-jersey` – Local SEO
- `/google-business-profile-optimization-nj` – GBP optimization
- `/website-maintenance-care-plans` – Care plans
- `/results` – Results and approach
- `/contact` – Contact and audit form
- `/about` – About page
- `/web-design-dentists-new-jersey` – Dentists niche
- `/web-design-med-spas-new-jersey` – Med spas niche
- `/web-design-law-firms-new-jersey` – Law firms niche

## License

Proprietary – NJ Web Studio
