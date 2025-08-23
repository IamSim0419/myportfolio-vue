<script lang="ts" setup>
import { navLinks } from '@/lib/constant'
import { socialLinks } from '@/lib/constant'
</script>

<template>
  <footer>
    <div class="footer_container">
      <div class="footer_wrapper">
        <div class="footer_col">
          <img src="/sim_logo.svg" alt="Logo" />
        </div>

        <div class="footer_col">
          <div class="footer_top">
            <a href="mailto:simreich1989@gmail.com" class="footer_contact">
              <h1>Let's talk <br />Drop me a line</h1>
              <img src="../assets/icons/arrow_area.svg" alt="arrow logo" />
            </a>
          </div>

          <div class="footer_links">
            <!-- Navigation Links -->
            <ul>
              <li v-for="link in navLinks" :key="link.id">
                {{ link.label }}
              </li>
            </ul>

            <!-- Social Links -->
            <ul>
              <li v-for="link in socialLinks" :key="link.href">
                <a :href="link.href">{{ link.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer_bottom">
        <p>Crafted with code, care, and caffeine</p>
        <p>@ 2025 Simreich Somogod</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@reference 'tailwindcss';

footer {
  @apply bg-[#131313] mt-50;
}

.footer_container {
  @apply px-4 md:px-8 lg:px-[115px] pt-50;
}

.footer_wrapper {
  @apply flex flex-col lg:flex-row;
}

.footer_col {
  @apply lg:basis-1/2;
}

.footer_top img {
  @apply h-[45px] w-[45px];
}

.footer_contact {
  @apply flex items-center mt-10 lg:mt-0 relative;
}

.footer_contact h1 {
  @apply text-[45px] leading-12 relative;
}

.footer_contact h1:hover {
  @apply text-[#7000FF] transition duration-300;
}

.footer_contact img {
  @apply h-[60px] w-[60px] absolute right-9 top-10 md:right-[380px] lg:right-[270px];
}

.footer_links {
  @apply flex items-center gap-6 md:gap-68 mt-30;
}

.footer_links ul {
  @apply flex flex-col gap-4;
}

.footer_links li {
  @apply mb-2;
}

.footer_links a {
  @apply text-[#BFBFBF] transition duration-300;
}

.footer_links a:hover {
  @apply text-[#7000FF];
}

.footer_bottom {
  @apply flex items-center justify-between mb-4 mt-30 border-t border-[#2A2A2A] p-4 text-[12px] text-[#BFBFBF];
}
</style>
