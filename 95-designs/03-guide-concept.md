### Example page: “Get Started Guide” proposal

- **Goal**: Add a new page named `example` that shows a simple, step‑by‑step guide for workshopping an idea and getting started.
- **Access**: Add a new, subtle header button next to the existing one. Style: outline-only, simple text, minimal/low‑noise.

### Build steps (for the app)

1. **Create page**: Add a new page/component named `Example` (route/slug: `/example`).
2. **Navigation**: Add a header button labeled “Guide” linking to `/example`, placed next to the current header button.
3. **Style**: Use an outline-only button style with simple text (no gradients/animations).
4. **Content**: Render the guide as a clear, numbered list (see “Guide steps” below).
5. **Verify**: Ensure the button appears in the header and the page loads responsively on mobile and desktop.

### Guide steps (for users)

1. **Pick an idea** you’re excited about.
2. **Create `TODO.md`** in your project and paste the idea at the top.
3. **Dump your thoughts**: write requirements, desired outcomes, key features, display/UX ideas, and what form the app should take.
4. **Textualize the app**: freely expand on the idea—unfiltered, rough notes are fine.
5. **Provide a user example**: describe who will use it, how they’ll use it, what it provides, and the expected result.
6. **Iterate**: call out what you (didn't) like, add/adjust requirements, and clarify constraints.
7. **Ask AI to refine**: request a concrete design; ask it to structure and clean up your text.

### Acceptance criteria

- **Header button** labeled “Guide” with outline-only styling; sits next to the existing header button.
- **New page** available at `/example` with the eight numbered steps above.
- **Clean, minimal layout**; readable on mobile and desktop.

- Added a concise proposal with two clear step lists: app build steps and user guide steps, plus acceptance criteria.