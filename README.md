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

The contact/audit form currently submits via GET to `/thank-you` for demo purposes. For production:

- **Formspree:** `action="https://formspree.io/f/YOUR_ID" method="POST"`
- **Netlify Forms:** Add `data-netlify="true"` to the form (if deploying to Netlify)
- **Render:** Use a serverless function or external form service

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
