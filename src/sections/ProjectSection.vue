<script lang="ts" setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { ref } from 'vue'

import CypressImg from '@/assets/images/cypress-img.png'
import OfferJobsImg from '@/assets/images/offer-jobs.png'
import PortfolioImg from '@/assets/images/porfolio-img.png'

const projects = ref([
  {
    title: 'SaaS Modern Platform',
    description:
      'A sleek and intuitive SaaS platform designed to simplify complex workflows. Built with Vue and TypeScript, animated with GSAP, and styled with TailwindCSS to deliver a seamless user experience.',
    image: CypressImg,
    tech: ['Vue', 'TypeScript', 'GSAP', 'TailwindCSS'],
  },
  {
    title: 'JobSpots - Job Offer Platform',
    description:
      'A modern job marketplace where employers and job seekers connect effortlessly. Powered by Vue and Pinia for state management, with GSAP-driven interactions and a clean TailwindCSS interface for a polished experience.',
    image: OfferJobsImg,
    tech: ['Vue', 'TypeScript', 'GSAP', 'Pinia', 'TailwindCSS'],
  },
  {
    title: 'Portfolio',
    description:
      'A personal portfolio crafted to showcase projects and skills with style. Built using Vue and TypeScript, enhanced with GSAP animations, and designed with TailwindCSS for a modern, responsive look.',
    image: PortfolioImg,
    tech: ['Vue', 'TypeScript', 'GSAP', 'TailwindCSS'],
  },
])
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

.project_container {
  @apply p-4;
}

.project_container > h2 {
  @apply text-[35px] mb-10;
}
</style>
