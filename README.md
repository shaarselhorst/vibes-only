# Vibes Only 🚀

> **AI Project Idea Spinner** - Get inspired to build something amazing in just one hour!

## What is Vibes Only?

Vibes Only is a delightful, single-page web app that randomly generates **simple, actionable project ideas** designed specifically for AI-assisted coding sessions. It's built for developers who want to practice building with AI tools like Cursor, GitHub Copilot, or Claude, but don't know what to build.

The app follows a simple philosophy: **every idea should be achievable by an AI coding agent within one hour**. No complex multi-screen applications, no overwhelming feature lists - just clean, focused projects that you can start building today.

## The Concept 🎯

### Why "One Hour"?
We believe that the best way to learn AI-assisted development is through rapid iteration and completion. One-hour projects are:
- **Focused**: Single purpose, clear scope
- **Achievable**: Complete, functional apps in one coding session
- **Confidence-building**: You finish what you start
- **Perfect for practice**: Quick wins that build momentum

### What Makes a Good Idea?
Each project idea is carefully crafted to be:
- **AI-understandable**: Simple enough for AI to generate working code
- **Technology-agnostic**: Focus on functionality, not implementation details
- **Immediately actionable**: You can start building right now
- **Interest-driven**: Based on real hobbies, industries, and daily life
- **Single-page focused**: Web apps that don't require complex navigation

## How It Works ✨

1. **Click "Start vibing!"** - The main button triggers a delightful particle effect and generates a new random idea
2. **Get inspired** - Each idea comes with a clear title, summary, and detailed objective
3. **Start building** - Use your favorite AI coding tool to bring the idea to life
4. **Repeat** - Click again for a fresh idea whenever you're ready for your next project

### Example Ideas
- **Coin Collection Tracker**: Organize and track your coin collection with inventory management
- **Plant Watering Tracker**: Never forget to water your plants again
- **Recipe Cost Calculator**: Calculate the cost of ingredients for your favorite recipes
- **Parking Spot Memory**: Remember where you parked your car
- **Reading Progress Tracker**: Track your reading goals and progress
- **Expense Splitter**: Split bills and expenses with friends

## Tech Stack 🛠️

- **Frontend**: Vue 3 + TypeScript
- **Styling**: Tailwind CSS 4.1
- **Build Tool**: Vite
- **Data**: Static JSON files (no backend required)
- **Deployment**: Ready for any static hosting service

## Getting Started 🚀

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation
```bash
# Navigate to the app directory
cd 10-app/vibes-only

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
npm run preview
```

## Project Structure 📁

```
vibes-only/
├── src/
│   ├── components/          # Vue components
│   │   ├── VibeButton.vue  # Main action button
│   │   ├── IdeaCard.vue    # Idea display component
│   │   └── ParticleEffects.vue # Fun visual effects
│   ├── data/
│   │   ├── ideas/          # JSON files for each project idea
│   │   └── loadIdeas.ts    # Logic for loading and selecting ideas
│   ├── types/
│   │   └── idea.ts         # TypeScript interfaces
│   └── App.vue             # Main application component
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## Adding Your Own Ideas 💡

Want to contribute ideas? Each idea is stored as a separate JSON file in `src/data/ideas/`:

```json
{
  "id": "your-idea-name",
  "title": "Your Project Title",
  "summary": "One sentence describing what the app does",
  "objective": "Detailed explanation of the app's purpose and features",
  "tags": ["relevant", "categories", "for", "filtering"]
}
```

### Idea Guidelines
- **Keep it simple**: 1-3 main features maximum
- **Be specific**: Clear, actionable functionality
- **Think real-world**: Solve actual problems people have
- **One-hour scope**: AI must be able to generate working code within 60 minutes

**Ready to start vibing?** 🎉 Click that button and let's build something amazing together!

*Built with ❤️ for the AI-assisted development community*
