<script lang="ts" setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/lib/constant'
</script>

<template>
  <section>
    <div class="project_container">
      <h2>Selected works</h2>

      <!-- Project cards -->
      <ProjectCard :projects="projects" />
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply max-w-[1440px] mx-auto mt-22;
}

.project_container {
  @apply px-4 md:px-8 lg:px-[65px];
}

.project_container > h2 {
  @apply text-[35px] mb-10;
}
</style>
