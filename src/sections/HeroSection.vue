<script lang="ts" setup></script>

<template>
  <section>
    <div class="hero-container">
      <h1>
        I'm Simreich, <br />
        a frontend developer who enjoys solving design-to-code challenges with precision and
        creativity.
      </h1>
      <div class="hero_details">
        <div class="hero_info">
          <p>
            Currently a freelance Frontend Developer, previously at
            <span class="text-azurePrimary-600">FlexCode</span>.
          </p>
          <p>Based in Philippines, Iloilo</p>
        </div>

        <img src="../assets/icons/arrow-down.svg" alt="" />
      </div>
      <div class="divider"></div>
    </div>
  </section>
</template>

<style scoped>
@reference 'tailwindcss';

section {
  @apply h-screen;
}

.hero-container {
  @apply px-4 pt-30;
}

.hero-container h1 {
  @apply text-[45px] leading-[48px];
}

.hero_details {
  @apply flex items-center mt-40;
}

.hero_details img {
  @apply self-end w-4 h-4;
}

.hero_info {
  @apply flex flex-col gap-[28px];
}

.hero_info p {
  @apply text-[#6B6B6B] text-base;
}

.divider {
  @apply border-t border-[#6B6B6B]/50 my-4;
}
</style>
