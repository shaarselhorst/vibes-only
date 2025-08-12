# Vibes Only

AI project idea spinner: single-screen, one-hour build ideas for practicing with AI coding tools.

## Features
- Random idea generator with particle effects
- Shows up to three recent ideas; avoids duplicates
- Dark/light theme toggle (persists to `localStorage`)
- Two routes: `Home` (ideas) and `Guide` (build flow tips)
- No backend — ideas are static JSON; deploy anywhere

## Tech Stack
- Vue 3 + TypeScript, Vue Router
- Vite 7
- Tailwind CSS 4 via `@tailwindcss/vite`

## Quick Start
```bash
cd 10-app/vibes-only
npm install
npm run dev
```
App runs at `http://localhost:5173`.

Build/preview:
```bash
npm run build
npm run preview
```

## Repo Layout
- `10-app/vibes-only/`: the Vue app
- `93-prompts/`: prompts used to create the app and content
- `95-designs/`: initial concept notes and guide drafts

## Add Ideas
Put JSON files in `10-app/vibes-only/src/data/ideas/` with this shape:
```json
{
  "id": "your-idea-id",
  "title": "Your Project Title",
  "summary": "One sentence on what it does",
  "objective": "Short paragraph on the goal and scope",
  "tags": ["tag1", "tag2"]
}
```

Guidelines: keep scope small (1–3 features), concrete, and achievable in ~1 hour.
