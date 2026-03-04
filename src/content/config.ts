import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),

    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    author: z.string().default("Pawan Kumar"),

    tags: z.array(z.string()).optional(),

    image: z.string().optional(),

    featured: z.boolean().default(false),

    draft: z.boolean().default(false),

    canonicalURL: z.string().url().optional()
  })
});

export const collections = {
  blog
};