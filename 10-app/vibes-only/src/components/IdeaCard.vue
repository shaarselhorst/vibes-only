<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import type { Idea } from '@/types/idea'

defineProps<{ idea: Idea }>()

const showToast = ref(false)
let toastTimer: ReturnType<typeof setTimeout> | null = null

// Randomize title animation start so cards don't bounce in sync
const titleAnimationDelay = `${(-Math.random() * 2).toFixed(2)}s`

function showCopiedToast() {
  if (toastTimer) {
    clearTimeout(toastTimer)
    toastTimer = null
  }
  showToast.value = true
  toastTimer = setTimeout(() => {
    showToast.value = false
    toastTimer = null
  }, 2000)
}

onBeforeUnmount(() => {
  if (toastTimer) {
    clearTimeout(toastTimer)
  }
})

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
    showCopiedToast()
  } catch (err) {
    console.error('Failed to copy to clipboard:', err)
  }
}
</script>

<template>
  <div 
    class="mt-8 mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200/20 bg-zinc-900/60 p-6 shadow-xl backdrop-blur relative"
    data-idea-card-root
  >
      <!-- Copy Button -->
      <button
        @click="copyToClipboard(idea)"
        class="absolute top-4 right-4 z-20 p-2 rounded-lg border border-zinc-400/30 bg-zinc-800/60 hover:bg-zinc-700/60 transition-colors duration-200 group hover:animate-glow"
        title="Copy idea to clipboard"
        aria-label="Copy idea to clipboard"
        type="button"
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

      <h2 class="text-2xl font-bold text-white pr-16 animate-float" :style="{ animationDelay: titleAnimationDelay }">{{ idea.title }}</h2>
      <p class="mt-2 text-indigo-200 italic">{{ idea.summary }}</p>
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
      <div class="pointer-events-none absolute -top-2 -left-2 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -top-1 -right-3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-sparkle" style="animation-delay: 0.5s" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -bottom-2 -right-2 w-1 h-1 bg-blue-300 rounded-full animate-sparkle" style="animation-delay: 1s" aria-hidden="true"></div>
      
      <!-- Toast: Copy success -->
      <Transition
        enter-active-class="transform transition ease-out duration-200"
        enter-from-class="translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transform transition ease-in duration-150"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-2 opacity-0"
      >
        <div
          v-if="showToast"
          class="fixed bottom-4 right-4 z-50 pointer-events-auto"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div class="flex items-center gap-2 rounded-lg border border-zinc-700/70 bg-zinc-800/95 px-4 py-3 text-sm text-zinc-100 shadow-xl">
            <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>Copied “{{ idea.title }}” to clipboard</span>
          </div>
        </div>
      </Transition>
  </div>
</template>

<style scoped>
.idea-swoosh-enter-active,
.idea-swoosh-leave-active {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
              opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

.idea-swoosh-enter-from {
  opacity: 0;
  transform: translateX(40px) scale(0.98);
}

.idea-swoosh-enter-to,
.idea-swoosh-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.idea-swoosh-leave-to {
  opacity: 0;
  transform: translateX(-40px) scale(0.98);
}
</style>


