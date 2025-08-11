### Vibes Only — AI Execution Prompt (for Cursor)

You are my AI pair for Vibes Only. Execute the following with tight, incremental edits. Keep scope to MVP only.

### Mission and Constraints
- **Framework**: Vue 3.5.18 + TypeScript
- **Styling**: Tailwind CSS 4.1
- **Build**: Vite, npm
- **Scope**: Single-page, offline-first. No backend, no auth, no analytics, no remote APIs, no accounts.
- **Project boundary**: Create/modify files only under `10-app/` (app lives in `10-app/vibes-only/`).
- **Data**: Multiple local JSON files, one idea per file, bundled at build time. No runtime network fetches.
- **Ask before adding deps**: Propose, justify, and wait for explicit approval before adding any dependency beyond Vue/Vite/Tailwind.

### Deliverables (MVP)
- App builds and runs locally with `npm run dev`.
- Page shows a prominent “Start vibing!” button.
- On click, display a random idea from locally bundled JSON; prevent immediate repeat via single re-roll.
- Ideas are aggregated once at startup; no network calls beyond static asset load.

### Directory and Files to Produce
Create the app under `10-app/vibes-only/` with this structure:
- `index.html`
- `src/main.ts`
- `src/App.vue`
- `src/components/VibeButton.vue`
- `src/components/IdeaCard.vue`
- `src/data/ideas/` many files, one idea per file (seed with 3–5 examples now)
- `src/styles/tailwind.css`
- `tailwind.config.js` (Tailwind 4.1)

### Data Model and Loading Strategy
- Idea JSON shape:
  ```json
  { "id": "string", "title": "string", "description": "string", "tags": ["string"] }
  ```
- Place idea files under `src/data/ideas/` so they can be bundled.
- Aggregate them at startup via `import.meta.glob` with eager import and strict typing.
  ```ts
  // src/ideas.ts
  export interface Idea { id: string; title: string; description: string; tags: string[] }
  const modules = import.meta.glob('./data/ideas/*.json', { eager: true, import: 'default' });
  export const ideas: Idea[] = Object.values(modules) as Idea[];
  ```

### Random Selection Rule
- Uniform: `Math.floor(Math.random() * ideas.length)`
- Guard: If the new id equals the previous id, re-roll once.

### UI/UX Requirements
- Single centered column; large primary button labeled “Start vibing!”.
- Result card shows idea title, description; tags as small pills.
- Accessible: keyboard focusable button, proper semantics, adequate contrast.
- Modern, playful styling with Tailwind.

### Step-by-step Tasks (execute in order)
1) Scaffold Vue + Vite + TypeScript app into `10-app/vibes-only/`.
2) Configure Tailwind 4.1 with `src/styles/tailwind.css` and `tailwind.config.js`; wire into `index.html` or `main.ts`.
3) Implement `src/ideas.ts` loader using `import.meta.glob` as above.
4) Create `VibeButton.vue` and `IdeaCard.vue` per requirements; keep components small and typed.
5) Implement selection logic in `App.vue`: load ideas on startup, pick random on click, single re-roll guard.
6) Seed `src/data/ideas/` with 3–5 example JSON files (filenames match `id`).
7) Verify build runs with `npm run dev`; manually validate acceptance criteria in the browser.

### Output Format While Editing
- For each change, output exactly which files to add/edit and concise diffs/edits only.
- Do not dump full files unless newly created and short. Prefer surgical edits.
- After non-trivial changes, ensure the app builds. If a command is needed, propose it with non-interactive flags.

### Guardrails
- Keep TypeScript strict and readable; avoid `any`/unsafe casts.
- No extra features (no routes, no state libs). Minimal state in `App.vue` or a tiny util.
- No network I/O. Aggregate ideas once at startup; no repeated scans.
- Match existing formatting; shallow nesting; use descriptive names.

### Acceptance Check (done when all true)
- Single-page app runs; button renders; clicking shows a random idea with no consecutive repeats.
- All ideas come from bundled local JSON under `src/data/ideas/` via eager glob import.
- No backend or runtime fetches; UI is clean, accessible, and Tailwind-styled.


