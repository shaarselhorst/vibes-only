# Generate 10 Creative App Ideas

## Task
Generate 10 unique, creative app ideas that follow our one-hour development constraint. Each idea should be in its own JSON file in the `data/ideas/` directory.

## Context
You are using our **App Idea Generation Framework** (see `95-designs/02-suggestion-brainstorm.md` for complete guidelines and constraints).

**Key constraint**: Each idea must be achievable by an AI coding agent within one hour.

**Focus**: Create simple, actionable app ideas that focus on **what** users want to build, not **how** to build it.

## Inspiration Categories
Use these categories to spark creativity while ensuring simplicity:

### Hobbies & Personal Interests
- Sports & Fitness, Creative Arts, Gaming, Outdoor Activities, Collecting, Learning, Social

### Industries & Business Areas
- Local Services, Health & Wellness, Education, Finance, Real Estate, Transportation, Entertainment

### Daily Life & Productivity
- Time Management, Organization, Communication, Shopping, Home Management

## Output Format
Create 3 separate JSON files, each following this structure:

```typescript
{
  "id": "unique-identifier",
  "title": "Creative, Actionable Title",
  "summary": "One sentence describing what the app does",
  "objective": "Simple concept description - what users can do, what problem it solves",
  "tags": ["relevant", "categories", "for", "filtering"]
}
```

## Creativity Guidelines
- **Think outside the box**: Combine unexpected interests or solve niche problems
- **Personal connection**: Focus on real problems people actually have
- **Immediate value**: Users should see benefit from first use
- **Unique angle**: Avoid generic "todo app" ideas - find fresh perspectives
- **Interest-driven**: Tap into specific hobbies, passions, or daily challenges

## Examples of Good Ideas
- **Niche**: "Plant Watering Tracker" for forgetful gardeners
- **Combination**: "Recipe Cost Calculator" combining cooking and budgeting
- **Daily Problem**: "Parking Spot Memory" for people who forget where they parked
- **Hobby-Specific**: "Coin Collection Tracker" for numismatists

## Examples of Ideas to Avoid
- **Too Complex**: "Full e-commerce platform with payment processing"
- **Too Generic**: "Another todo list app"
- **Too Technical**: "Real-time collaborative code editor"
- **Too Broad**: "Social media platform for everyone"

## File Naming
Name each file descriptively:
- `plant-watering-tracker.json`
- `recipe-cost-calculator.json`
- `parking-spot-memory.json`

## Quality Checklist
Before creating each idea, ask yourself:
1. Can this be built in one hour by AI?
2. Does it solve a real, specific problem?
3. Is it creative and unique?
4. Does it have 2-3 clear, simple features?
5. Would someone actually want to use this?

## Start Creating
Now generate 10 creative, one-hour-scoped app ideas. Make each one unique, interesting, and immediately actionable for users with specific interests or daily challenges.
