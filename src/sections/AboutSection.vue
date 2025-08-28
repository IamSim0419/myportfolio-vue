<script lang="ts" setup>
import AboutAccordion from '@/components/AboutAccordion.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

// const mm = gsap.matchMedia()

let containerEl: HTMLElement | null = null;
let leftEl: HTMLElement | null = null;
let rightEl: HTMLElement | null = null;

onMounted( () => {
  const ctx = gsap.context(
    () => {
        if (!containerEl || !leftEl || !rightEl) return

        const st = ScrollTrigger.create({
          trigger: containerEl,
          start: "top top",
          end: () => `+=${Math.max(0, rightEl!.scrollHeight - leftEl!.offsetHeight)}`,
          pin: leftEl,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        })
      }
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
