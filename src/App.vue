<script setup lang="ts">
import { useScrollTo } from '@/composables/useScrollTo'
import HeaderSection from '@/sections/HeaderSection.vue'
import HeroSection from '@/sections/HeroSection.vue'
import ProjectSection from '@/sections/ProjectSection.vue'
import TechSection from '@/sections/TechSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import CursorPointer from '@/components/CustomCursor.vue'

// Use the composable (no need for navigate event)
useScrollTo() // Initialize ScrollSmoother here to ensure it's available globally
</script>

<template>
  <CursorPointer />
  <HeaderSection />
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
