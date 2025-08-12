import type { Idea } from '@/types/idea'

// Use a relative glob from this file so it works reliably in Vite
const modules = import.meta.glob('./ideas/*.json', { eager: true }) as Record<string, { default: Idea }>
export const ideas: Idea[] = Object.values(modules).map((m) => m.default)

// Fisher–Yates shuffle for a non-repeating randomized order
function shuffleArray<T>(input: T[]): T[] {
  const arr = input.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

// Preloaded queue for ideas to avoid accidental repeats within a cycle
let preloadedQueue: Idea[] = []
let isQueueInitialized = false

export function preloadIdeasQueue(): void {
  preloadedQueue = shuffleArray(ideas)
  isQueueInitialized = true
}

export function dequeueNextIdea(): Idea | null {
  if (!isQueueInitialized) {
    preloadIdeasQueue()
  }
  if (preloadedQueue.length === 0) {
    // Start a fresh cycle with a new randomized order
    preloadedQueue = shuffleArray(ideas)
  }
  return preloadedQueue.shift() ?? null
}

export function chooseNextIdea(currentId?: string): Idea | null {
  if (ideas.length === 0) return null
  if (ideas.length === 1) return ideas[0]

  if (currentId) {
    const candidateIdeas = ideas.filter((idea) => idea.id !== currentId)
    const idx = Math.floor(Math.random() * candidateIdeas.length)
    return candidateIdeas[idx]
  }

  const idx = Math.floor(Math.random() * ideas.length)
  return ideas[idx]
}

// Choose a random idea excluding any whose id appears in excludeIds
export function chooseNextIdeaExcluding(excludeIds: string[] = []): Idea | null {
  if (ideas.length === 0) return null
  const candidateIdeas = ideas.filter((idea) => !excludeIds.includes(idea.id))
  if (candidateIdeas.length === 0) return null
  const idx = Math.floor(Math.random() * candidateIdeas.length)
  return candidateIdeas[idx]
}


