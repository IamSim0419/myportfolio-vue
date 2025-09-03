<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { nextTick, onBeforeMount, onMounted, ref } from 'vue'

defineProps<{
  projects: {
    title: string
    href: string
    description: string
    image: string
    tech: string[]
    class: string
  }[]
}>()

let observer: IntersectionObserver | null = null

onMounted(async () => {
  await nextTick()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    },
    {
      threshold: 0.3,
    },
  )

  const projectElements = document.querySelectorAll('.project_list')
  projectElements.forEach((el) => observer?.observe(el))
})

onBeforeMount(() => {
  observer?.disconnect()
})

// Track expanded descriptions by title
const expanded = ref<string | null>(null)

const toggleExpand = (title: string) => {
  expanded.value = expanded.value === title ? null : title
}
</script>

<template>
  <div ref="cardsRef" class="card_container">
    <article
      v-for="project in projects"
      :key="project.title"
      :class="['project_card', project.class]"
      class="project_list"
    >
      <a :href="project.href" target="_blank" class="card_image group">
        <div class="arrow_icon"><Icon icon="material-symbols:arrow-forward-rounded" /></div>

        <img :class="project.class" :src="project.image" alt="project image" />
      </a>

      <a class="project_title" :href="project.href">
        <h4>{{ project.title }}</h4>
      </a>

      <div class="card_description">
        <p :class="expanded === project.title ? 'line-clamp-none' : 'line-clamp-2 lg:line-clamp-1'">
          {{ project.description }}
        </p>
        <span @click="toggleExpand(project.title)" class="expand-toggle">
          {{ expanded === project.title ? 'Less' : 'More' }}
        </span>
      </div>

      <div v-for="value in project.tech" :key="value" class="tech_badge">
        <small>{{ value }}</small>
      </div>
    </article>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.card_container {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-10; /* Consistent 2-column grid on desktop */
}

.project_list {
  @apply opacity-0 transition-all scale-[90%] duration-800;
}

.project_list.show {
  @apply opacity-100 scale-100;
}

/* Special spanning for card01 */
.card_container .card_01 {
  @apply lg:col-span-2;
}

.project_card.card_01 img {
  @apply lg:aspect-[16/7]; /* Standard widescreen ratio */
}

.project_card {
  @apply rounded-xl; /* Enforce minimum height for alignment */
}

.project_card img {
  @apply w-full aspect-square md:aspect-video object-cover md:object-top rounded-2xl transition-transform duration-300 lg:cursor-none;
}

.project_card img:hover {
  @apply scale-[102%];
}

.project_title {
  @apply block lg:cursor-none;
}

.project_title:hover h4 {
  @apply text-neutral-300;
}

.card_image {
  @apply relative block;
}

.card_image .arrow_icon {
  @apply absolute hidden lg:block bg-lime-500 p-6 rounded-full top-10 right-22 transition-all duration-300 z-50 opacity-0 group-hover:translate-x-10 group-hover:opacity-100;
}

.card_image .arrow_icon svg {
  @apply w-6 h-6 text-neutral-900;
}

.project_title h4 {
  @apply text-[18px] lg:text-[24px] mt-3;
}

.card_description p {
  @apply text-[12px]  md:text-[14px] text-[#8D8C95];
}

.card_description span.expand-toggle {
  @apply cursor-pointer transition-all duration-300 text-sm px-2 py-1;
}

.tech_badge {
  @apply inline-block border border-[#8D8C95] rounded-[12px] px-3 py-[2px] text-[12px] mr-2 mt-2;
}
</style>
