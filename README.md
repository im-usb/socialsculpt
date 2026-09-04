# SocialSculpt

A Next.js 14 (App Router) + Tailwind marketing site for SocialSculpt, a UGC & social media growth agency.

## Design system
- Colors: `ink` (#111111), `paper` (#F5F1E9), `coral` (#FF5A3C), `lime` (#C8FF3D) — see `tailwind.config.ts`
- Fonts: Anton (display/headlines) + Space Mono (body/labels), self-hosted via `@fontsource`
- Central content file: `lib/content.ts` — edit this to change all copy, stats, services, case studies, and testimonials without touching components

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Structure
- `app/page.tsx` — homepage (hero, services, myths, stats, case studies, testimonials, CTA)
- `app/services/page.tsx` — full services breakdown
- `app/case-studies/page.tsx` — case study grid
- `app/about/page.tsx` — about page
- `app/contact/page.tsx` — contact form (currently client-side only; wire up to an email service or API route to actually receive submissions)
- `components/` — Header, Footer, StatsCounter (animated on scroll), LogoMarquee

## Notes
- All client names, case studies, and testimonials are placeholder content — swap in your own real clients in `lib/content.ts`.
- The hero video is a placeholder block; drop in a real video (Vimeo/Cloudinary embed or local file) where marked.
- The contact form currently just shows a success message on submit — connect it to Formspree, Resend, or an API route to actually send messages.
