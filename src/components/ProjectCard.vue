<script lang="ts" setup>
import { ref } from 'vue'

import { useGsapScrollTrigger } from '@/composables/useGsapScollTrigger'
import { onMounted, useTemplateRef } from 'vue'

const cardRef = useTemplateRef<HTMLElement>('card')

onMounted(() => {
  useGsapScrollTrigger(cardRef.value, { preset: 'scale-in', once: true })
})

defineProps<{
  projects: {
    title: string
    description: string
    image: string
    tech: string[]
    class: string
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
    <article
      ref="card"
      v-for="project in projects"
      :key="project.title"
      :class="['project-card', project.class]"
    >
      <img :class="project.class" :src="project.image" alt="project image" />
      <h4>{{ project.title }}</h4>

      <div class="card_description">
        <p :class="expanded === project.title ? 'line-clamp-none' : 'line-clamp-2 lg:line-clamp-1'">
          {{ project.description }}
        </p>
        <span @click="toggleExpand(project.title)">
          {{ expanded === project.title ? 'Less' : 'More' }}
        </span>
      </div>

      <div v-for="value in project.tech" :key="value" class="tech-badge">
        <small>{{ value }}</small>
      </div>
    </article>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.card_wrapper {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-10;
}

/* Special spanning for card01 */
.project-card img:nth-child(1) {
  @apply lg:col-span-3;
}

/* .card_01 img {
  @apply lg:aspect-[16/7];
} */

.project-card {
  @apply rounded-lg shadow-md overflow-hidden;
}

.project-card img {
  @apply w-full aspect-square md:aspect-video object-cover md:object-top rounded-[16px] hover:scale-105 transition-all duration-300;
}

.project-card img:hover {
  @apply scale-105;
}

.project-card h4 {
  @apply text-[18px] md:text-[20px] mt-3;
}

.card_description p {
  @apply text-[14px] md:text-[16px] text-[#8D8C95] mt-1;
}

.card_description span {
  @apply cursor-pointer transition-all duration-300 text-sm;
}

.tech-badge {
  @apply inline-block border border-[#8D8C95] rounded-[12px] px-3 py-[2px] text-[12px] mr-2 mt-2;
}
</style>
