# App Idea Generation Framework

## Core Philosophy

This app generates **simple, actionable app ideas** that focus on **what** users want to build, not **how** to build it. **Each idea should be achievable by an AI coding agent within one hour** - this is our fundamental constraint.

Ideas should be:

- **AI-understandable**: Simple enough for AI to generate code from
- **Single-page or few-page apps**: No complex multi-screen applications
- **Technology-agnostic**: Focus on functionality, not implementation details
- **Immediately actionable**: Users can start building today
- **Interest-driven**: Based on hobbies, industries, and personal passions
- **One-hour scope**: Complete, functional apps that can be built in a single coding session

## 1. Comprehensive Categories & Interests

### Hobbies & Personal Interests
- **Sports & Fitness**: Running, cycling, swimming, yoga, martial arts, team sports
- **Creative Arts**: Painting, drawing, photography, music, writing, crafts
- **Gaming**: Board games, card games, video games, puzzles, strategy
- **Outdoor Activities**: Hiking, camping, gardening, bird watching, fishing
- **Collecting**: Stamps, coins, trading cards, memorabilia, art
- **Learning**: Languages, cooking, DIY projects, skill development
- **Social**: Events, meetups, networking, community building

### Industries & Business Areas
- **Local Services**: Food delivery, cleaning, repairs, maintenance
- **Health & Wellness**: Fitness tracking, nutrition, mental health, meditation
- **Education**: Tutoring, skill sharing, course management, study tools
- **Finance**: Budget tracking, expense management, investment tracking
- **Real Estate**: Property management, roommate finder, neighborhood info
- **Transportation**: Ride sharing, car pooling, route planning
- **Entertainment**: Event planning, movie reviews, book clubs

### Daily Life & Productivity
- **Time Management**: Task lists, scheduling, habit tracking, reminders
- **Organization**: Inventory management, document storage, note-taking
- **Communication**: Chat apps, forums, community boards, feedback systems
- **Shopping**: Price comparison, wish lists, shopping lists, reviews
- **Home Management**: Chores, maintenance schedules, household budgets

## 2. Idea Structure & Guidelines

### What an Idea Should Include
- **Clear purpose**: What problem does it solve?
- **Simple scope**: 1-3 main features maximum (achievable in one hour)
- **User actions**: What can users do with it?
- **Data elements**: What information is relevant?
- **Real-world context**: How does it fit into daily life?
- **Time constraint**: Must be completable by AI within one hour

### What an Idea Should NOT Include
- **Technology specifications**: No mention of web/mobile/desktop
- **Implementation details**: No specific frameworks or databases
- **Complex workflows**: No multi-step processes or advanced features
- **Business models**: No monetization or pricing strategies
- **Technical requirements**: No performance or scalability concerns

### Example Idea Format
```typescript
{
  "id": "simple-identifier",
  "title": "Clear, Actionable Title",
  "summary": "One sentence describing what the app does",
  "objective": "Detailed explanation of the app's purpose and features",
  "tags": ["relevant", "categories", "for", "filtering"]
}
```

## 3. Diversity & Uniqueness Guidelines

### Prevent Similar Ideas
**DO NOT create multiple variations of the same concept.** Each idea must be fundamentally different from all others.

#### What NOT to do:
- ❌ Multiple "tracker" apps for different items (plant tracker, water tracker, sleep tracker)
- ❌ Multiple "finder" apps for different services (restaurant finder, food truck finder, farmer market finder)
- ❌ Multiple "calculator" apps for different calculations (tip calculator, loan calculator, tax calculator)
- ❌ Multiple "organizer" apps for different collections (recipe organizer, book organizer, music organizer)
- ❌ Multiple apps in the same subcategory (multiple food-related apps, multiple audio format apps)

#### What TO do instead:
- ✅ **Spread across different domains**: After creating a fitness app, move to creative arts, then business, then home management
- ✅ **Vary the core functionality**: Mix trackers with planners, calculators with organizers, finders with creators
- ✅ **Explore different user motivations**: Some apps for productivity, some for entertainment, some for learning, some for social connection
- ✅ **Target different user groups**: Apps for students, professionals, hobbyists, families, seniors, travelers

