<script lang="ts" setup>
import { ref } from 'vue'
import { experience } from '@/lib/constant'

const activeId = ref<number | null>(null)

function toggleAbout(id: number) {
  activeId.value = activeId.value === id ? null : id // 👈 toggle on/off
}
</script>

<template>
  <!-- Dropdown -->
  <div class="accordion">
    <h3>Experience</h3>

    <div class="dropdown_menu">
      <div v-for="item in experience" :key="item.id" class="dropdown_item">
        <!-- Clickable -->
        <div class="dropdown_title flex justify-between pt-4" @click="toggleAbout(item.id)">
          <div class="leading-6">
            <h4 class="text-[20px] font-medium">{{ item.company }}</h4>
            <h4 class="text-[20px] text-neutral-500">{{ item.role }}</h4>
            <small class="text-[15px] text-neutral-500">{{ item.year }}</small>
          </div>
          <img
            src="../assets/icons/add_icon.svg"
            alt="add icon"
            class="w-10 h-10 transition-transform duration-300"
            :class="[item.id === activeId ? 'rotate-45' : '']"
          />
        </div>

        <!-- Contents -->
        <p
          class="text-[16px] leading-6 transition-all transform duration-300 opacity-0 line-clamp-1"
          :class="[
            item.id === activeId ? 'line-clamp-none opacity-100 -translate-y-2 pt-8 pb-5' : '',
          ]"
        >
          {{ item.description }}
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

.accordion h3 {
  @apply text-[#7000FF];
}

.dropdown_menu {
  @apply mt-4;
}

.dropdown_item {
  @apply border-t border-[#464553];
}
</style>
