<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref<HTMLElement | null>(null)
const aboutContent = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    const container = aboutSection.value
    const left = container?.querySelector<HTMLElement>('.box1')
    const right = aboutContent.value

    ctx!.matchMedia({
      // Desktop only
      '(min-width: 1025px)': () => {
        if (!container || !left || !right) return

        // Pin left side
        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: () => `+=${Math.max(0, right.scrollHeight - left.offsetHeight)}`,
          pin: left,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        })

        // Animate right content
        gsap.utils.toArray<HTMLElement>(right.querySelectorAll('p, h3, li, img')).forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          })
        })

        ScrollTrigger.refresh()
      },

      // Tablet & mobile → no pinning
      '(max-width: 1024px)': () => {
        // Just natural scroll, no pin
      },
    })
  }, aboutSection) // 👈 scoped to your section
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<template>
  <section ref="aboutSection" id="about" class="">
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
  @apply max-w-[1440px] w-full mx-auto mt-30;
}

.about_container {
  @apply mx-4 md:mx-8 lg:mx-[65px] lg:flex;
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
  @apply text-[35px] lg:text-[65px] pt-3;
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
