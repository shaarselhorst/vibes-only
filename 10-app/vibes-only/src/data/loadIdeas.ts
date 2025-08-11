import type { Idea } from '@/types/idea'

// Use a relative glob from this file so it works reliably in Vite
const modules = import.meta.glob('./ideas/*.json', { eager: true }) as Record<string, { default: Idea }>
export const ideas: Idea[] = Object.values(modules).map((m) => m.default)

export function chooseNextIdea(currentId?: string): Idea | null {
  if (ideas.length === 0) return null
  let idx = Math.floor(Math.random() * ideas.length)
  if (currentId && ideas[idx].id === currentId && ideas.length > 1) {
    idx = Math.floor(Math.random() * ideas.length)
  }
  return ideas[idx]
}


