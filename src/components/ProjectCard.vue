<script lang="ts" setup>
defineProps<{
  projects: {
    title: string
    description: string
    image: string
    tech: string[]
  }[]
}>()
</script>

<template>
  <div class="card_wrapper">
    <article class="project-card" v-for="project in projects" :key="project.title">
      <img :src="project.image" alt="project image" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div v-for="value in project.tech" :key="value" class="tech-badge">
        <small>{{ value }}</small>
      </div>
    </article>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.card_wrapper {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10;
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

.project-card p {
  @apply text-[14px] text-[#8D8C95] mt-1 line-clamp-2;
}

.tech-badge {
  @apply inline-block border border-[#8D8C95] rounded-[12px] px-3 py-[2px] text-[12px] mr-2 mt-2;
}
</style>
