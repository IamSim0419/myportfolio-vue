<script lang="ts" setup>
import MobileNav from '@/components/MobileNav.vue'
import { navLinks } from '@/lib/constant'

const emit = defineEmits<{
  navigate: [id: string]
}>()
</script>

<template>
  <header>
    <div class="header_container">
      <div>
        <a href="/"><img class="logo" src="/sim_logo.svg" alt="logo" /></a>
      </div>
      <div class="desktop_nav">
        <img class="moon_icon" src="../assets/icons/moon_icon.svg" alt="" />
        <nav>
          <ul>
            <li @click="emit('navigate', link.id)" v-for="link in navLinks" :key="link.id">
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
  @apply bg-black/40 border-b border-white/10 fixed top-0 left-0 right-0 z-50;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.header_container {
  @apply flex items-center justify-between px-4 py-[12px] md:px-[50px] md:py-[15px] lg:py-[20px];
}

.header_container .logo {
  @apply h-[38x] w-[38px] transition-all duration-500;
}

.header_container .logo:hover {
  @apply transform -translate-y-1;
}

.desktop_nav {
  @apply flex items-center gap-2 md:gap-3 lg:gap-10;
}

.desktop_nav .moon_icon {
  @apply h-[16px] w-[16px] transition-all duration-500;
}

.desktop_nav .moon_icon:hover {
  @apply transform -translate-y-2;
}

nav ul {
  @apply hidden lg:flex gap-10;
}

nav li {
  @apply text-base transition-all duration-500 text-gray-300 hover:text-white;
}

nav li:hover {
  @apply transform -translate-y-2;
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
