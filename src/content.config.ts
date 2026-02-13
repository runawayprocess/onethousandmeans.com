import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const issues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/issues' }),
  schema: z.object({
    title: z.string(),
    issueNumber: z.number(),
    issueTitle: z.string(),
    section: z.enum(['essays', 'reviews', 'conversations']),
    author: z.string(),
    authorBio: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(true),
    accentColor: z.string().default('#800020'),
    layout: z.enum(['article', 'conversation']).default('article'),
    interviewee: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { issues };
