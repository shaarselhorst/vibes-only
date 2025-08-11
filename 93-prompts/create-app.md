## AI Execution Prompt: Build the MVP for “Vibes Only”

You are an AI coding assistant working in this repository on Windows PowerShell. Build the single‑page app MVP as specified in `95-todo/TODO.md`.

Follow these workspace rules:
- 10-vue-typescript
- 20-vite
- 30-tailwind
- 50-project-structure
- 60-data-loading

Key decisions:
- Store idea JSON under `src/data/ideas/` to enable `import.meta.glob` bundling at startup (preferred over `public/` for this use case per 60-data-loading).
- Use Vue 3 + TypeScript, Tailwind, Vite; add an `@` alias to `src`.

### Tasks

1) Scaffold app under `10-app/vibes-only`

2) Data model and loading
- Create `src/types/idea.ts`:
  ```ts
  export interface Idea { id: string; title: string; description: string; tags: string[] }
  ```
- Create `src/data/ideas/` with at least 2 JSON samples (use examples from the TODO).
- Create `src/data/loadIdeas.ts`:
  ```ts
  import type { Idea } from '@/types/idea'

  const modules = import.meta.glob('@/data/ideas/*.json', { eager: true }) as Record<string, { default: Idea }>
  export const ideas: Idea[] = Object.values(modules).map(m => m.default)

  export function chooseNextIdea(currentId?: string): Idea | null {
    if (ideas.length === 0) return null
    let idx = Math.floor(Math.random() * ideas.length)
    if (currentId && ideas[idx].id === currentId && ideas.length > 1) {
      idx = Math.floor(Math.random() * ideas.length)
    }
    return ideas[idx]
  }
  ```

3) UI components
- `src/components/VibeButton.vue` using `<script setup lang="ts">`, emits `click`, styled with Tailwind.
- `src/components/IdeaCard.vue` that accepts a typed `idea` prop and displays title, description, and tag pills.
- `src/App.vue`:
  - Import `ideas` and `chooseNextIdea`.
  - Minimal state: current idea ref; on click, pick random idea with immediate repeat guard.
  - Layout: centered column; large primary button labeled “Start vibing!”; result card below; accessible focus states.

4) Wiring and polish
- `src/main.ts` mounts `App.vue` and imports `tailwind.css`.
- Ensure no network calls except static asset loading; no persistence.
- Keep code TypeScript-first, typed `defineProps/defineEmits`, no `any`.
- Match 50-project-structure guidelines.

### Commands (PowerShell, non-interactive)

Note: Use non-interactive defaults; do not pause for prompts.

### Acceptance criteria (must meet all)
- `npm run dev` starts without errors.
- Page shows a prominent “Start vibing!” button.
- App loads and aggregates all `src/data/ideas/*.json` at startup via `import.meta.glob`.
- Clicking the button shows a random idea with no immediate repeats.
- No backend; no external network calls.
- Clean TypeScript, Vue SFCs with `<script setup lang="ts">`, Tailwind utilities for styling.

### Deliverables
- Working app under `10-app/vibes-only`.

### Verification
- Start dev server and confirm:
  - Button renders with accessible focus styles.
  - First click selects an idea; repeated clicks rarely repeat, and never twice in a row if multiple ideas exist.
  - No console errors; types are strict.