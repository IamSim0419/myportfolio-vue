<script lang="ts" setup>
import { navLinks } from '@/lib/constant'
import { socialLinks } from '@/lib/constant'
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer>
    <div class="footer_container">
      <div class="footer_wrapper">
        <!-- Left Column -->
        <div class="footer_col">
          <div class="logo_effect"></div>
          <img class="logo" src="/sim_logo.svg" alt="Logo" />
        </div>

        <!-- Right Column -->
        <div class="footer_col">
          <div class="email">
            <h1>Let's talk</h1>
            <a class="send_email" href="mailto:simreich1989@gmail.com">
              <div class="hovered_email">Drop me a line</div>
              <Icon icon="material-symbols:arrow-outward" />
            </a>
          </div>

          <div class="links">
            <!-- Navigation Links -->
            <ul>
              <li class="list_link group" v-for="link in navLinks" :key="link.id">
                <div class="bullet_icon"></div>
                <p>{{ link.label }}</p>
              </li>
              <!-- Resume download with animation -->
              <li class="list_link group">
                <div class="bullet_icon"></div>
                <a href="/resume/CV.pdf" download class="nav_links resume_download">
                  <p>Resume</p>
                </a>
              </li>
            </ul>

            <!-- Social Links -->
            <ul>
              <li class="list_link group" v-for="link in socialLinks" :key="link.href">
                <div class="bullet_icon"></div>
                <p class="inline">
                  <a class="lg:cursor-none" :href="link.href">{{ link.name }}</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
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
  @apply bg-[#131313]  mt-50;
}

.dark footer {
  @apply bg-[#F0F0F0];
}

.footer_container {
  @apply mx-4 md:mx-8 lg:mx-[65px] pt-38;
}

.footer_wrapper {
  @apply flex flex-col lg:flex-row gap-12 lg:gap-0;
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
  @apply flex items-center lg:mt-0 relative;
}

.email h1 {
  @apply text-[45px] text-white leading-8;
}

.dark .email h1 {
  @apply text-black;
}

.email .send_email {
  @apply text-[45px] text-white leading-8;
}

.dark .send_email {
  @apply text-black;
}

.email svg {
  @apply h-[60px] w-[60px] text-[#7000FF];
}

.send_email {
  @apply cursor-none;
}

.send_email:hover {
  @apply opacity-60 transition duration-300;
}

.links {
  @apply inline-flex items-center w-full gap-6 md:gap-68 mt-12;
}

.links ul {
  @apply flex flex-col gap-2;
}

/* Fixed list link */
.list_link {
  @apply relative inline-flex items-center text-[14px] ml-1 lg:cursor-none;
}

/* Bullet - absolutely positioned so it won't push siblings */
.list_link .bullet_icon {
  @apply absolute left-0 w-1.5 h-1.5 rounded-full bg-green-500 opacity-0;
  transform: translateX(-6px); /* start off-screen */
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.group:hover .bullet_icon {
  opacity: 1;
  transform: translateX(0); /* smooth slide-in */
}

.list_link p {
  @apply text-[#BFBFBF] transition-transform duration-300 ease-out;
  transform: translateX(0);
}

.dark .list_link p {
  @apply text-[#646464];
}

.group:hover p {
  transform: translateX(16px);
}

.list_link a {
  @apply text-[#BFBFBF] transition-transform duration-300 ease-out;
}

.dark .list_link a {
  @apply text-[#646464];
}

.resume_download {
  @apply lg:cursor-none;
}

.footer_bottom {
  @apply flex items-center justify-between mt-20 border-t border-[#2A2A2A] py-3 text-[12px] text-[#BFBFBF];
}

.dark .footer_bottom {
  @apply text-[#646464] border-t border-[#b3b2b2];
}
</style>
