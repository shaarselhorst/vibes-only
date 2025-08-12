## Gemini Prompt: One-Hour App Idea (Concise)

Use this template to request a single, fun, original, diverse app idea that fits the app's `Idea` schema. Inject your dynamic list of existing idea summaries at `{{EXISTING_IDEA_SUMMARIES}}`.

### Minimal request body (JSON)

```json
{
  "model": "models/gemini-1.5-pro",
  "systemInstruction": {
    "parts": [
      {"text": "Return only the JSON object that matches the described schema. No commentary, no markdown."}
    ]
  },
  "contents": [
    {
      "role": "user",
      "parts": [
        {"text": "objective:\nGenerate a single, fun, original app idea that an AI can build in about one hour. Keep it technology-agnostic, single-page or very few pages, and immediately actionable."},
        {"text": "constraints (schema & rules):\nOutput strictly JSON in this exact schema:\n{\n  \"id\": \"kebab-case-unique-slug\",\n  \"title\": \"<=60 chars, engaging, no emojis\",\n  \"summary\": \"1 sentence, <=140 chars\",\n  \"objective\": \"2–3 sentences describing purpose and concrete user actions\",\n  \"tags\": [\"3–5 lowercase tags\"]\n}\n\nRequirements:\n- Must be meaningfully different from the provided existing idea summaries.\n- Vary both domain and core functionality; avoid repeating patterns (trackers, finders, calculators, organizers).\n- No implementation details, monetization, or multi-step complex workflows.\n- Return only the JSON object, nothing else."},
        {"text": "domains & diversity guardrails:\n- Sports & fitness: running, cycling, yoga, team sports\n- Creative arts: drawing, music, photography, writing\n- Outdoor & nature: hiking, camping, gardening, birding\n- Learning & education: languages, cooking, DIY skills\n- Daily life & productivity: time, habits, checklists, reminders\n- Home & family: chores, maintenance, meal planning\n- Finance & planning: budgets, expenses, saving goals\n- Games & collections: board/card games, trading cards\n- Pets & local services: pet care, neighborhood exchanges\n\nScope: Single clear purpose; 1–3 features; simple linear flow; single-page or very few pages.\nDiversity: Alternate domains; limit similar functions (trackers/finders/calculators/organizers)."},
        {"text": "examples (schema-aligned):\n```json\n{\n  \"id\": \"game-backlog-roulette\",\n  \"title\": \"Game Backlog Roulette\",\n  \"summary\": \"Randomize your game backlog to decide what to play next.\",\n  \"objective\": \"Users paste their game list, tag platform/genre, and spin to get a pick with simple filters. Optionally mark as played or re-spin.\",\n  \"tags\": [\"gaming\", \"randomizer\", \"choice\"]\n}\n```\n\n```json\n{\n  \"id\": \"potluck-coordinator\",\n  \"title\": \"Potluck Coordinator\",\n  \"summary\": \"Plan a potluck and balance dishes across categories.\",\n  \"objective\": \"Users create an event with categories (mains, sides, desserts). Invitees claim a slot; the app suggests gaps and a shareable summary.\",\n  \"tags\": [\"events\", \"food\", \"planning\"]\n}\n```\n\n```json\n{\n  \"id\": \"bird-sighting-log\",\n  \"title\": \"Bird Sighting Log\",\n  \"summary\": \"Quickly log birds seen with time and location.\",\n  \"objective\": \"Users add species, location, and notes; view a simple session list and basic counts. Export or copy a summary.\",\n  \"tags\": [\"nature\", \"logging\", \"outdoors\"]\n}\n```"},
        {"text": "existingIdeaSummaries:\n{{EXISTING_IDEA_SUMMARIES}}\n\nProduce exactly one new idea now."}
      ]
    }
  ],
  "generationConfig": {
    "temperature": 0.9,
    "topP": 0.9,
    "topK": 40,
    "maxOutputTokens": 300
  }
}
```

### REST call example (curl)

```bash
curl -s -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "systemInstruction": {
      "parts": [{"text": "Return only the JSON object that matches the described schema. No commentary, no markdown."}]
    },
    "contents": [{
      "role": "user",
      "parts": [
        {"text": "objective:\nGenerate a single, fun, original app idea that an AI can build in about one hour. Keep it technology-agnostic, single-page or very few pages, and immediately actionable."},
        {"text": "constraints (schema & rules):\nOutput strictly JSON in this exact schema:\n{\n  \"id\": \"kebab-case-unique-slug\",\n  \"title\": \"<=60 chars, engaging, no emojis\",\n  \"summary\": \"1 sentence, <=140 chars\",\n  \"objective\": \"2–3 sentences describing purpose and concrete user actions\",\n  \"tags\": [\"3–5 lowercase tags\"]\n}\n\nRequirements:\n- Must be meaningfully different from the provided existing idea summaries.\n- Vary both domain and core functionality; avoid repeating patterns (trackers, finders, calculators, organizers).\n- No implementation details, monetization, or multi-step complex workflows.\n- Return only the JSON object, nothing else."},
        {"text": "domains & diversity guardrails:\n- Sports & fitness: running, cycling, yoga, team sports\n- Creative arts: drawing, music, photography, writing\n- Outdoor & nature: hiking, camping, gardening, birding\n- Learning & education: languages, cooking, DIY skills\n- Daily life & productivity: time, habits, checklists, reminders\n- Home & family: chores, maintenance, meal planning\n- Finance & planning: budgets, expenses, saving goals\n- Games & collections: board/card games, trading cards\n- Pets & local services: pet care, neighborhood exchanges\n\nScope: Single clear purpose; 1–3 features; simple linear flow; single-page or very few pages.\nDiversity: Alternate domains; limit similar functions (trackers/finders/calculators/organizers)."},
        {"text": "examples (schema-aligned):\n```json\n{\n  \"id\": \"game-backlog-roulette\",\n  \"title\": \"Game Backlog Roulette\",\n  \"summary\": \"Randomize your game backlog to decide what to play next.\",\n  \"objective\": \"Users paste their game list, tag platform/genre, and spin to get a pick with simple filters. Optionally mark as played or re-spin.\",\n  \"tags\": [\"gaming\", \"randomizer\", \"choice\"]\n}\n```\n\n```json\n{\n  \"id\": \"potluck-coordinator\",\n  \"title\": \"Potluck Coordinator\",\n  \"summary\": \"Plan a potluck and balance dishes across categories.\",\n  \"objective\": \"Users create an event with categories (mains, sides, desserts). Invitees claim a slot; the app suggests gaps and a shareable summary.\",\n  \"tags\": [\"events\", \"food\", \"planning\"]\n}\n```\n\n```json\n{\n  \"id\": \"bird-sighting-log\",\n  \"title\": \"Bird Sighting Log\",\n  \"summary\": \"Quickly log birds seen with time and location.\",\n  \"objective\": \"Users add species, location, and notes; view a simple session list and basic counts. Export or copy a summary.\",\n  \"tags\": [\"nature\", \"logging\", \"outdoors\"]\n}\n```"},
        {"text": "existingIdeaSummaries:\n- Track daily workouts with exercises, sets, and reps.\n- Upload and organize personal artwork with categories.\n- Dog walking request board for owners and walkers.\n- Daily habit tracker with streaks.\n\nProduce exactly one new idea now."}
      ]
    }],
    "generationConfig": {
      "temperature": 0.9,
      "topP": 0.9,
      "topK": 40,
      "maxOutputTokens": 300
    }
  }'
```

Notes:
- Replace `{{EXISTING_IDEA_SUMMARIES}}` with a bullet list or JSON array of your current idea summaries.
- The response should be a single JSON object matching the `Idea` type: `id`, `title`, `summary`, `objective`, `tags`.


