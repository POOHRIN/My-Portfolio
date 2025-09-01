<script setup lang="ts">
import type { Project } from '../data/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    class="bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col"
  >
    <h3 class="text-xl font-semibold mb-2 text-gray-100">{{ project.title }}</h3>
    <p class="text-gray-300 flex-1">{{ project.description }}</p>
    <div class="mt-4 flex gap-3">
      <!-- Show Live Demo button only if demoLink exists -->
      <a
        v-if="project.demoLink"
        :href="project.demoLink"
        target="_blank"
        class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Live Demo
      </a>

      <!-- Show GitHub Repo button only if repoLink exists -->
      <a
        v-if="project.repoLink"
        :href="project.repoLink"
        target="_blank"
        class="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:bg-gray-700 transition"
      >
        GitHub Repo
      </a>
    </div>
  </div>
</template>
