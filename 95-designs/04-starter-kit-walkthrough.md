## From Idea to V1: A Starter Kit Walkthrough

This is the story of Alex, who wants a tiny app that works today. They grab an idea from Vibes Only, keep the process lightweight, and let AI do the heavy lifting.

### 1) Pick an idea and get vibing
- Alex clicks “Get vibing” and lands on the idea: **gratitude jar**.
- The goal is simple: jot down gratitudes and revisit them later.

### 2) Clone the Starter Kit
- Alex clones the repo and skims the README plus the placeholder documents.

### 3) Add docs to Cursor for context (@Docs)
- Alex adds relevant files into Cursor’s `@Docs` to improve AI’s context.
- Optional: Alex considers using an MCP for extra context (e.g., linking external information) but keeps it simple for now.

### 4) Create a design doc from the idea
- Alex copies the idea’s markdown and pastes it into a new doc, e.g., `95-designs/design.md`.
- Then Alex adds raw thoughts under the pasted idea (messy is fine—context beats polish).

### 5) Ask AI to refine the idea
- Alex asks the AI to turn the raw notes into a clearer, structured design doc.
- The AI refines it into concise sections (purpose, features, constraints, acceptance criteria).

Now Alex has a clear design doc.

### 6) Decide a stance (scope and involvement)
- Alex wants something that “just works now,” minimal involvement, no long-term maintenance.
- That means: prefer simple tech, ship the smallest slice, avoid over-engineering.

### 7) Choose a tech stack
- Alex picks a web app using **Vue 3 + Vite + Tailwind CSS**.
- Keep it local-first and simple.

### 8) Make a “Hello, World” with the stack
- Alex follows the official Tailwind guide for Vite: [Tailwind Vite guide](https://tailwindcss.com/docs/installation/using-vite).
- The goal is to get a blank but styled page running quickly.

### 9) Confirm it runs
- Alex installs dependencies and runs the dev server.
- Seeing the app in the browser confirms the baseline is good—time to iterate.

### 10) Add Cursor rules for guidance
- Alex creates `.mdc` rule files under `.cursor/rules` to guide the AI:
  - Vue + TypeScript conventions
  - Vite project structure
  - Tailwind utility-first styling tips
  - Personal preferences (naming, testing stance, error handling)
- Alex also lets the AI suggest additional rules and then reviews/edits what to keep.

### 11) Start an implementation doc
- Alex creates an implementation plan at `95-prompts/app-creation.md`.
- The doc references the design doc for context and states the architecture and minimal features to ship first.

### 12) Let AI refine the implementation plan
- Alex asks the AI to structure the plan into milestones and acceptance criteria.

Now Alex has a solid implementation document.

### 13) Execute the plan with AI
- Alex attaches both docs (design + implementation) in chat and asks the AI to execute the plan.
- The request emphasizes: “build the smallest vertical slice first, run after each edit.”

### 14) Review, iterate, and refine
- Alex reviews generated code, calls out what works and what doesn’t, and requests targeted edits.
- The loop continues until the MVP feels right—then small improvements land incrementally.

### 15) Done (for now)
- Alex stops when the MVP works and is pleasant to use.
