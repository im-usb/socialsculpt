import { groq } from "next-sanity";
import { client } from "./client";
import { isSanityConfigured } from "../env";
import { caseStudies as fallbackCaseStudies } from "@/lib/content";

export type SanityCaseStudy = {
  _id: string;
  brand: string;
  slug: string;
  category?: string;
  type?: string;
  coverImage?: any;
  summary?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  body?: any[];
  publishedAt?: string;
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  coverImage?: any;
  excerpt?: string;
  body?: any[];
  author?: string;
  publishedAt: string;
};

const caseStudyListQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id, brand, "slug": slug.current, category, type, coverImage,
    summary, stat1Value, stat1Label, stat2Value, stat2Label, publishedAt
  }
`;

const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id, brand, "slug": slug.current, category, type, coverImage,
    summary, stat1Value, stat1Label, stat2Value, stat2Label, body, publishedAt
  }
`;

const postListQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, "slug": slug.current, coverImage, excerpt, author, publishedAt
  }
`;

const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, coverImage, excerpt, body, author, publishedAt
  }
`;

// Normalizes the local fallback data (lib/content.ts) into the same shape
// as the Sanity documents, so pages don't need two render paths.
function fallbackAsSanityShape(): SanityCaseStudy[] {
  return fallbackCaseStudies.map((c) => ({
    _id: c.slug,
    brand: c.brand,
    slug: c.slug,
    category: c.category,
    type: c.type,
    summary: c.summary,
    stat1Value: c.stat1.value,
    stat1Label: c.stat1.label,
    stat2Value: c.stat2.value,
    stat2Label: c.stat2.label,
  }));
}

export async function getCaseStudies(): Promise<SanityCaseStudy[]> {
  if (!isSanityConfigured) return fallbackAsSanityShape();
  try {
    return await client.fetch(caseStudyListQuery, {}, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("Sanity fetch failed, falling back to static content:", err);
    return fallbackAsSanityShape();
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<SanityCaseStudy | null> {
  if (!isSanityConfigured) {
    return fallbackAsSanityShape().find((c) => c.slug === slug) ?? null;
  }
  try {
    return await client.fetch(caseStudyBySlugQuery, { slug }, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("Sanity fetch failed, falling back to static content:", err);
    return fallbackAsSanityShape().find((c) => c.slug === slug) ?? null;
  }
}

export async function getPosts(): Promise<SanityPost[]> {
  if (!isSanityConfigured) return [];
  try {
    return await client.fetch(postListQuery, {}, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("Sanity fetch failed:", err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch(postBySlugQuery, { slug }, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("Sanity fetch failed:", err);
    return null;
  }
}
