<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VibeButton from '@/components/VibeButton.vue'
import IdeaCard from '@/components/IdeaCard.vue'
import ParticleEffects from '@/components/ParticleEffects.vue'
import TopBar from '@/components/TopBar.vue'
import { chooseNextIdeaExcluding } from '@/data/loadIdeas'
import type { Idea } from '@/types/idea'

const currentIdeas = ref<Idea[]>([])
const particleEffectsRef = ref<InstanceType<typeof ParticleEffects>>()

onMounted(() => {
  for (let i = 0; i < 3; i++) {
    addNextIdea()
  }
})

function addNextIdea() {
  const exclude = currentIdeas.value.map((i: Idea) => i.id)
  const next = chooseNextIdeaExcluding(exclude)
  if (!next) return
  currentIdeas.value = [next, ...currentIdeas.value].slice(0, 3)
}

function onStartVibing() {
  if (particleEffectsRef.value) {
    const firstCard = document.querySelector('[data-idea-card-root]') as HTMLElement | null
    if (firstCard) {
      const rect = firstCard.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      particleEffectsRef.value.triggerEffectsAt(x, y)
    } else {
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
    <ParticleEffects ref="particleEffectsRef" />

    <div class="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl">
      <div class="w-full max-w-3xl mx-auto px-6 py-4 text-center relative">
        <TopBar />
        
        <h1 class="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">Vibes Only</h1>
        <p class="mt-2 text-zinc-700 dark:text-zinc-300">Simple, low-stakes project ideas to spark momentum.</p>
        <p v-if="currentIdeas.length === 0" class="mt-2 text-zinc-600 dark:text-zinc-300">Click the button to get project ideas.</p>

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


