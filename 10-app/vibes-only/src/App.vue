<script setup lang="ts">
import { ref } from 'vue'
import VibeButton from '@/components/VibeButton.vue'
import IdeaCard from '@/components/IdeaCard.vue'
import ParticleEffects from '@/components/ParticleEffects.vue'
import { chooseNextIdea } from '@/data/loadIdeas'
import type { Idea } from '@/types/idea'

const currentIdea = ref<Idea | null>(null)
const particleEffectsRef = ref<InstanceType<typeof ParticleEffects>>()

function onStartVibing() {
  // Trigger particle effects first
  if (particleEffectsRef.value) {
    particleEffectsRef.value.triggerEffects()
  }
  
  // Small delay to let effects start before changing idea
  setTimeout(() => {
    currentIdea.value = chooseNextIdea(currentIdea.value?.id)
  }, 100)
}
</script>

<template>
  <main class="min-h-dvh flex flex-col">
    <!-- Particle Effects Canvas -->
    <ParticleEffects ref="particleEffectsRef" />
    
    <div class="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
      <div class="w-full max-w-3xl mx-auto px-6 py-4 text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-white">Vibes Only</h1>
        <p v-if="!currentIdea" class="mt-2 text-zinc-300">Click the button to get a project idea.</p>

        <div class="mt-4">
          <VibeButton @click="onStartVibing" />
        </div>
      </div>
    </div>

    <div class="w-full max-w-3xl mx-auto px-6">
      <IdeaCard v-if="currentIdea" :idea="currentIdea" />
    </div>
  </main>
</template>
