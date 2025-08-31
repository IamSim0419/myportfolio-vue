<script setup lang="ts">
import HeaderSection from '@/sections/HeaderSection.vue'
import HeroSection from '@/sections/HeroSection.vue'
import ProjectSection from '@/sections/ProjectSection.vue'
import TechSection from '@/sections/TechSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
import CursorPointer from '@/components/CustomCursor.vue'
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
