<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  click: []
}>()

const isPressed = ref(false)

const handleClick = () => {
  isPressed.value = true
  emit('click')
  
  // Reset the pressed state after animation
  setTimeout(() => {
    isPressed.value = false
  }, 150)
}
</script>

<template>
  <button
    @click="handleClick"
    :class="[
      'relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg transform transition-all duration-150 ease-out hover:scale-105 active:scale-95',
      isPressed ? 'scale-95 shadow-2xl' : 'shadow-lg'
    ]"
  >
    <!-- Glow effect -->
    <div class="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-75 animate-pulse"></div>
    
    <!-- Button content -->
    <span class="relative z-10">Get Vibing!</span>
    
    <!-- Sparkle effect -->
    <div class="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
    <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-300 rounded-full animate-ping" style="animation-delay: 0.5s"></div>
  </button>
</template>

<style scoped>
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>


