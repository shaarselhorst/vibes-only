### Vibes Only – AI Project Idea Spinner (Spec)

#### 1) Overview
Single-page web app that randomly surfaces pre-configured project ideas to help users practice AI-assisted coding (e.g., with Cursor). The experience is intentionally minimal and modern: one primary button to “spin” for a new idea and a display area showing the selected idea.

- **Primary user action**: Click “Start vibing!” to get a random idea.
- **Primary output**: A concise card with the idea’s title and description.
- **Operating mode**: Offline-ready; ideas are bundled with the app.

#### 2) Goals
- **Simplicity**: One-page app, instant feedback, no backend.
- **Reliability**: Ideas are deterministic and bundled locally.
- **Clarity**: Each idea is actionable and clearly described.
- **Aesthetic**: Modern, fun visual style using Tailwind.

#### 3) Target Users and Stories
- **As a learner**, I want to click a button and instantly get a new project idea so I can start building without decision fatigue.
- **As a developer using AI tools**, I want ideas that are scoped and web-focused so I can practice using an AI editor effectively.

#### 4) Tech Stack
- **Framework**: Vue + TypeScript
- **Styling**: Tailwind CSS
- **Build Tooling**: Vite + npm
- **Data**: Directory of JSON files, each file contains a single idea (no SQLite, no server-side APIs, no accounts)

#### 5) Architecture and Data Flow
- **Data source**: Multiple static JSON files under `10-app/public/data/ideas/` (e.g., `10-app/public/data/ideas/<id>.json`).
- **Aggregation**: App loads all idea JSON files at startup (e.g., via Vite `import.meta.glob`) and flattens them into an in-memory array.
- **App state**: Minimal state in a single Vue component or small store (Pinia optional). Holds the loaded list of ideas and the currently selected idea.
- **Random selection**: Uniform random across all ideas with a simple guard against immediate repeat.
- **Persistence**: None for MVP.

High-level flow:
1) App loads → glob-import and aggregate all `ideas/*.json` → store in memory.
2) User clicks “Start vibing!” → select random idea (no immediate repeat).
3) Render idea card.

#### 6) Data Model
Idea object (JSON):
```
{
  "id": string,          // stable identifier
  "title": string,       // short name of the project idea
  "description": string, // 1–3 sentences, actionable
  "tags": string[]       // e.g., ["ai", "frontend", "apis"]
}
```

Example single-file entries (one idea per file):
```
// public/data/ideas/chat-mock-api-ui.json
{
  "id": "chat-mock-api-ui",
  "title": "Chat UI on a Mock API",
  "description": "Build a chat interface that consumes a mocked REST endpoint. Use your AI editor to scaffold components and state.",
  "tags": ["frontend", "state"]
}

// public/data/ideas/image-annotator.json
{
  "id": "image-annotator",
  "title": "Simple Image Annotator",
  "description": "Let users upload an image and draw rectangles with labels. Save annotations locally.",
  "tags": ["canvas", "ux"]
}
```

#### 7) UI/UX
- **Layout**: Single centered column; large primary button; result card below.
- **Primary button**: Label “Start vibing!”
- **Result card**: Title and description; tags may be displayed as small pills.
- **Empty state**: Brief tagline and instructions before first click.
- **Accessibility**: Button is keyboard-focusable; ensure contrast and semantics (role, aria-labels if needed).
- **Look and feel**: Modern, playful, and delightful.

#### 8) Random Selection Logic
- Uniform random: `index = Math.floor(Math.random() * ideas.length)`.
- Guard against immediate repeat by re-rolling once if the same `id` appears consecutively.

#### 9) Project Structure (planned)
```
10-app/
  └─ vibes-only/
      ├─ index.html
      ├─ src/
      │  ├─ main.ts
      │  ├─ App.vue
      │  └─ components/
      │     ├─ VibeButton.vue
      │     └─ IdeaCard.vue
      ├─ public/
      │  └─ data/ideas/            # many files, one idea per file
      │     ├─ chat-mock-api-ui.json
      │     └─ image-annotator.json
      └─ tailwind.css / tailwind.config.js
```

#### 10) Acceptance Criteria (MVP)
- App builds and runs locally with `npm run dev`.
- Page displays a prominent “Start vibing!” button.
- App loads all idea JSON files at startup for instant selection.
- Clicking the button shows a random idea from the bundled list.
- Consecutive duplicates are prevented.
- No network calls beyond loading static assets.

#### 11) Risks and Mitigations
- **Many small JSON files**: Ensure efficient bundling via glob-import; validate at build time to avoid runtime fetch overhead.
- **Idea quality**: Low-quality seeds reduce usefulness → Curate and iterate on the idea files.
- **Repetition perception**: Users may feel repeats too often → Keep immediate repeat guard; consider tuning later if needed.

#### 12) Next Steps
1) Initialize Vue + Vite + Tailwind scaffold under `10-app/`.
2) Create `public/data/ideas/*.json` with 25–50 curated ideas (one per file).
3) Implement the button and random-selection logic (no history).
4) Style with Tailwind 4.1 and add accessibility checks.

#### 13) Definition of Done (MVP)
- Single-page app runs locally, shows random ideas on click, with no consecutive repeats.
- Ideas are bundled locally (directory of JSON files); no backend.
- Codebase is TypeScript-first, uses Vue 3.5.18 and Tailwind 4.1, and is easy to extend.