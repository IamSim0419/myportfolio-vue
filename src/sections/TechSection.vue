<script lang="ts" setup>
// Tech images for Tech Section
import FigmaIcon from '@/assets/icons/figma.svg'
import GsapIcon from '@/assets/icons/gsap.svg'
import VueIcon from '@/assets/icons/vue.svg'
import TypescriptIcon from '@/assets/icons/typescript.svg'

const techStack = [
  { name: 'Typescript', icon: TypescriptIcon },
  { name: 'Vue.js', icon: VueIcon },
  { name: 'Gsap', icon: GsapIcon },
  { name: 'Figma', icon: FigmaIcon },
]
</script>

<template>
  <section>
    <div class="tech_container">
      <h2>My skills</h2>
      <ul class="grid-wrapper">
        <li v-for="tech in techStack" :key="tech.name">
          <img :src="tech.icon" alt="tech.name" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply max-w-[1440px] mx-auto mt-30 md:mt-40;
}

.tech_container {
  @apply px-4 md:px-8 lg:px-[65px];
}

.tech_container .grid-wrapper {
  @apply grid grid-cols-2 gap-10;
}

.tech_container > h2 {
  @apply text-[35px] mb-10;
}

.tech_container img {
  @apply w-auto h-[40px];
}
</style>
