<script lang="ts" setup>
import MobileNav from '@/components/MobileNav.vue'
import { navLinks } from '@/lib/constant'
</script>

<template>
  <header>
    <div class="header_container">
      <div>
        <a href="/"><img src="/sim_logo.svg" alt="" /></a>
      </div>
      <nav>
        <ul>
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href">{{ link.name }}</a>
          </li>
        </ul>
      </nav>
      <div class="mobile_nav">
        <img src="../assets/icons/moon_icon.svg" alt="" />
        <MobileNav :navLinks="navLinks" />
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference 'tailwindcss';

header {
  @apply bg-black/80 blur-3xl fixed top-0 left-0 right-0 z-50;
}

.header_container {
  @apply flex items-center justify-between px-4 py-[13px];
}

.header_container img {
  @apply h-[45px] w-[45px];
}

nav ul {
  @apply hidden md:flex space-x-4;
}

nav a {
  @apply text-gray-300 hover:text-white;
}

.mobile_nav {
  @apply flex items-center gap-4 md:hidden;
}

.mobile_nav img {
  @apply h-5 w-5;
}
</style>
