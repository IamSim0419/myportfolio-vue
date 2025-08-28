<script lang="ts" setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { useSplitText } from '@/composables/useSplitText'

defineProps<{
  navLinks: {
    id: string
    label: string
  }[]
}>()

const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const linksRef = ref<Element[]>([])
const navLocRef = ref<HTMLElement | null>(null)
const navcontactRef = ref<HTMLElement | null>(null)

function toggleNav() {
  isOpen.value = !isOpen.value
}

onMounted(async () => {
  await nextTick()
  if (menuRef.value) {
    gsap.set(menuRef.value, {
      xPercent: 100,
    })
  }

  useSplitText(navLocRef, undefined, { type: 'words', y: 20 })
  useSplitText(navcontactRef, undefined, { type: 'lines', stagger: 0.2, y: 20 })
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
          x: 50,
          delay: 0.3,
          stagger: 0.2,
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
  <div class="nav_container">
    <!-- Hamburger -->
    <button @click="toggleNav" class="hamburger_button">
      <span :class="['line', { 'open-first': isOpen }]"></span>
      <span :class="['line', 'middle-line', { 'open-middle': isOpen }]"></span>
      <span :class="['line', { 'open-last': isOpen }]"></span>
    </button>
  </div>

  <!-- Nav menu -->
  <div ref="menuRef" class="mobile_menu">
    <nav>
      <ul class="menu_content">
        <li v-for="(link, i) in navLinks" :key="link.id" :ref="(el) => (linksRef[i] = el!)">
          {{ link.label }}
        </li>
      </ul>
    </nav>

    <div class="info">
      <p ref="navLocRef">Based in Philippines, Iloilo</p>
      <a ref="navContactRef" href="#">Linkedin</a>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

/* Hamburger Button */
.hamburger_button {
  @apply relative z-50 p-3 focus:outline-none cursor-none;
}

.line {
  @apply block w-6 h-0.5 bg-neutral-200 transition-all duration-300;
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
.mobile_menu {
  @apply p-6 fixed top-0 right-0 w-full dark:bg-[#080808] dark:text-white bg-[##FAFAFA] flex flex-col justify-between z-10 lg:hidden;
  height: 100dvh;
}

.menu_content {
  @apply py-6 md:p-8 flex flex-col  space-y-6 mt-20;
}

.menu_content li {
  @apply text-3xl md:text-4xl font-semibold transition-colors duration-300;
}

.mobile_menu li:hover {
  @apply text-[#7000ff];
}

.mobile_menu .info {
  @apply flex justify-between text-neutral-500 pb-6 md:p-8;
}
</style>
