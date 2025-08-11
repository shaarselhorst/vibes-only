<script setup lang="ts">
const emit = defineEmits<{ (e: 'click'): void }>()

function onClick() {
  emit('click')
}
</script>

<template>
  <div class="relative group">
    <!-- Sparkle particles -->
    <div class="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
      <div class="absolute top-2 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-60"></div>
      <div class="absolute top-4 right-6 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping opacity-70" style="animation-delay: 0.5s;"></div>
      <div class="absolute bottom-3 left-8 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-60" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-4 right-4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping opacity-70" style="animation-delay: 1.5s;"></div>
    </div>
    
    <!-- Main button -->
    <button
      type="button"
      @click="onClick"
      class="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-200 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 animate-pulse"
      aria-label="Start vibing!"
    >
      <span class="relative z-10">Start vibing! ✨</span>
      
      <!-- Inner glow effect -->
      <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  </div>
</template>

<style scoped>
.bg-size-200 {
  background-size: 200% 100%;
}

.group:hover .bg-size-200 {
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>


