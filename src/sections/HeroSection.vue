<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSplitText } from '@/composables/useSplitText'

const isDesktop = ref(false)
const heroTitleEl = ref<HTMLElement | null>(null)
const selectedTextEL = ref<HTMLElement | null>(null)
const heroInfoRef = ref<HTMLElement | null>(null)

const checkDesktop = () => {
  isDesktop.value = window.innerWidth >= 1024
}

onMounted(() => {
  checkDesktop()
  window.addEventListener('resize', checkDesktop)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkDesktop)
})

// plug in composable
useSplitText(heroTitleEl, undefined, { type: 'lines', stagger: 0.2, y: 100 })
useSplitText(selectedTextEL, isDesktop)
useSplitText(heroInfoRef, undefined, { type: 'words', stagger: 0.08, y: 50 })
</script>

<template>
  <section>
    <!-- Blur background effects -->
    <div class="hero_effects"></div>
    <div class="hero-container">
      <h1 ref="heroTitleEl" class="hero-content">
        I'm Simreich,<br />
        a frontend developer who enjoys solving design-to-code challenges with precision and
        creativity.
      </h1>

      <div class="hero_details">
        <div ref="heroInfoRef" class="hero_info">
          <p>
            Currently a freelance Frontend Developer, <br />
            previously at <span>FlexCode</span>.
          </p>
          <p>Based in Philippines, Iloilo</p>
        </div>

        <div class="hero_works">
          <!-- Only render on desktop (lg and up) -->
          <p v-if="isDesktop" ref="selectedTextEL">See Selected Works</p>
          <img src="../assets/icons/arrow-down.svg" alt="Arrow Down" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply relative max-w-[1440px] mx-auto overflow-hidden;
}

.hero_effects {
  @apply absolute w-[300px] h-[600px] bg-[##e6f2ff] rounded-full top-0 right-0 z-50;
}

.hero-container {
  @apply px-4 md:px-8 lg:px-[65px] w-full h-screen
         flex flex-col justify-between; /* <-- important */
}

.hero-container h1 {
  @apply text-[45px] md:text-[55px] lg:text-[65px]
         leading-[48px] md:leading-15 lg:max-w-[990px];
}

.hero-content {
  @apply mt-28 md:mt-38; /* adjust vertical offset safely */
}

.hero_details {
  @apply flex items-center justify-between w-full
         border-b border-[#6B6B6B]/50 pb-4 mb-12;
}

.hero_works {
  @apply flex items-center gap-2 self-end text-[12px] lg:text-[15px];
}

.hero_works p {
  @apply text-[15px] overflow-hidden;
}

.hero_works img {
  @apply w-4 h-4;
}

.hero_info {
  @apply flex flex-col gap-3;
}

.hero_info p {
  @apply text-[#6B6B6B] text-[12px] lg:text-[15px] leading-5;
}

.hero_info span {
  @apply text-[#7000FF];
}
</style>
