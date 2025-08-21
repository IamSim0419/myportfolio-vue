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
          <p>Currently a freelance Frontend Developer, previously at FlexCode.</p>
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
  @apply text-[38px];
}

.hero_details {
  @apply flex items-center mt-40;
}

.hero_details img {
  @apply content-end border;
}

.hero_info p {
  @apply text-neutral-700;
}

.divider {
  @apply border-t border-gray-300 my-10;
}
</style>
