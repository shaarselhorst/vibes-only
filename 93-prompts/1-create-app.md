## AI Execution Prompt: Complete the MVP for “Vibes Only” using the existing Vue 3 + Tailwind 4.1 app

You are an AI coding assistant working in this repository on Windows PowerShell. Build the single‑page app MVP as specified in `95-todo/TODO.md`, leveraging the already‑working app under `10-app/vibes-only` (Vue 3 + Vite + Tailwind CSS 4.1).

Follow these workspace rules:
- 10-vue-typescript
- 20-vite
- 30-tailwind
- 50-project-structure
- 60-data-loading

Context and key decisions:
- The project at `10-app/vibes-only` is already scaffolded with Vue 3, Vite 7, TypeScript, and Tailwind 4.1 via `@tailwindcss/vite`. Do not re‑scaffold; extend the existing app.
- Store idea JSON under `src/data/ideas/` to enable `import.meta.glob` bundling at startup (preferred over `public/` per 60-data-loading).
- Use an `@` alias to `src` for imports across app code and data loading.

### Setup verification (adjust if missing)

- Tailwind 4.1 is enabled via the Vite plugin. Ensure Tailwind utilities are loaded by adding the following at the very top of `src/style.css` (keep other styles below if desired):
  ```css
  @import "tailwindcss";
  ```
  Make sure `src/main.ts` imports `./style.css` and that the Vite plugin `@tailwindcss/vite` is present in `vite.config.ts`.

- Add the `@` alias:
  - Update `vite.config.ts` to resolve `@` to `src`.
  - Mirror the alias in `tsconfig.app.json` (compilerOptions.paths) per 20-vite.

### Tasks

1) Data model and loading
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

2) UI components
- `src/components/VibeButton.vue` using `<script setup lang="ts">`, emits `click`, styled with Tailwind (large, prominent button with accessible focus styles).
- `src/components/IdeaCard.vue` that accepts a typed `idea` prop and displays title, description, and tag pills.

3) App wiring
- Update `src/App.vue`:
  - Import `ideas` and `chooseNextIdea` from `@/data/loadIdeas`.
  - Keep minimal state: a `ref<Idea | null>` for the current idea; on click, pick a random idea with immediate‑repeat guard.
  - Layout with Tailwind utilities: centered column; large primary button labeled “Start vibing!”; result card below; accessible focus states.

4) Polish and constraints
- `src/main.ts` should mount `App.vue` and import `src/style.css` which in turn imports Tailwind.
- Ensure no network calls except static asset loading; no persistence.
- Keep code TypeScript‑first, typed `defineProps/defineEmits`, no `any`.
- Match 50-project-structure guidelines.

### Commands (PowerShell, non-interactive)

Note: Use non-interactive defaults; do not pause for prompts.

### Acceptance criteria (must meet all)
- `npm run dev` starts without errors.
- Page shows a prominent “Start vibing!” button (Tailwind utilities visible; focus ring accessible).
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