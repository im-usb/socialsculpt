import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "brand",
      title: "Brand name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "brand", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      description: "e.g. Skincare brand, FMCG / Snacks brand",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Service type",
      description: "e.g. UGC, SMM, SMM + UGC",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "stat1Value",
      title: "Stat 1 — value",
      type: "string",
    }),
    defineField({
      name: "stat1Label",
      title: "Stat 1 — label",
      type: "string",
    }),
    defineField({
      name: "stat2Value",
      title: "Stat 2 — value",
      type: "string",
    }),
    defineField({
      name: "stat2Label",
      title: "Stat 2 — label",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Full case study body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "brand", subtitle: "category", media: "coverImage" },
  },
});
