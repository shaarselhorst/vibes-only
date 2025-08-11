<script setup lang="ts">
const emit = defineEmits<{ (e: 'click'): void }>()

function onClick() {
  emit('click')
}
</script>

<template>
  <button
    type="button"
    @click="onClick"
    class="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
    aria-label="Start vibing!"
  >
    Start vibing!
  </button>
  
</template>


