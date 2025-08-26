<script lang="ts" setup>
import { ref } from 'vue'
const items = [
  {
    id: 1,
    company: 'Freelance / Upwork',
    role: 'Frontend Developer',
    year: 'Currently 2025',
    description:
      'Simreich, a frontend developer with 2 years of experience based in the Philippines. Currently, I work as a freelance developer, helping clients build modern, responsive, and high-performance websites.',
  },
  {
    id: 2,
    company: 'Freelance / Upwork',
    role: 'Frontend Developer',
    year: 'Currently 2025',
    description:
      'I worked as a Frontend Developer at FlexCode, a local company, where I contributed to developing scalable web applications and collaborated with cross-functional teams to deliver user-focused solutions.',
  },
  {
    id: 3,
    company: 'FlexCode',
    role: 'Intern Frontend Developer',
    year: '2023',
    description:
      'I specialize in creating seamless digital experiences, writing clean and maintainable code, and continuously improving my skills to adapt to the evolving web landscape.',
  },
]

const activeId = ref<number | null>(null)

function toggleAbout(id: number) {
  activeId.value = id
}
</script>

<template>
  <!-- Dropdown -->
  <div class="accordion">
    <h4>Experience</h4>

    <div class="dropdown_menu">
      <div v-for="(item, index) in items" :key="item.id" class="dropdown_item">
        <!-- Clickable -->
        <div class="dropdown_title flex justify-between pt-3" @click="toggleAbout(item.id)">
          <div>
            <h3 class="text-[19px] font-medium">{{ item.company }}</h3>
            <h3 class="text-[19px] text-gray-300">{{ item.role }}</h3>
            <small class="text-sm text-gray-500">{{ item.year }}</small>
          </div>
          <img
            src="../assets/icons/add_icon.svg"
            alt="add icon"
            class="w-7 h-7 transition-transform duration-300"
            :class="[item.id === activeId ? 'rotate-45' : '']"
          />
        </div>

        <!-- Contents -->
        <p
          class="text-[15px] leading-5 transition-all transform duration-300 opacity-0"
          :class="[item.id === activeId ? 'opacity-100 -translate-y-2 pt-5 pb-3' : '']"
        >
          {{ item.description }} {{ index + 1 }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.accordion {
  @apply mt-20;
}

.accordion h4 {
  @apply text-[#7000FF];
}

.dropdown_menu {
  @apply mt-4;
}

.dropdown_item {
  @apply border-t border-[#464553];
}
</style>