### Diversity Enforcement Rules
1. **Maximum 2 ideas per subcategory** before moving to a completely different domain
2. **No more than 3 ideas with similar core functionality** (e.g., only 3 "tracker" apps total)
3. **Alternate between major categories** (Hobbies → Business → Daily Life → Creative → etc.)
4. **Vary the app type**: Mix simple tools, organizers, calculators, planners, and creative apps
5. **Consider different complexity levels**: Some very simple, some slightly more involved (but still one-hour achievable)

### Category Rotation Strategy
When generating ideas, follow this pattern:
1. **Start with a major category** (e.g., Sports & Fitness)
2. **Create 1-2 ideas** in that category
3. **Jump to a completely different major category** (e.g., Creative Arts)
4. **Create 1-2 ideas** in the new category
5. **Continue rotating** through all major categories before repeating

## 4. Sample Ideas by Category

### Sports & Fitness
```typescript
{
  "id": "workout-tracker",
  "title": "Simple Workout Tracker",
  "summary": "Track daily workouts with exercises, sets, and reps.",
  "objective": "A simple app where users can log their daily workouts by selecting exercises from a list and recording sets and reps. Users can view their workout history and track basic progress over time.",
  "tags": ["fitness", "tracking", "health"]
}
```

### Creative Arts
```typescript
{
  "id": "art-gallery",
  "title": "Personal Art Gallery",
  "summary": "Upload and organize your artwork with descriptions and categories.",
  "objective": "A personal gallery app where users can upload images of their artwork, add titles and descriptions, organize them into categories, and view their collection in a simple gallery format.",
  "tags": ["art", "gallery", "organization"]
}
```

### Local Services
```typescript
{
  "id": "dog-walking-service",
  "title": "Dog Walking Service",
  "summary": "Connect dog owners with local dog walkers.",
  "objective": "A simple platform where dog owners can post requests for dog walking services with location and time details, and local walkers can browse and respond to these requests.",
  "tags": ["pets", "services", "local"]
}
```

### Productivity
```typescript
{
  "id": "habit-tracker",
  "title": "Daily Habit Tracker",
  "summary": "Track daily habits and build positive routines.",
  "objective": "A habit tracking app where users can create a list of daily habits, mark them as completed each day, and view their progress over time with simple streak counters.",
  "tags": ["productivity", "habits", "tracking"]
}
```

## 5. Idea Generation Guidelines

### Keep It Simple
- **Single purpose**: One main function per app
- **Minimal features**: 2-3 features maximum (one-hour constraint)
- **Clear user flow**: Linear, straightforward user experience
- **Familiar patterns**: Use common UI patterns users already know
- **Rapid development**: Every feature must be implementable in minutes, not hours

### Make It Actionable
- **Immediate value**: Users can see benefit from first use
- **Real-world context**: Solves actual problems people have
- **Personal connection**: Tied to interests users care about
- **Quick setup**: Minimal configuration required

### Ensure AI Compatibility
- **Clear requirements**: Specific, unambiguous functionality
- **Standard patterns**: Common app structures and workflows
- **Limited scope**: Manageable complexity for code generation
- **Well-defined data**: Clear data structures and relationships
- **One-hour feasibility**: AI must be able to generate working code within 60 minutes

### Diversity Checklist (MUST CHECK BEFORE CREATING EACH IDEA)
Before creating any new idea, verify:
- [ ] This idea is in a different major category than the last 2-3 ideas
- [ ] This idea has different core functionality than existing ideas
- [ ] This idea targets a different user motivation or use case
- [ ] This idea explores a new domain or interest area
- [ ] This idea doesn't duplicate the pattern of recent ideas

---

*Remember: The goal is to inspire users to build something meaningful to them, not to overwhelm them with complex requirements. Every idea should feel achievable and exciting.