<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
</script>

<template>
  <main class="min-h-dvh flex flex-col">
    <div class="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl">
      <div class="w-full max-w-3xl mx-auto px-6 py-4 text-center relative">
        <TopBar />
        <h1 class="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">Build With AI</h1>
        <p class="mt-2 text-zinc-600 dark:text-zinc-300">A short, opinionated path from idea → v1, plus tips for smooth iteration.</p>
      </div>
    </div>

    <section class="w-full max-w-3xl mx-auto px-6 mt-8 text-left">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">1) Choose your path</h2>
      <ol class="mt-4 space-y-3 list-decimal pl-5 text-left">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Pick an idea</strong> you care about.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Create <code>DESIGN.md</code></strong> with problem, outcome, users, constraints, and rough feature notes.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Dump your thoughts</strong>: requirements, desired outcomes, key features, and display/UX ideas.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Write freely to capture context—then <strong>ask AI to structure and clarify</strong>.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Add one short <strong>user scenario</strong> (who, how, expected result).</li>
      </ol>
    </section>

    <section class="w-full max-w-3xl mx-auto px-6 mt-10 text-left">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">2) Plan the build</h2>
      <p class="mt-3 text-zinc-700 dark:text-zinc-300">Set your stance:</p>
      <ul class="mt-2 list-disc pl-5 space-y-2">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Purpose and horizon</strong>: ship today vs. build a foundation.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Maintenance</strong>: ongoing ownership vs. one-off utility.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Involvement</strong>: hands-on alongside AI vs. delegating.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Risk tolerance</strong>: comfort with complexity/refactors/tech debt.</li>
      </ul>
      <ol class="mt-3 list-decimal pl-5 space-y-2">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Bootstrap</strong>:
          <ul class="mt-2 list-disc pl-5 space-y-2">
            <li>Ask AI to initialize with your preferred stack,</li>
            <li>or let AI pick the stack,</li>
            <li>or create a minimal “Hello World” (e.g., Vue 3 + Vite + Tailwind).</li>
          </ul>
        </li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Why it helps</strong>:
          <ul class="mt-2 list-disc pl-5 space-y-2">
            <li>The AI can read your file structure and scripts to propose changes in the right places.</li>
            <li>Locked-in, reproducible dependency versions.</li>
            <li>You can run a known-good app before iterating with AI.</li>
          </ul>
        </li>
      </ol>
    </section>

    <section class="w-full max-w-3xl mx-auto px-6 mt-10 text-left">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">3) Define the MVP</h2>
      <ol class="mt-4 space-y-3 list-decimal pl-5 text-left">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Create <code>TODO.md</code></strong> from your <code>DESIGN.md</code>: app type, prioritized features, acceptance criteria, and constraints.</li>
        <li class="text-zinc-800 dark:text-zinc-200">If bootstrapped, let AI analyze the codebase and tailor suggestions to your stack.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Start with the smallest slice that proves value. Example for this site: a single button selecting an idea from JSON and displaying it.</li>
      </ol>
    </section>

    <section class="w-full max-w-3xl mx-auto px-6 mt-10 text-left">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">4) Ship and iterate</h2>
      <ul class="mt-3 list-disc pl-5 space-y-2">
        <li class="text-zinc-800 dark:text-zinc-200">Implement in tiny steps; run the app after each edit.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Prefer simple, boring solutions over clever abstractions.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Enhance the UI and layer small UX improvements incrementally.</li>
        <li class="text-zinc-800 dark:text-zinc-200">When stuck, restate constraints, show errors, or reduce scope.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Call out what you liked and didn’t like; add examples of desired vs. undesired behavior.</li>
      </ul>
    </section>

  </main>
</template>




