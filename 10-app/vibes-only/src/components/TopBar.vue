<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const theme = ref<'light' | 'dark'>(
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'
)

function setTheme(next: 'light' | 'dark') {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(next)
  theme.value = next
  try {
    localStorage.setItem('theme', next)
  } catch {}
}

function toggleTheme() {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}
</script>

<template>
  <!-- This component assumes its parent container has position: relative -->
  <div class="absolute top-4 left-6 flex items-center gap-2">
    <RouterLink
      to="/"
      class="px-3 py-1.5 border border-zinc-300 text-zinc-700 dark:text-zinc-200 dark:border-zinc-600 rounded-lg bg-transparent hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 transition-colors duration-200"
      title="Go to Home"
    >Home</RouterLink>
    <RouterLink
      to="/guide"
      class="px-3 py-1.5 border border-zinc-300 text-zinc-700 dark:text-zinc-200 dark:border-zinc-600 rounded-lg bg-transparent hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 transition-colors duration-200"
      title="Open the Get Started Guide"
    >Guide</RouterLink>
  </div>
  <div class="absolute top-4 right-6 flex items-center gap-2">
    <button
      type="button"
      @click="toggleTheme"
      class="p-2 rounded-lg border text-zinc-800 bg-white/80 border-zinc-300 hover:bg-zinc-100 transition-colors duration-200 dark:text-zinc-200 dark:bg-zinc-800/60 dark:border-zinc-400/30 dark:hover:bg-zinc-700/60"
      :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
      :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10-8a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM5 12a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm13.657 6.657a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7.464 6.343a1 1 0 010-1.414L8.17 4.222A1 1 0 119.586 5.636l-.707.707a1 1 0 01-1.415 0zm11.314-1.414a1 1 0 010 1.414l-.707.707A1 1 0 1116.657 5l.707-.707a1 1 0 011.414 0zM7.464 17.657a1 1 0 011.414 0l.707.707A1 1 0 118.17 20.778l-.707-.707a1 1 0 010-1.414zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.752 15.002A9 9 0 1112.998 2.248a7 7 0 108.754 12.754z" />
      </svg>
    </button>
    <a 
      href="https://github.com/shaarselhorst/vibes-only" 
      target="_blank" 
      rel="noopener noreferrer"
      class="p-2 text-zinc-500 hover:text-zinc-900 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-white"
      title="View source code on GitHub"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</template>


