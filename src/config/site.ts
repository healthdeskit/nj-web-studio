// Before launch: Set real phone, email. For form: create form at formspree.io and set PUBLIC_FORMSPREE_ID
export const SITE = {
  name: 'NJ Web Studio',
  domain: 'njwebstudio.net',
  url: 'https://njwebstudio.net',
  tagline: 'Lead-Focused Web Design & Local SEO for New Jersey Service Businesses',
  supportingMessage: 'Not just a website. A lead-focused growth system.',
  description: 'We build websites that help NJ service businesses get more calls, more trust, and better local visibility.',
  phone: import.meta.env.PUBLIC_PHONE || '(973) 555-0123',
  email: import.meta.env.PUBLIC_EMAIL || 'hello@njwebstudio.net',
  formspreeId: import.meta.env.PUBLIC_FORMSPREE_ID || '',
  location: {
    address: import.meta.env.PUBLIC_ADDRESS || 'New Jersey',
    region: 'NJ',
  },
} as const;

export const CTAS = {
  primary: 'Get a Free Website & SEO Audit',
  secondary: 'Book a 15-minute call',
} as const;

export const NAV_LINKS = [
  { href: '/web-design-new-jersey', label: 'Web Design' },
  { href: '/website-redesign-new-jersey', label: 'Website Redesign' },
  { href: '/local-seo-new-jersey', label: 'Local SEO' },
  { href: '/google-business-profile-optimization-nj', label: 'Google Business' },
  { href: '/website-maintenance-care-plans', label: 'Care Plans' },
  { href: '/results', label: 'Results' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
