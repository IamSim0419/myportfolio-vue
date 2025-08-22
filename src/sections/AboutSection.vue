<script lang="ts" setup>
import AboutDropdown from '@/components/AboutDropdown.vue'
</script>

<template>
  <section>
    <div class="about_container">
      <h2>About</h2>

      <p>
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
        I specialize in creating seamless digital experiences, writing clean and maintainable code,
        and continuously improving my skills to adapt to the evolving web landscape.
      </p>

      <AboutDropdown />
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply mt-30;
}

.about_container {
  @apply px-4 pt-8;
}

.about_container h2 {
  @apply text-[35px];
}

.about_container p {
  @apply text-[17px] mt-10 leading-6;
}

.about_container span {
  @apply text-[#7000FF];
}
</style>
