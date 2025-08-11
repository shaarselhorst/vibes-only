<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VibeButton from '@/components/VibeButton.vue'
import IdeaCard from '@/components/IdeaCard.vue'
import ParticleEffects from '@/components/ParticleEffects.vue'
import { chooseNextIdeaExcluding } from '@/data/loadIdeas'
import type { Idea } from '@/types/idea'

const currentIdeas = ref<Idea[]>([])
const particleEffectsRef = ref<InstanceType<typeof ParticleEffects>>()

// Generate initial ideas on component mount (up to 3)
onMounted(() => {
  for (let i = 0; i < 3; i++) {
    addNextIdea()
  }
})

function addNextIdea() {
  const exclude = currentIdeas.value.map((i) => i.id)
  const next = chooseNextIdeaExcluding(exclude)
  if (!next) return
  // Add new idea to the top; cap at 3
  currentIdeas.value = [next, ...currentIdeas.value].slice(0, 3)
}

function onStartVibing() {
  if (particleEffectsRef.value) {
    // Fire effects only at the top card (first visible)
    const firstCard = document.querySelector('[data-idea-card-root]') as HTMLElement | null
    if (firstCard) {
      const rect = firstCard.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      particleEffectsRef.value.triggerEffectsAt(x, y)
    } else {
      // Fallback to center if no card yet
      particleEffectsRef.value.triggerEffects()
    }
  }
  setTimeout(() => {
    addNextIdea()
  }, 100)
}
</script>

<template>
  <main class="min-h-dvh flex flex-col">
    <!-- Particle Effects Canvas -->
    <ParticleEffects ref="particleEffectsRef" />
    
    <div class="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
      <div class="w-full max-w-3xl mx-auto px-6 py-4 text-center relative">
        <!-- GitHub Link Button -->
        <a 
          href="https://github.com/shaarselhorst/vibes-only" 
          target="_blank" 
          rel="noopener noreferrer"
          class="absolute top-4 right-6 p-2 text-zinc-400 hover:text-white transition-colors duration-200"
          title="View source code on GitHub"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
        
        <h1 class="text-4xl font-extrabold tracking-tight text-white">Vibes Only</h1>
        <p v-if="currentIdeas.length === 0" class="mt-2 text-zinc-300">Click the button to get project ideas.</p>

        <div class="mt-4">
          <VibeButton @click="onStartVibing" />
        </div>
      </div>
    </div>

    <div class="w-full max-w-3xl mx-auto px-6">
      <TransitionGroup name="idea-list" tag="div" class="flex flex-col py-2">
        <IdeaCard v-for="idea in currentIdeas" :key="idea.id" :idea="idea" />
      </TransitionGroup>
    </div>
  </main>
</template>
