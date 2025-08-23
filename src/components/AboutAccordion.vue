<script lang="ts" setup>
import { ref } from 'vue'

const items = ref([
  {
    company: 'Freelance / Upwork',
    role: 'Frontend Developer',
    year: 'Currently 2025',
    description: 'Worked on various projects for clients worldwide.',
  },
  {
    company: 'Freelance / Upwork',
    role: 'Frontend Developer',
    year: 'Currently 2025',
    description: 'Collaborated with local businesses to enhance their online presence.',
  },
  {
    company: 'FlexCode',
    role: 'Intern Frontend Developer',
    year: '2023',
    description: 'Contributed to open-source projects and developed custom solutions.',
  },
])

const openIndex = ref<number | null>(null)

const toggleItem = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <!-- Dropdown -->
  <div class="dropdown">
    <h5>Experience</h5>

    <div class="dropdown-menu">
      <div v-for="(item, index) in items" :key="index" class="dropdown-item">
        <div
          class="dropdown-item-content flex items-center justify-between cursor-pointer py-3"
          @click="toggleItem(index)"
        >
          <div class="mb-8">
            <h4 class="text-[19px] font-medium">{{ item.company }}</h4>
            <h4 class="text-[19px] text-gray-300">{{ item.role }}</h4>
            <small class="text-sm text-gray-500">{{ item.year }}</small>
          </div>
          <img
            src="../assets/icons/add_icon.svg"
            alt="toggle"
            class="w-7 h-7 transition-transform duration-300"
            :class="{ 'rotate-45': openIndex === index }"
          />
        </div>

        <transition name="accordion">
          <p v-if="openIndex === index" class="text-[#8D8C95] mt-2 pb-3">
            {{ item.description }}
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

.dropdown {
  @apply mt-20;
}

.dropdown h5 {
  @apply text-[#7000FF] font-semibold text-sm;
}

.dropdown-menu {
  @apply mt-4;
}

.dropdown-item {
  @apply border-t border-[#464553];
}

/* Accordion transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.2s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>
