<script setup lang="ts">
import type { Idea } from '@/types/idea'

defineProps<{ idea: Idea }>()
</script>

<template>
  <div class="mt-8 mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200/20 bg-zinc-900/60 p-6 shadow-xl backdrop-blur">
    <h2 class="text-2xl font-bold text-white">{{ idea.title }}</h2>
    <p class="mt-2 text-zinc-200">{{ idea.description }}</p>
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


