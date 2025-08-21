<script lang="ts" setup>
import MobileNav from '@/components/MobileNav.vue'

const navLinks = [
  { name: 'Work', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/projects' },
]
</script>

<template>
  <header class="bg-gray-900">
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
      <MobileNav :navLinks="navLinks" />
    </div>
  </header>
</template>

<style scoped>
@reference 'tailwindcss';

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
</style>
