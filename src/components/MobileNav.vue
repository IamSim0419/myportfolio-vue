<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import gsap from 'gsap'

defineProps<{
  navLinks: {
    id: string
    label: string
  }[]
}>()

const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const linksRef = ref<HTMLAnchorElement[]>([])

function toggleNav() {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  if (menuRef.value) {
    gsap.set(menuRef.value, {
      xPercent: 100,
    })
  }
})

watch(
  () => isOpen.value,
  (isOpen) => {
    if (!menuRef.value) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    if (isOpen) {
      tl.to(menuRef.value, {
        xPercent: 0,
        duration: 0.5,
      }).from(
        linksRef.value,
        {
          opacity: 0,
          y: 20,
          stagger: 0.05,
        },
        '-=0.3',
      )
    } else {
      tl.to(menuRef.value, {
        xPercent: 100,
        duration: 0.4,
      })
    }
  },
)
</script>

<template>
  <div class="nav-container">
    <!-- Hamburger -->
    <button @click="toggleNav" class="hamburger-button">
      <span :class="['hamburger-line', { 'open-first': isOpen }]"></span>
      <span :class="['hamburger-line', 'middle-line', { 'open-middle': isOpen }]"></span>
      <span :class="['hamburger-line', { 'open-last': isOpen }]"></span>
    </button>
  </div>

  <!-- Menu -->
  <nav ref="menuRef" class="mobile-menu">
    <div class="menu-content">
      <a
        v-for="(link, i) in navLinks"
        :key="i"
        href="#"
        ref="el => linksRef[i] = el!"
        class="menu-link"
      >
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
@reference 'tailwindcss';

/* Container */
.nav-container {
  @apply relative;
}

/* Hamburger Button */
.hamburger-button {
  @apply relative z-50 p-3 focus:outline-none cursor-pointer;
}

.hamburger-line {
  @apply block w-6 h-0.5 bg-neutral-100 transition-all duration-300;
}

.middle-line {
  @apply my-[5px];
}

.open-first {
  @apply rotate-45 translate-y-2;
}

.open-middle {
  @apply opacity-0;
}

.open-last {
  @apply -rotate-45 -translate-y-1.5;
}

/* Mobile Menu */
.mobile-menu {
  @apply fixed top-0 right-0 w-full h-full bg-[#080808] shadow-lg z-40 lg:hidden;
}

.menu-content {
  @apply p-8 flex flex-col space-y-6 mt-20;
}

.menu-link {
  @apply text-lg font-semibold;
}

.menu-link:hover {
  color: var(--color-primaryPurple-600);
}

/* Buttons */
.mobile_btn {
  @apply flex flex-col;
}

.login_btn {
  @apply bg-neutral-900 py-2 px-6 rounded-md cursor-pointer hover:bg-neutral-800 mb-2;
}
</style>
