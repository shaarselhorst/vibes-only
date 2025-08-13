<script setup lang="ts">
import { ref } from 'vue'
import TopBar from '@/components/TopBar.vue'
import IdeaCard from '@/components/IdeaCard.vue'
import type { Idea } from '@/types/idea'
import { ideas as allIdeas } from '@/data/loadIdeas'

const generatedIdeas = ref<Idea[]>([])

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

function onGenerate() {
  const shuffled = shuffleArray(allIdeas)
  generatedIdeas.value = shuffled.slice(0, 12)
}
</script>

<template>
  <main class="min-h-dvh flex flex-col">
    <header class="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl">
      <div class="w-full max-w-5xl mx-auto px-5 py-3 text-center relative">
        <TopBar />
        <h1 class="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">Idea recommendations</h1>
        <p class="mt-1.5 text-zinc-600 dark:text-zinc-300">Click Generate to fetch 12 ideas from the backend service (dummy data for now).</p>
        <div class="mt-4">
          <button
            type="button"
            @click="onGenerate"
            class="px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow hover:opacity-95 active:scale-95 transition"
            title="Generate 12 new ideas"
          >Generate</button>
        </div>
      </div>
    </header>

    <section class="w-full max-w-5xl mx-auto px-5 mt-5">
      <div v-if="generatedIdeas.length === 0" class="text-center text-zinc-600 dark:text-zinc-300 py-10">
        Press Generate to see recommendations.
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="idea in generatedIdeas" :key="idea.id">
          <IdeaCard :idea="idea" />
        </div>
      </div>
    </section>
  </main>
</template>