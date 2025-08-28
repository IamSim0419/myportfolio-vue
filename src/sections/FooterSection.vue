<script lang="ts" setup>
import { navLinks } from '@/lib/constant'
import { socialLinks } from '@/lib/constant'
</script>

<template>
  <footer>
    <div class="footer_container">
      <div class="footer_wrapper">
        <div class="footer_col">
          <div class="logo_effect"></div>
          <img class="logo" src="/sim_logo.svg" alt="Logo" />
        </div>

        <div class="footer_col">
          <div class="email">
            <h1>Let's talk</h1>
            <a class="send_email" href="mailto:simreich1989@gmail.com">
              <h1 class="hovered_email">Drop me a line</h1>
              <img src="../assets/icons/arrow_area.svg" alt="arrow logo" />
            </a>
          </div>

          <div class="links">
            <!-- Navigation Links -->
            <ul>
              <li class="list_link group" v-for="link in navLinks" :key="link.id">
                <div class="bullet_icon"></div>
                <p>{{ link.label }}</p>
              </li>
            </ul>

            <!-- Social Links -->
            <ul>
              <li class="list_link group" v-for="link in socialLinks" :key="link.href">
                <div class="bullet_icon"></div>
                <p class="inline">
                  <a :href="link.href">{{ link.name }}</a>
                </p>
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
  @apply mx-4 md:mx-8 lg:mx-[65px] pt-38;
}

.footer_wrapper {
  @apply flex flex-col lg:flex-row gap-6 lg:gap-0;
}

.footer_col {
  @apply relative lg:basis-1/2;
}

.logo_effect {
  @apply w-[20px] h-[20px] bg-[#e6f2ff] absolute rounded-[4px] top-[4px] left-[16px];
  filter: blur(16px);
}

.footer_col .logo {
  @apply h-[40px] w-[40px];
}

.email a {
  @apply flex items-center  lg:mt-0 relative;
}

.email h1 {
  @apply text-[45px] dark:text-white leading-12;
}

.email .hovered_email:hover {
  @apply text-[#af71ff] transition duration-300;
}

.email img {
  @apply h-[60px] w-[60px];
}

.links {
  @apply inline-flex items-center w-full gap-6 md:gap-68 mt-12;
}

.links ul {
  @apply flex flex-col gap-4;
}

.list_link {
  @apply inline-flex items-center text-[15px] -ml-1.5 border;
}

.list_link .bullet_icon {
  @apply w-1.5 h-1.5 rounded-full transition-all bg-green-500 opacity-0 group-hover:opacity-100 group-hover:ml-1.5;
}

.list_link p {
  @apply text-[#BFBFBF] transition-transform duration-300 group-hover:translate-x-3 group-hover:md:translate-x-3.5 ease-out;
}

.footer_bottom {
  @apply flex items-center justify-between  mt-20 border-t border-[#2A2A2A] py-3 text-[12px] text-[#BFBFBF];
}
</style>
