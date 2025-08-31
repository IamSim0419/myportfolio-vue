<script lang="ts" setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { useSplitText } from '@/composables/useSplitText'

defineProps<{
  navLinks: { id: string; label: string }[]
}>()

const emit = defineEmits<{
  'scroll-to': [sectionId: string]
}>()

const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const linksRef = ref<Element[]>([])
const navLocRef = ref<HTMLElement | null>(null)
const navcontactRef = ref<HTMLElement | null>(null)

const scrollToSection = (sectionId: string) => {
  toggleNav()

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: `#${sectionId}`, offsetY: 80 },
    ease: 'power2.out',
  })
  emit('scroll-to', sectionId)
}

function toggleNav() {
  isOpen.value = !isOpen.value
}

onMounted(async () => {
  await nextTick()
  if (menuRef.value) gsap.set(menuRef.value, { xPercent: 100 })
  useSplitText(navLocRef, undefined, { type: 'words', y: 20 })
  useSplitText(navcontactRef, undefined, { type: 'lines', stagger: 0.2, y: 20 })
})

watch(
  () => isOpen.value,
  (isOpen) => {
    if (!menuRef.value) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    if (isOpen) {
      tl.to(menuRef.value, { xPercent: 0, duration: 0.5 }).from(
        linksRef.value,
        {
          opacity: 0,
          x: 50,
          ease: 'power.in',
          stagger: 0.2,
        },
        '-=0.3',
      )
    } else {
      tl.to(menuRef.value, { xPercent: 100, duration: 0.5 })
    }
  },
)
</script>

<template>
  <div class="nav_container">
    <button @click="toggleNav" class="hamburger_button">
      <span :class="['line', { 'open-first': isOpen }]"></span>
      <span :class="['line', 'middle-line', { 'open-middle': isOpen }]"></span>
      <span :class="['line', { 'open-last': isOpen }]"></span>
    </button>
  </div>
  <div ref="menuRef" class="mobile_menu">
    <nav>
      <ul class="menu_content">
        <li
          @click.prevent="scrollToSection(link.id)"
          v-for="(link, i) in navLinks"
          :key="link.id"
          :ref="(el) => (linksRef[i] = el! as Element)"
          class="nav_links"
        >
          {{ link.label }}
        </li>
        <a
          :ref="(el) => (linksRef[navLinks.length] = el! as Element)"
          href="/resume/CV.pdf"
          download
          class="nav_links"
          @click="toggleNav"
        >
          Resume
        </a>
      </ul>
    </nav>
    <div class="info">
      <p ref="navLocRef">Philippines,<br />Iloilo City</p>
      <div class="linkedin">
        <a ref="navContactRef" href="#"><p>Linkedin</p></a>
        <img src="../assets/icons/arrow_icon_left.svg" alt="arrow icon" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';
.hamburger_button {
  @apply relative z-50 p-3 focus:outline-none;
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
.mobile_menu {
  @apply p-6 fixed top-0 right-0 w-full dark:bg-[#080808] dark:text-white bg-[##FAFAFA] flex flex-col justify-between z-10 lg:hidden;
  height: 100dvh;
}
.menu_content {
  @apply py-6 md:p-8 flex flex-col space-y-3 mt-15;
}
.menu_content .nav_links {
  @apply text-5xl md:text-6xl transition-colors duration-300;
}
.info {
  @apply flex justify-between pb-4 md:p-8;
}
.info p {
  @apply text-[15px];
}
.info .linkedin {
  @apply flex items-center text-neutral-500 self-end;
}
.linkedin img {
  @apply w-[18px] -rotate-[35deg] bg-white;
  stroke: red;
}
</style>
