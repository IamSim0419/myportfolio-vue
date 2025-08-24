<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/lib/constant'

import { useGsapScrollTrigger } from '@/composables/useGsapScollTrigger'
import { onMounted, useTemplateRef } from 'vue'

const projectRef = useTemplateRef<HTMLElement>('project')

onMounted(() => {
  useGsapScrollTrigger(projectRef.value, { preset: 'slide-up', once: true })
})
</script>

<template>
  <section ref="project" id="work">
    <div class="project_container">
      <h2>Selected works</h2>
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
  @apply text-[35px] mb-10 pt-4;
}
</style>
