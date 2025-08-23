<script lang="ts" setup></script>

<template>
  <section>
    <div class="hero-container">
      <h1>
        <span class="block">I'm Simreich,</span>
        <span class="block">
          a frontend developer who enjoys solving design-to-code challenges with precision and
          creativity.
        </span>
      </h1>

      <div class="hero_details">
        <div class="hero_info">
          <p>
            Currently a freelance Frontend Developer, <br />
            previously at <span>FlexCode</span>.
          </p>
          <p>Based in Philippines, Iloilo</p>
        </div>

        <img src="../assets/icons/arrow-down.svg" alt="Arrow Down" />
      </div>

      <div class="divider"></div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply h-screen max-w-[1440px] mx-auto overflow-hidden flex items-center;
}

.hero-container {
  @apply px-4 md:px-8 lg:px-[113px] w-full;
}

.hero-container h1 {
  @apply text-[45px] md:text-[55px] lg:text-[65px]
         leading-[48px] md:leading-15 lg:max-w-[850px];
}

.hero_details {
  @apply flex items-center justify-between w-full
         border-b border-[#6B6B6B]/50 relative top-16 lg:top-22 pb-4;
}

.hero_details img {
  @apply self-end w-4 h-4;
}

.hero_info {
  @apply flex flex-col gap-[28px];
}

.hero_info p {
  @apply text-[#6B6B6B] text-[12px] lg:text-[15px];
}

.hero_info span {
  @apply text-[#7000FF];
}

/* .divider {
  @apply border-t border-[#6B6B6B]/50 my-8;
} */
</style>
