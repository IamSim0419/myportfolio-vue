<script lang="ts" setup>
import MobileNav from '@/components/MobileNav.vue'
import { navLinks } from '@/lib/constant'
import { useGsapScrollTrigger } from '@/composables/useGsapScollTrigger'
import { onMounted, useTemplateRef } from 'vue'
import { gsap } from 'gsap'
// import { Icon } from '@iconify/vue'

const headerRef = useTemplateRef<HTMLElement>('header')

defineProps(['theme'])

defineEmits<{
  toggleTheme: () => void
}>()

const scrollToSection = (sectionId: string) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: `#${sectionId}`, offsetY: 80 },
    ease: 'power2.out',
  })
}

onMounted(() => {
  useGsapScrollTrigger(headerRef.value, { preset: 'slide-down', once: true, duration: 1 })
})
</script>

<template>
  <header ref="header">
    <div class="header_container">
      <div class="logo">
        <div class="logo_effect"></div>
        <a href="/"><img src="/sim_logo.svg" alt="logo" /></a>
      </div>
      <div class="desktop_nav">
        <!-- <div  @click="$emit('toggleTheme')">

          <Icon v-if="theme === 'light'" icon="ri:moon-line" />

          <Icon v-else icon="ri:sun-line" class="text-black" />
        </div> -->

        <nav>
          <ul>
            <li
              @click="scrollToSection(link.id)"
              v-for="link in navLinks"
              :key="link.id"
              class="nav_links"
            >
              {{ link.label }}
            </li>

            <!-- Resume download -->
            <a href="/resume/Simreich_CV.pdf" download class="nav_links resume_download">
              Resume
            </a>
          </ul>
        </nav>
        <div class="mobile_nav">
          <MobileNav @scroll-to="scrollToSection" :navLinks="navLinks" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import 'tailwindcss';

header {
  @apply bg-black/40 border-b border-white/10 fixed top-0 left-0 right-0 z-20;
  backdrop-filter: blur(10px);
}

/* .dark header {
  @apply bg-white/40 border-black/10;
} */

.header_container {
  @apply flex items-center justify-between px-4 py-[12px] md:px-[32px] lg:px-[50px] md:py-[15px] lg:py-[20px];
}

.header_container img {
  @apply relative h-[38x] w-[38px] transition-all duration-300 lg:cursor-none;
}

.header_container .logo {
  @apply relative;
}

.logo_effect {
  @apply w-[20px] h-[20px] bg-[#e6f2ff] absolute rounded-[4px] -top-[2px] -right-[2px];
  filter: blur(16px);
}

.header_container img:hover {
  @apply transform -translate-y-1;
}

.desktop_nav {
  @apply flex items-center gap-2 md:gap-3 lg:gap-10;
}

.desktop_nav svg {
  @apply h-[20px] w-[20px] transition-transform duration-300;
}

.desktop_nav svg:hover {
  @apply transform -translate-y-1;
}

nav ul {
  @apply hidden lg:flex gap-10;
}

nav .nav_links {
  @apply text-base transition-all duration-300 text-white;
}

/* .dark nav .nav_links {
  @apply text-black;
} */

nav .nav_links:hover {
  @apply transform -translate-y-1;
}

nav a {
  @apply text-gray-300 hover:text-white;
}

.mobile_nav {
  @apply flex items-center gap-4 lg:hidden;
}

.resume_download {
  @apply lg:cursor-none;
}

.mobile_nav img {
  @apply h-4 w-4 lg:flex;
}
</style>
