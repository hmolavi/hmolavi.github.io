# hmolavi.com

Personal portfolio website for Hossein Molavi — Computer Engineering @ University of Waterloo.

**Live:** [hmolavi.com](https://hmolavi.com)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## Architecture

This portfolio is driven by two repositories:

| Repo                                 | Purpose                                                   |
| ------------------------------------ | --------------------------------------------------------- |
| `HosseinMolaviPortfolio` (this repo) | Next.js frontend — layout, components, styling            |
| `resume` (private)                   | LaTeX resume source + parser that generates `resume.json` |

A Node script (`resume/scripts/parse-latex.js`) parses `website.tex` into structured JSON. A GitHub Action in the resume repo automatically syncs the generated `resume.json` into `src/data/resume.json` here, keeping content in sync with the LaTeX resume without manual duplication.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run lint`  | Run ESLint               |
