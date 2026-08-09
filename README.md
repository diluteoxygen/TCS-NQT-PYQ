# TCS NQT Question Bank

A fast, offline-first study tool for the TCS National Qualifier Test. Covers coding questions, full MCQ papers, and HR prep — all from verified previous-year sources.

**Live:** https://tcs.oxycodes.online/

> **Disclaimer:** Independent, community-maintained resource. Not affiliated with or endorsed by Tata Consultancy Services (TCS).

---

## What's inside

| Section | Contents |
|---|---|
| **Coding Questions** | 141 problems — verified PYQs + practice. Difficulty tags, topics, sample I/O, hints, reference solutions. |
| **MCQ Bank** | 1,000+ questions across Numerical Ability, Logical Reasoning, Verbal Ability, and Programming. Filter by paper and section. |
| **Previous Year Papers** | 12 full papers (Paper 01–10, PYQ-300, Solved 2024 Morning). Section-by-section, print-friendly. |
| **Study Notes** | 50 HR interview guides + 30 DSA pattern walkthroughs with Java / C++ / Python solutions. |

---

## Features

- **Instant search** — unified `Ctrl+K` / `Cmd+K` command palette across all questions, papers, topics, and notes
- **Progress tracking** — solved, bookmarked, and "needs review" flags saved locally in the browser (no account needed)
- **Random question** — one-click shuffle from the nav bar
- **Dark mode** — system-aware, persisted across sessions
- **✨ NQT Spotlight** — exam pattern summary, score bands with 2026 pay grades, and registration status on the homepage
- **Static build** — Astro + Pagefind; zero server, works offline after first load

---

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production static build → dist/
```

### Re-ingest content from source files

```bash
npm run ingest     # reads legacy/ → writes src/content/
```

---

## Project layout

```
src/
  components/     Spotlight, shared UI
  content/        Markdown collections — coding-questions, mcq-items, papers, topic-notes
  layouts/        Layout.astro (nav, search modal, theme)
  pages/          Routes: /, /coding, /mcq, /papers, /notes + detail pages
  styles/         global.css — design tokens, layout, components
scripts/
  ingest.ts       Raw markdown → structured content pipeline
legacy/           Original source markdown files (read-only reference)
data/             id-map.json, ingest report
public/           favicon, static assets
```

---

## Contributing

- **Wrong answer or typo?** Open an issue.
- **New question?** Edit the appropriate file in `src/content/` and submit a PR. Verified PYQs use `status: verified_pyq`; anything reconstructed or pattern-based uses `status: practice`.
- **UI change?** Keep it scan-speed first. No gradients, no glassmorphism — the app is a study tool, not a landing page.

---

## License

- **Code**: MIT License
- **Content**: CC BY-NC-SA 4.0

See [LICENSE](LICENSE) for details.
