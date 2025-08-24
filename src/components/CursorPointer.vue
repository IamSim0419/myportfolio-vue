<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

const cursorRef = ref<HTMLDivElement | null>(null)
const cursorTextRef = ref<HTMLSpanElement | null>(null)

onMounted(() => {
  const cursor = cursorRef.value
  if (!cursor) return

  const moveHandler = (e: MouseEvent) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: 'power3.out',
    })
  }

  window.addEventListener('mousemove', moveHandler)
  onUnmounted(() => {
    window.removeEventListener('mousemove', moveHandler)
  })
})

function cursorEnter() {
  gsap.to(cursorRef.value, {
    scale: 3,
    backgroundColor: 'rgba(255,255,255,0.8)',
    duration: 0.3,
  })
  gsap.to(cursorTextRef.value, { opacity: 1, duration: 0.2 })
}

function cursorLeave() {
  gsap.to(cursorRef.value, {
    scale: 1,
    backgroundColor: '#000',
    duration: 0.3,
  })
  gsap.to(cursorTextRef.value, { opacity: 0, duration: 0.2 })
}

defineExpose({ cursorEnter, cursorLeave })
</script>

<template>
  <div>
    <div
      ref="cursorRef"
      class="fixed top-0 left-0 w-4 h-4 rounded-full bg-black pointer-events-none z-[9999] flex items-center justify-center"
    >
      <span ref="cursorTextRef" class="text-white text-xs font-bold opacity-0 select-none"
        >Click</span
      >
    </div>
  </div>
</template>
