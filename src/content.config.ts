import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A Caderneta: cada arquivo .md em src/content/blog vira um post.
// Arquivos começando com "_" (modelo, rascunhos) NUNCA são publicados.
// Frontmatter obrigatório: titulo, descricao, data. Opcional: tags.
const blog = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    data: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
