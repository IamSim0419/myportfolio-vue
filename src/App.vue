<script setup lang="ts">
import HeaderSection from '@/sections/HeaderSection.vue'
import HeroSection from '@/sections/HeroSection.vue'
import ProjectSection from '@/sections/ProjectSection.vue'
import TechSection from '@/sections/TechSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import CursorPointer from '@/components/CustomCursor.vue'
import { ref, watch } from 'vue'

// 🌙 Theme logic
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const theme = ref(localStorage.getItem('theme') ?? (prefersDark ? 'dark' : 'light'))

watch(
  theme,
  (newTheme) => {
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  },
  { immediate: true },
)

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <!-- Outer wrapper with Tailwind dark classes -->
  <div>
    <CursorPointer />
    <HeaderSection @toggleTheme="toggleTheme" :theme="theme" />

    <!-- GSAP ScrollSmoother wrapper -->
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
  </div>
</template>

<!-- ❌ Do NOT use scoped here -->
<style>
/* Global CSS if needed */
</style>

<style></style>
