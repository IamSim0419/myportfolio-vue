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
  @apply mx-4 md:mx-8 lg:mx-[65px];
}

.project_container > h2 {
  @apply text-[32px] lg:text-5xl mb-8;
}
</style>
