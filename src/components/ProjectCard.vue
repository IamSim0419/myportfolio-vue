<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  projects: {
    title: string
    description: string
    image: string
    tech: string[]
  }[]
}>()

// Track expanded descriptions by title (or index)
const expanded = ref<string | null>(null)

const toggleExpand = (title: string) => {
  expanded.value = expanded.value === title ? null : title
}
</script>

<template>
  <div class="card_wrapper">
    <article class="project-card" v-for="project in projects" :key="project.title">
      <img :src="project.image" alt="project image" />
      <h3>{{ project.title }}</h3>

      <!-- Description -->
      <div class="card_description">
        <p :class="expanded === project.title ? 'line-clamp-none' : 'line-clamp-2'">
          {{ project.description }}
        </p>
        <span @click="toggleExpand(project.title)">{{
          expanded === project.title ? 'Less' : 'More'
        }}</span>
      </div>

      <!-- Tech Badges -->
      <div v-for="value in project.tech" :key="value" class="tech-badge">
        <small>{{ value }}</small>
      </div>
    </article>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.card_wrapper {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-10;
}

.project-card {
  @apply rounded-lg shadow-md overflow-hidden;
}

.project-card img {
  @apply w-full aspect-square object-cover rounded-[16px];
}

.project-card h3 {
  @apply text-[18px] mt-3;
}

.card_description p {
  @apply text-[14px] text-[#8D8C95] mt-1;
}

.card_description span {
  @apply cursor-pointer transition-all duration-300 text-sm;
}

.tech-badge {
  @apply inline-block border border-[#8D8C95] rounded-[12px] px-3 py-[2px] text-[12px] mr-2 mt-2;
}
</style>
