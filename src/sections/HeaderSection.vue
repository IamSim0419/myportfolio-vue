<script lang="ts" setup>
import MobileNav from '@/components/MobileNav.vue'
import { navLinks } from '@/lib/constant'
import { useGsapScrollTrigger } from '@/composables/useGsapScollTrigger'
import { onMounted, useTemplateRef } from 'vue'
import { useNightMode } from '@/composables/useNightMode'
import { useScrollTo } from '@/composables/useScrollTo'

const headerRef = useTemplateRef<HTMLElement>('header')
const { isDark, toggleNightMode } = useNightMode()
const { scrollTo } = useScrollTo()

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
        <div @click="toggleNightMode()">
          <!-- Night mode = show moon -->
          <img v-if="isDark" class="moon_icon" src="@/assets/icons/moon_icon.svg" alt="Moon Icon" />
          <!-- Light mode = show sun -->
          <img v-else class="sun_icon" src="@/assets/icons/sun_icon.svg" alt="Sun Icon" />
        </div>

        <nav>
          <ul>
            <li
              class="nav_links"
              @click="scrollTo(link.id)"
              v-for="link in navLinks"
              :key="link.id"
            >
              {{ link.label }}
            </li>

            <!-- Resume download -->
            <a href="/resume/CV.pdf" download class="nav_links resume_download"> Resume </a>
          </ul>
        </nav>
        <div class="mobile_nav">
          <MobileNav :navLinks="navLinks" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference 'tailwindcss';

header {
  @apply dark:bg-black/40 bg-white/40 border-b border-white/10 fixed top-0 left-0 right-0 z-20;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.header_container {
  @apply flex items-center justify-between px-4 py-[12px] md:px-[32px] lg:px-[50px] md:py-[15px] lg:py-[20px];
}

.header_container img {
  @apply relative h-[38x] w-[38px] transition-all duration-300;
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

.desktop_nav .moon_icon {
  @apply h-[16px] w-[16px] transition-all duration-300;
}

.desktop_nav .sun_icon {
  @apply h-[25px] w-[25px] transition-all duration-300;
}

.desktop_nav .moon_icon:hover {
  @apply transform -translate-y-1;
}

nav ul {
  @apply hidden lg:flex gap-10;
}

nav .nav_links {
  @apply text-base transition-all duration-300 text-gray-300 hover:text-white;
}

nav .nav_links:hover {
  @apply transform -translate-y-1;
}

nav a {
  @apply text-gray-300 hover:text-white;
}

.mobile_nav {
  @apply flex items-center gap-4 lg:hidden;
}

.mobile_nav img {
  @apply h-4 w-4 lg:flex;
}
</style>
