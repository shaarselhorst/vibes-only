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

    <section class="w-full max-w-3xl mx-auto px-6 mt-8 text-left">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Concept to Design</h2>
      <ol class="mt-4 space-y-4 list-decimal pl-5 text-left">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Pick an idea</strong> you’re excited about.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Create a <code>DESIGN.md</code></strong> in your project and paste the idea at the top.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Dump your thoughts</strong>: write requirements, desired outcomes, key features, display/UX ideas, and what form the app should take.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Textualize the app</strong>: freely expand on the idea—unfiltered, rough notes are fine.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Provide a user example</strong>: describe who will use it, how they’ll use it, what it provides, and the expected result.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Ask AI to refine</strong>: request a concrete design; ask it to structure and clean up your text.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Iterate</strong>: call out what you liked and didn't like, add examples of what you want and don't want, add/adjust requirements, and clarify constraints.</li>
      </ol>
    </section>

    <section class="w-full max-w-3xl mx-auto px-6 mt-10 text-left">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Execution</h2>
      <p class="mt-3 text-zinc-700 dark:text-zinc-300">
        There isn’t a single “correct” way to build an app with AI. Your context matters—use the
        suggestions below as options, mix and match, or ignore them and try your own path. Find what works for you.
      </p>

      <h3 class="mt-6 text-lg font-medium text-zinc-900 dark:text-zinc-100">Decide your stance</h3>
      <ul class="mt-3 list-disc pl-5 space-y-2">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Purpose and horizon</strong>: do you want something that simply works today, or a foundation for ongoing iterations?</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Maintenance</strong>: will you maintain the code yourself, or is this a one-off utility?</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Involvement</strong>: do you plan to review changes thoroughly and code alongside the AI, or delegate more and move fast?</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Risk tolerance</strong>: how much complexity, refactoring, and tech debt are you comfortable accepting?</li>
      </ul>

      <h3 class="mt-6 text-lg font-medium text-zinc-900 dark:text-zinc-100">Example: “small scope, just ship it”</h3>
      <p class="mt-3 text-zinc-700 dark:text-zinc-300">
        If you want a small app done quickly and don’t plan to maintain it, a practical approach is to start from a
        minimal, bootable project and let the AI build on top.
      </p>
      <ol class="mt-3 list-decimal pl-5 space-y-2">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Choose a bootstrap path</strong>:
          <ul class="mt-2 list-disc pl-5 space-y-2">
            <li>Ask the AI to initialize with your preferred stack.</li>
            <li>Let the AI pick the stack entirely.</li>
            <li>Manually initalize a “Hello World”: for rigid platforms (e.g., Android/iOS), use official templates;
              for the web, consider a Vue 3/React/Svelte/Solid/etc. + Vite + Tailwind setup (as this site does).
            </li>
          </ul>
        </li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Why pre-bootstrapping helps</strong>:
          <ul class="mt-2 list-disc pl-5 space-y-2">
            <li>The AI can read your file structure and scripts, so it proposes changes in the right places.</li>
            <li>Locked-in dependency versions.</li>
            <li>If you can confirm it can run, before AI making changes to it, it's easier to iterate.</li>
          </ul>
        </li>
      </ol>

      <h3 class="mt-6 text-lg font-medium text-zinc-900 dark:text-zinc-100">Creating the app</h3>
      <p class="mt-3 text-zinc-700 dark:text-zinc-300">
        Create a <code>TODO.md</code> that uses your <code>DESIGN.md</code> to create concrete technical requirements.
        Specify the kind of app you’re building and
        define a minimal MVP with prioritized features, acceptance criteria, and constraints. If you’ve already bootstrapped a project, let the AI analyze the codebase and tailor its
        suggestions to that stack. Describe the bare-bones version first—for this site, the MVP was a
        single button that selected an idea from JSON files and displayed it. If you think you are ready, write a prompt to execute the TODO.md.
        
        From there, iterate: enhance the UI, add
        and layer small features and UX improvements. Decide what you want to see and then grow it incrementally.
      </p>

      <h3 class="mt-6 text-lg font-medium text-zinc-900 dark:text-zinc-100">Expanding</h3>
      <ul class="mt-3 list-disc pl-5 space-y-2">
        <li class="text-zinc-800 dark:text-zinc-200">Ask the AI to implement features incrementally; run the app after each edit.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Prefer simple, boring solutions over clever abstractions.</li>
        <li class="text-zinc-800 dark:text-zinc-200">If the AI gets stuck, restate constraints, show errors, or simplify the task.</li>
      </ul>
    </section>

  </main>
</template>




