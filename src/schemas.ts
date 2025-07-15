import { z } from 'astro:content';

/* ── Coding Questions ──────────────────────────────────── */
export const codingQuestionSchema = z.object({
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
    .array(
      z.object({
        lang: z.string(),
        code: z.string(),
        verified: z.boolean(),
      })
    )
    .nullable(),
  ambiguousFormat: z.boolean(),
});

/* ── MCQ Items ─────────────────────────────────────────── */
export const mcqItemSchema = z.object({
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
});

/* ── Papers (grouping MCQ items) ───────────────────────── */
export const paperSchema = z.object({
  id: z.string(),
  title: z.string(),
  sourceFile: z.string(),
  sections: z.array(z.string()),
  questionCount: z.number(),
});

/* ── Topic Notes ───────────────────────────────────────── */
export const topicNoteSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  sourceFile: z.string(),
});
