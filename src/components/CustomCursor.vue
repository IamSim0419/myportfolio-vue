<script lang="ts" setup>
import { useCustomCursor } from '@/composables/useCustomCursor'

useCustomCursor() // 👈 activate the cursor behavior
</script>

<template>
  <!-- Custom cursor -->
  <div class="custom_cursor">
    <span class="custom_cursor_text"></span>
  </div>
</template>

<style scoped>
@reference 'tailwindcss';

/* Custom cursor */
.custom_cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  padding-top: 1px;
  background-color: #ffffff;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%); /* ⬅ centers the circle on mouse */
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4px;
  /* mix-blend-mode: difference; */
}

/* Fallback hide on mobile */
@media (max-width: 1024px) {
  .custom_cursor,
  .custom_cursor_text {
    display: none !important;
  }
}
</style>
