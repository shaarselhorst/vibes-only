<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
</script>

<template>
  <main class="min-h-dvh flex flex-col">
    <div class="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl">
      <div class="w-full max-w-3xl mx-auto px-6 py-4 text-center relative">
        <TopBar />
        <h1 class="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">Get Started</h1>
        <p class="mt-2 text-zinc-600 dark:text-zinc-300">Follow these steps to turn an idea into a v1.</p>
      </div>
    </div>

      <ol class="mt-6 space-y-4 list-decimal pl-5 text-left w-full max-w-3xl mx-auto px-6">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Pick an idea</strong> you’re excited about.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Create <code>DESIGN.md</code></strong> in your project and paste the idea at the top.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Dump your thoughts</strong>: write requirements, desired outcomes, key features, display/UX ideas, and what form the app should take.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Textualize the app</strong>: freely expand on the idea—unfiltered, rough notes are fine.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Provide a user example</strong>: describe who will use it, how they’ll use it, what it provides, and the expected result.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Ask AI to refine</strong>: request a concrete design; ask it to structure and clean up your text.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Iterate</strong>: call out what you liked and didn't like, add examples of what you want and don't want, add/adjust requirements, and clarify constraints.</li>
      </ol>

  </main>
</template>


