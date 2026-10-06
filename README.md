# SocialSculpt

A Next.js 14 (App Router) + Tailwind marketing site for SocialSculpt, a UGC & social media growth agency, with case studies and blog posts backed by [Sanity](https://www.sanity.io) (a headless CMS with a visual editor).

## Design system
- Colors: `ink` (#111111), `paper` (#FFFFFF), `lime` (#C7F464), `coral` (#FF5A3C) — see `tailwind.config.ts`
- Fonts: Anton (display/headlines), Playfair Display italic (accent word), Space Mono (body/labels) — self-hosted via `@fontsource`
- `lib/content.ts` — static fallback copy (stats, services, myths, testimonials, and seed case studies) used anywhere Sanity isn't configured yet

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site runs immediately on placeholder content, no CMS setup required.

## Connecting Sanity (case studies + blogs)

1. **Create a Sanity project** (free tier is enough):
   ```bash
   npx sanity@latest init
   ```
   Choose "Create new project", pick a project name, and use dataset name `production`. When it asks about a schema/template, you can say no — this repo already has the schema in `sanity/schemaTypes/`.

   (Or create one at https://www.sanity.io/manage if you prefer the browser.)

2. **Copy the project ID** it gives you, then create `.env.local` from the example:
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Run the app** and open the embedded Studio at **http://localhost:3000/studio**. Log in with the same account you used in step 1. You'll see "Case Study" and "Blog Post" document types ready to fill in.

4. **CORS**: the first time you load `/studio`, Sanity may ask you to allow `http://localhost:3000` as an origin — click through the prompt (or add it manually under API → CORS Origins in sanity.io/manage). Add your production domain there too once you deploy.

5. Publish a case study or post in the Studio — it shows up on `/case-studies` or `/blogs` within 60 seconds (pages revalidate on that interval), or instantly on refresh in dev.

Until you complete these steps, `/case-studies` shows the seed data from `lib/content.ts` and `/blogs` shows an empty state pointing you to `/studio` — nothing breaks either way.

## Structure
- `app/(site)/` — all public marketing pages (home, services, case studies, blogs, about, contact), wrapped in `Header`/`Footer` via `app/(site)/layout.tsx`
- `app/studio/[[...tool]]/page.tsx` — embedded Sanity Studio, deliberately outside the `(site)` group so it renders full-screen without the site header/footer
- `sanity/schemaTypes/` — `caseStudy.ts` and `post.ts` document schemas
- `sanity/lib/queries.ts` — GROQ queries + fetch helpers (`getCaseStudies`, `getCaseStudyBySlug`, `getPosts`, `getPostBySlug`); each falls back to `lib/content.ts` seed data if Sanity isn't configured
- `sanity/lib/client.ts`, `sanity/lib/image.ts` — Sanity client + image URL builder
- `sanity.config.ts` — Studio configuration (schema, plugins)

## Build for production

```bash
npm run build
npm start
```

## Deploying
Deploy like any Next.js app (Vercel is the path of least resistance). Add the same three `NEXT_PUBLIC_SANITY_*` env vars in your host's dashboard, and add your production URL to Sanity's CORS origins so `/studio` works there too.

## Notes
- All client names, case studies, and testimonials in `lib/content.ts` are placeholder content — replace via the Studio once Sanity is connected, or edit the file directly for the static fallback.
- The contact form is client-side only right now — wire it to Formspree, Resend, or an API route to actually receive submissions.
- Blog posts and case studies support rich text (Portable Text) with embedded images, rendered via `@portabletext/react`.
