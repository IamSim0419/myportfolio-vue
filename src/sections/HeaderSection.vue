<script lang="ts" setup>
import MobileNav from '@/components/MobileNav.vue'
import { navLinks } from '@/lib/constant'
</script>

<template>
  <header>
    <div class="header_container">
      <div>
        <a href="/"><img class="logo" src="/sim_logo.svg" alt="" /></a>
      </div>
      <div class="desktop_nav">
        <img class="moon_icon" src="../assets/icons/moon_icon.svg" alt="" />
        <nav>
          <ul>
            <li v-for="link in navLinks" :key="link.id">
              {{ link.label }}
            </li>
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
  @apply max-w-[1440px] mx-auto bg-black/80 fixed top-0 left-0 right-0 z-50;
}

.header_container {
  @apply flex items-center justify-between px-4 py-[13px] md:px-8 md:py-4 lg:px-[45px] lg:py-6;
}

.header_container .logo {
  @apply h-[45px] w-[45px];
}

.desktop_nav {
  @apply flex items-center gap-2 md:gap-3 lg:gap-10;
}

.desktop_nav .moon_icon {
  @apply h-[18px] w-[18px];
}

nav ul {
  @apply hidden lg:flex gap-10;
}

nav li {
  @apply text-xl;
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
