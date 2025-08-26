<script lang="ts" setup>
import AboutAccordion from '@/components/AboutAccordion.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref<HTMLElement | null>(null)
const aboutContent = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()

  if (!aboutSection.value || !aboutContent.value) return

  const section = aboutSection.value
  const content = aboutContent.value

  gsap.set(content, { y: 100, opacity: 1 })

  const getScrollLength = () => {
    const total = content.scrollHeight
    const viewport = window.innerHeight
    return Math.max(total - viewport, 0)
  }

  const tween = gsap.to(content, {
    y: () => -getScrollLength(),

    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top 12%',

      end: () => `+=${getScrollLength()}`,
      scrub: true,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true, // recompute on resize
    },
  })

  const onResize = () => ScrollTrigger.refresh()
  window.addEventListener('resize', onResize)

  onUnmounted(() => {
    window.addEventListener('resize', onResize)
    tween.scrollTrigger?.kill()
    tween.kill()
  })
})
</script>

<template>
  <section ref="aboutSection" id="about" class="overflow-hidden">
    <div class="about_container">
      <!-- About label left side -->
      <div class="box box1">
        <h2>About</h2>
      </div>

      <!-- About Content right side -->
      <div ref="aboutContent" class="box box2 opacity-0">
        <p class="about_text" id="about">
          I'm Simreich, a frontend developer with 2 years of experience based in the Philippines.
          Currently, I work as a freelance developer, helping clients build modern, responsive, and
          high-performance websites.
          <br />
          <br />
          Previously, I worked as a Frontend Developer at <span>FlexCode</span>, a local company,
          where I contributed to developing scalable web applications and collaborated with
          cross-functional teams to deliver user-focused solutions.
          <br />
          <br />
          I specialize in creating seamless digital experiences, writing clean and maintainable
          code, and continuously improving my skills to adapt to the evolving web landscape.
        </p>

        <div id="experience">
          <AboutAccordion />
        </div>

        <div id="about_image" class="about_image">
          <img src="../assets/images/myprofile-pic.png" alt="my profile" />
          <p>This is me :)</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply min-h-screen max-w-[1440px] mx-auto mt-30 md:mt-40;
}

.about_container {
  @apply px-4 md:px-8 lg:px-[65px] lg:flex;
}

.box {
  @apply lg:flex-1/2;
}

.box1 {
  @apply border-t border-[#6B6B6B]/60;
}

.box2 {
  @apply lg:ml-8;
}

.about_container h2 {
  @apply text-[35px] lg:text-[65px] mt-3;
}

.about_container .about_text {
  @apply text-[17px] lg:text-[28px] leading-6 lg:leading-[35px] mt-4;
}

.about_container span {
  @apply text-[#7000FF];
}

.about_image {
  @apply mt-20;
}

.about_image p {
  @apply text-sm text-gray-500 mt-1;
}

.about_image img {
  @apply w-full h-auto rounded-lg;
}
</style>
