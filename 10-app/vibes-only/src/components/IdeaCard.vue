<script setup lang="ts">
import type { Idea } from '@/types/idea'

defineProps<{ idea: Idea }>()

const copyToClipboard = async (idea: Idea) => {
  const formattedContent = `# ${idea.title}

## Summary
${idea.summary}

## Objective
${idea.objective}

## Tags
${idea.tags.join(', ')}
`

  try {
    await navigator.clipboard.writeText(formattedContent)
    // You could add a toast notification here if you want
  } catch (err) {
    console.error('Failed to copy to clipboard:', err)
  }
}
</script>

<template>
  <Transition
    name="idea-fade"
    mode="out-in"
    appear
  >
    <div 
      :key="idea.id"
      class="mt-8 mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200/20 bg-zinc-900/60 p-6 shadow-xl backdrop-blur relative animate-bounce-in"
    >
      <!-- Copy Button -->
      <button
        @click="copyToClipboard(idea)"
        class="absolute top-4 right-4 p-2 rounded-lg border border-zinc-400/30 bg-zinc-800/60 hover:bg-zinc-700/60 transition-colors duration-200 group hover:animate-glow"
        title="Copy idea to clipboard"
      >
        <svg
          class="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </button>

      <h2 class="text-2xl font-bold text-white pr-16 animate-float">{{ idea.title }}</h2>
      <p class="mt-2 text-zinc-200">{{ idea.summary }}</p>
      <p class="mt-4 text-zinc-300">{{ idea.objective }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="(tag, index) in idea.tags"
          :key="tag"
          :style="{ animationDelay: `${index * 0.1}s` }"
          class="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 animate-bounce-in"
        >
          {{ tag }}
        </span>
      </div>
      
      <!-- Decorative sparkles -->
      <div class="absolute -top-2 -left-2 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"></div>
      <div class="absolute -top-1 -right-3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-sparkle" style="animation-delay: 0.5s"></div>
      <div class="absolute -bottom-2 -right-2 w-1 h-1 bg-blue-300 rounded-full animate-sparkle" style="animation-delay: 1s"></div>
    </div>
  </Transition>
</template>

<style scoped>
.idea-fade-enter-active,
.idea-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.idea-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.idea-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.idea-fade-enter-to,
.idea-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>


