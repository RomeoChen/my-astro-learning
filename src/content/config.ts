import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image(),
  }),
});

const product = defineCollection({
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    price: z.string(),
    createDate: z.coerce.date(),
    productImage: z.string().optional(),
  }),
});

export const collections = { blog, product };
