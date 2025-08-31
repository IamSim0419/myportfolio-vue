<script lang="ts" setup>
import AboutAccordion from '@/components/AboutAccordion.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'
import debounce from 'lodash/debounce' // Ensure lodash is installed

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Use matchMedia for dynamic breakpoint handling (pin only)
  const mm = gsap.matchMedia()

  mm.add('(min-width: 1024px)', (context) => {
    const { cleanup } = context // Cleanup function for this media query

    const aboutSection = document.querySelector<HTMLElement>('.aboutSection')
    const leftScreen = document.querySelector<HTMLElement>('.box1')
    const rightScreen = document.querySelector<HTMLElement>('.box2')

    if (!aboutSection || !leftScreen || !rightScreen) return

    const pinTrigger = ScrollTrigger.create({
      trigger: aboutSection,
      start: 'top 11.4%',
      end: () => 'bottom 22.5%',
      pin: leftScreen,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      markers: true, // Keep for debugging if needed
    })

    // Debounced refresh on resize
    const refreshScrollTrigger = debounce(() => ScrollTrigger.refresh(), 250)
    window.addEventListener('resize', refreshScrollTrigger)

    // Cleanup on unmount or when breakpoint changes
    return () => {
      pinTrigger.kill() // Kill the pin ScrollTrigger
      window.removeEventListener('resize', refreshScrollTrigger)
      cleanup() // GSAP matchMedia cleanup
    }
  })

  // Animations for all screen sizes
  const rightScreen = document.querySelector<HTMLElement>('.box2')
  if (rightScreen) {
    gsap.utils
      .toArray(rightScreen.querySelectorAll<HTMLElement>('.about_text, .experience, .about_image'))
      .forEach((el) => {
        gsap.from(el as HTMLElement, {
          opacity: 0,
          y: 100,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
  }

  onUnmounted(() => {
    mm.revert() // Clean up all matchMedia instances
  })
})
</script>

<template>
  <section id="about" class="aboutSection">
    <div class="about_container">
      <!-- About label left side -->
      <aside class="box box1">
        <h2>About</h2>
      </aside>

      <!-- About Content right side -->
      <article ref="aboutContent" class="box box2">
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

        <div id="experience" class="experience">
          <AboutAccordion />
        </div>

        <div id="about_image" class="about_image">
          <img src="../assets/images/myprofile-pic.png" alt="my profile" loading="lazy" />
          <p>This is me :)</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply max-w-[1440px] w-full mx-auto mt-40 lg:mt-48;
}

.about_container {
  @apply mx-4 md:mx-8 lg:mx-[65px] flex flex-col lg:flex-row gap-6;
}

.box1 {
  @apply border-t border-[#6B6B6B]/60 lg:min-w-[50%];
}

.box2 {
  @apply pt-5 lg:min-w-[50%];
}

.about_container h2 {
  @apply text-[35px] lg:text-[65px];
}

.about_container .about_text {
  @apply text-[22px] lg:text-[28px] leading-7 lg:leading-[35px] mt-4;
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

/* Mobile/tablet fallback: disable pin only */
@media (max-width: 1023px) {
  .box1 {
    position: static !important; /* Disable pin */
  }
}
</style>
