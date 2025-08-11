import type { Idea } from '@/types/idea'

// Use a relative glob from this file so it works reliably in Vite
const modules = import.meta.glob('./ideas/*.json', { eager: true }) as Record<string, { default: Idea }>
export const ideas: Idea[] = Object.values(modules).map((m) => m.default)

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


