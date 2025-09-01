<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue"
import { projects } from "../data/project"
</script>

<template>
  <main class="min-h-screen bg-gray-900 text-gray-100">
    <div class="max-w-5xl mx-auto px-6 py-12">
      <h1 class="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
      <div class="grid gap-6">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
          class="w-full"
        />
      </div>
    </div>
  </main>
</template>

