// src/composables/useCustomCursor.ts
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

export function useCustomCursor() {
  let cursorEl: HTMLElement | null = null
  let cursorTextEl: HTMLElement | null = null
  let moveHandler: ((e: MouseEvent) => void) | null = null

  onMounted(() => {
    cursorEl = document.querySelector('.custom-cursor')
    cursorTextEl = document.querySelector('.custom-cursor-text')

    if (!cursorEl) return

    // Move cursor with GSAP
    moveHandler = (e: MouseEvent) => {
      gsap.to(cursorEl, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power3.out',
      })
    }
    window.addEventListener('mousemove', moveHandler)

    // Hover states for project images
    const projectCards = document.querySelectorAll('.project-card img')
    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(cursorEl, {
          scale: 5,
          backgroundColor: '#ffffff',
          duration: 0.1,
        })
        if (cursorTextEl) cursorTextEl.textContent = 'View'
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(cursorEl, { scale: 1, backgroundColor: '#ffffff', duration: 0.3 })
        if (cursorTextEl) cursorTextEl.textContent = ''
      })
    })
  })

  onUnmounted(() => {
    if (moveHandler) window.removeEventListener('mousemove', moveHandler)
  })
}
