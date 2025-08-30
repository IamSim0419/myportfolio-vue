// useCustomCursor.ts
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

export function useCustomCursor() {
  let cursorEl: HTMLElement | null = null
  let cursorTextEl: HTMLElement | null = null
  let moveHandler: ((e: MouseEvent) => void) | null = null

  onMounted(() => {
    cursorEl = document.querySelector('.custom_cursor')
    cursorTextEl = document.querySelector('.custom_cursor_text')

    if (!cursorEl) return

    // Move cursor with GSAP
    moveHandler = (e: MouseEvent) => {
      gsap.to(cursorEl, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power3.out',
      })
    }
    window.addEventListener('mousemove', moveHandler)

    // Hover states for project images
    const projectCards = document.querySelectorAll('.project_card img')
    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(cursorEl, {
          scale: 5,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          duration: 0.1,
        })
        if (cursorTextEl) cursorTextEl.textContent = 'View'
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(cursorEl, {
          scale: 1,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          duration: 0.1,
        })
        if (cursorTextEl) cursorTextEl.textContent = ''
      })
    })

    // Hover states for all text elements
    const textElements = document.querySelectorAll(
      'p, h1, h2, h3, h4, h5, h6, span, small, strong, em',
    )
    textElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursorEl, {
          width: 2,
          height: 24,
          scale: 1,
          borderRadius: '0%',
          backgroundColor: '#7c3aed',
          duration: 0.1,
        })
      })
      el.addEventListener('mouseleave', () => {
        gsap.to(cursorEl, {
          width: 16,
          height: 16,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          duration: 0.1,
        })
      })
    })

    // Copy event → change cursor color to violet temporarily
    document.addEventListener('copy', () => {
      if (cursorEl) {
        gsap.to(cursorEl, {
          backgroundColor: '#7ffd', // Tailwind violet-600
          duration: 0.2,
          yoyo: true,
          repeat: 1, // flash effect
        })
      }
    })
  })

  onUnmounted(() => {
    if (moveHandler) window.removeEventListener('mousemove', moveHandler)
  })
}
