<script lang="ts" setup>
import { nextTick, onBeforeMount, onMounted, ref } from 'vue'

defineProps<{
  projects: {
    title: string
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
          // console.log(entry.target)
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

// Track expanded descriptions by title (or index)
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
      <div class="card_image group">
        <div class="arrow_icon"><img src="../assets/icons/arrow-down.svg" alt="arrow icon" /></div>
        <img :class="project.class" :src="project.image" alt="project image" />
      </div>

      <h4>{{ project.title }}</h4>

      <div class="card_description">
        <p :class="expanded === project.title ? 'line-clamp-none' : 'line-clamp-2 lg:line-clamp-1'">
          {{ project.description }}
        </p>
        <span @click="toggleExpand(project.title)">
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
  @apply grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-10;
}

.project_list {
  @apply opacity-0 transition-all scale-[90%] duration-800;
}

.project_list.show {
  @apply opacity-100 scale-100;
}

/* Special spanning for card01 */
.card_container .card_01 {
  @apply lg:col-span-3;
}

.project_card.card_01 img {
  @apply lg:aspect-[16/7];
}

.project_card {
  @apply rounded-xl;
}

.project_card img {
  @apply w-full aspect-square md:aspect-video object-cover md:object-top rounded-2xl transition-transform duration-300;
}

.project_card img:hover {
  @apply scale-[102%];
}

.card_image {
  @apply relative;
}

.card_image .arrow_icon {
  @apply absolute bg-lime-500 py-8 px-7 rounded-full top-5 right-10  transition-all duration-300 z-50 opacity-0 group-hover:translate-x-6 group-hover:opacity-100 -rotate-90;
}

.project_card h4 {
  @apply text-[16px] md:text-[18px] mt-3;
}

.card_description p {
  @apply text-[14px] md:text-[15px] text-[#8D8C95] mt-1;
}

.card_description span {
  @apply cursor-pointer transition-all duration-300 text-sm;
}

.tech_badge {
  @apply inline-block border border-[#8D8C95] rounded-[12px] px-3 py-[2px] text-[12px] mr-2 mt-2;
}
</style>
