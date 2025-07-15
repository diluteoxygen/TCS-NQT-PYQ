import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ── Coding Questions ──────────────────────────────────── */
const codingQuestions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/coding-questions' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    sourceFile: z.string(),
    status: z.enum(['verified_pyq', 'practice', 'unclassified']),
    difficulty: z.enum(['easy', 'medium', 'hard', 'unclassified']),
    topics: z.array(z.string()),
    constraints: z.string().nullable(),
    sampleInput: z.string().nullable(),
    sampleOutput: z.string().nullable(),
    explanation: z.string().nullable(),
    hint: z.string().nullable(),
    note: z.string().nullable(),
    referenceCode: z
      .array(z.object({ lang: z.string(), code: z.string(), verified: z.boolean() }))
      .nullable(),
    ambiguousFormat: z.boolean(),
  }),
});

/* ── MCQ Items ─────────────────────────────────────────── */
const mcqItems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mcq-items' }),
  schema: z.object({
    id: z.string(),
    paper: z.string(),
    section: z.string(),
    questionNumber: z.number(),
    options: z.array(z.string()).nullable(),
    answer: z.object({
      status: z.enum(['verified', 'missing', 'author_flagged_incorrect_options']),
      raw: z.string().nullable(),
    }),
    authorNote: z.string().nullable(),
  }),
});

/* ── Papers ────────────────────────────────────────────── */
const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    sourceFile: z.string(),
    sections: z.array(z.string()),
    questionCount: z.number(),
  }),
});

/* ── Topic Notes ───────────────────────────────────────── */
const topicNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topic-notes' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    sourceFile: z.string(),
  }),
});

export const collections = {
  'coding-questions': codingQuestions,
  'mcq-items': mcqItems,
  papers,
  'topic-notes': topicNotes,
};
