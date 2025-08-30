<script lang="ts" setup>
import { techStack } from '@/lib/constant'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// Split testimonials into two rows
const techStackRow1 = techStack.slice(0, Math.ceil(techStack.length / 2))
const techStackRow2 = techStack.slice(Math.ceil(techStack.length / 2))

const row1Ref = ref<HTMLDivElement | null>(null)
const row2Ref = ref<HTMLDivElement | null>(null)
const row1Animation = ref<gsap.core.Tween | null>(null)
const row2Animation = ref<gsap.core.Tween | null>(null)
const isHovered = ref(false)

onMounted(() => {
  if (row1Ref.value) {
    const distance = row1Ref.value.scrollWidth / 2

    row1Animation.value = gsap.to(row1Ref.value, {
      x: -distance,
      duration: 130,
      ease: 'none',
      repeat: -1,
      paused: isHovered.value,
    })
  }

  if (row2Ref.value) {
    const distance = row2Ref.value.scrollWidth / 2

    row2Animation.value = gsap.fromTo(
      row2Ref.value,
      {
        x: -distance,
      },
      {
        x: 0,
        duration: 130,
        ease: 'none',
        repeat: -1,
        paused: isHovered.value,
      },
    )
  }
})
</script>

<template>
  <section>
    <div class="tech_container">
      <h2>Skills</h2>
      <div class="tech_rows fade">
        <!-- Row 1 -->
        <div ref="row1Ref" class="row">
          <ul
            v-for="(tech, i) in [...techStackRow1, ...techStackRow1]"
            :key="`${tech.name}-row1-${i}`"
            class="row_tech"
          >
            <li v-for="tech in techStackRow1" :key="tech.name">
              <img :src="tech.icon" alt="tech.name" />
            </li>
          </ul>
        </div>

        <!-- Row 2 -->
        <div ref="row2Ref" class="row">
          <ul
            v-for="(tech, i) in [...techStackRow2, ...techStackRow2]"
            :key="`${tech.name}-row1-${i}`"
            class="row_tech"
          >
            <li v-for="tech in techStackRow2" :key="tech.name">
              <img :src="tech.icon" alt="tech.name" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply max-w-[1440px] mx-auto mt-30;
}

.tech_container {
  @apply mx-4 md:mx-8 lg:mx-[65px];
}

.tech_container > h2 {
  @apply text-[32px] lg:text-5xl mb-16 lg:mb-22;
}

.tech_rows {
  @apply flex flex-col gap-16;
}

.tech_rows .row {
  @apply flex items-center gap-32;
}

.tech_rows .row_tech {
  @apply flex-shrink-0 will-change-transform transition-all duration-300 flex gap-20 md:gap-28 lg:gap-38;
}

.tech_rows img {
  @apply w-auto h-[35px] md:h-[40px];
}

.fade {
  @apply overflow-hidden flex relative after:content-[''] after:bg-gradient-to-l after:from-black after:to-transparent  after:right-0 after:bottom-0 after:top-0 after:w-20 after:z-10 after:absolute before:content-[''] before:bg-gradient-to-r before:from-black before:to-transparent  before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:absolute;
}
</style>
