<script setup lang="ts">
import HeaderSection from '@/sections/HeaderSection.vue'
import HeroSection from '@/sections/HeroSection.vue'
import ProjectSection from '@/sections/ProjectSection.vue'
import TechSection from '@/sections/TechSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import FooterSection from '@/sections/FooterSection.vue'

import { onMounted, onBeforeUnmount } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useCustomCursor } from '@/composables/useCustomCursor'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let smoother: ScrollSmoother | null = null

onMounted(() => {
  smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.3,
    effects: true,
  })
})

onBeforeUnmount(() => {
  smoother?.kill()
})

function scrollToSection(id: string) {
  smoother?.scrollTo(`#${id}`, true, 'top top+=80')
}

useCustomCursor()
</script>

<template>
  <!-- Custom Cursor -->
  <div class="custom-cursor">
    <span class="custom-cursor-text text-black"></span>
  </div>

  <HeaderSection @navigate="scrollToSection" />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <HeroSection />
        <ProjectSection />
        <TechSection />
        <AboutSection />
      </main>
      <FooterSection />
    </div>
  </div>
</template>

<style scoped></style>
