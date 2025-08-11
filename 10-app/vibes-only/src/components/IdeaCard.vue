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
  <div class="mt-8 mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200/20 bg-zinc-900/60 p-6 shadow-xl backdrop-blur relative">
    <!-- Copy Button -->
    <button
      @click="copyToClipboard(idea)"
      class="absolute top-4 right-4 p-2 rounded-lg border border-zinc-400/30 bg-zinc-800/60 hover:bg-zinc-700/60 transition-colors duration-200 group"
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

    <h2 class="text-2xl font-bold text-white pr-16">{{ idea.title }}</h2>
    <p class="mt-2 text-zinc-200">{{ idea.summary }}</p>
    <p class="mt-4 text-zinc-300">{{ idea.objective }}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in idea.tags"
        :key="tag"
        class="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>


