import { z } from 'zod';

export const scoreSchema = z.object({
  obscurity: z.number().min(0).max(100),
  strangeness: z.number().min(0).max(100),
  significance: z.number().min(0).max(100),
  visualAppeal: z.number().min(0).max(100),
  conversationPower: z.number().min(0).max(100),
});

export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  hook: z.string(),
  summary: z.string(),
  whyStrange: z.string(),
  tags: z.array(z.string()).min(1),
  collectionIds: z.array(z.string()).default([]),
  relatedIds: z.array(z.string()).default([]),
  image: z.string().nullable().optional(),
  wikipediaUrl: z.string().url().optional(),
  coordinates: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .nullable()
    .optional(),
  scores: scoreSchema,
});

export const collectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  articleIds: z.array(z.string()),
  accent: z.string(),
});

export const atlasSchema = z.object({
  generatedAt: z.string(),
  articles: z.array(articleSchema),
  collections: z.array(collectionSchema),
  themes: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
    }),
  ),
});
