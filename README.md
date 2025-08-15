# Vibes Only ✨

Simple, low‑stakes project ideas to spark momentum.

This repo contains a small Vue 3 app that surfaces bite‑sized ideas from a curated JSON library. Tap the button to “get vibing,” and copy any idea as Markdown to kickstart your next micro‑project.

## Quick start

```bash
cd 10-app/vibes-only
npm install
npm run dev
```

The dev server URL will be printed in the terminal (Vite default is http://localhost:5173).

## Features

- Randomized, non‑repeating idea deck (preloaded queue)
- One‑click copy to Markdown (title, summary, objective, tags)
- Light/dark theme with persistence
- Subtle particle/glow animations
- Built‑in “Guide” page for going from idea → v1

## Tech stack

- Vue 3 + TypeScript
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Vue Router 4

## Scripts

```bash
# Start dev server
npm run dev

# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview
```

## Related

- Frontend repo (this project): `https://github.com/shaarselhorst/vibes-only`
- Companion backend (optional): `https://github.com/shvdg-developer/vibes-only-served`
