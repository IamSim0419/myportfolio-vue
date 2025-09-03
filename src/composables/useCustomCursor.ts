// useCustomCursor.ts
import { onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'

interface CustomCursorOptions {
  defaultSize?: { width: number; height: number }
  defaultBorderRadius?: string
  defaultSelectionColor?: string
  animationDuration?: number
  cursorSelector?: string
  cursorTextSelector?: string
}

export function useCustomCursor(options: CustomCursorOptions = {}) {
  const {
    defaultSize = { width: 16, height: 16 },
    defaultBorderRadius = '50%',
    defaultSelectionColor = '#7c3aed',
    animationDuration = 0.1,
    cursorSelector = '.custom_cursor',
    cursorTextSelector = '.custom_cursor_text',
  } = options

  let cursorEl: HTMLElement | null = null
  let cursorTextEl: HTMLElement | null = null
  let moveHandler: ((e: MouseEvent) => void) | null = null
  let styleEl: HTMLStyleElement | null = null

  const applyThemeToCursor = () => {
    if (cursorEl) {
      gsap.set(cursorEl, { backgroundColor: '#FFFFFF' })
    }
  }

  onMounted(() => {
    if (window.innerWidth <= 1024) return

    cursorEl = document.querySelector<HTMLElement>(cursorSelector)
    cursorTextEl = document.querySelector<HTMLElement>(cursorTextSelector)
    if (!cursorEl) return

    // Apply default selection color
    styleEl = document.createElement('style')
    styleEl.textContent = `
      ::selection { background-color: ${defaultSelectionColor}; color: #000; }
      *::-moz-selection { background-color: ${defaultSelectionColor}; color: #000; }
    `
    document.head.appendChild(styleEl)

    // Initialize cursor
    gsap.set(cursorEl, {
      width: defaultSize.width,
      height: defaultSize.height,
      borderRadius: defaultBorderRadius,
      backgroundColor: '#FFFFFF',
      backdropFilter: 'blur(10px)',

      x: 0,
      y: 0,
    })

    // Cursor move
    moveHandler = (e: MouseEvent) => {
      gsap.to(cursorEl!, {
        x: e.clientX,
        y: e.clientY,
        duration: animationDuration,
        ease: 'power3.out',
      })
    }
    window.addEventListener('mousemove', moveHandler)

    // Hover: project cards
    document.querySelectorAll('.project_card img').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(cursorEl!, {
          scale: 5,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          duration: animationDuration,
          color: '#000000',
          fontSize: '4px',
          paddingTop: '1px',
        })
        if (cursorTextEl) cursorTextEl.textContent = 'View'
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(cursorEl!, {
          scale: 1,
          borderRadius: defaultBorderRadius,
          backgroundColor: '#ffffff',
          duration: animationDuration,
        })
        if (cursorTextEl) cursorTextEl.textContent = ''
      })
    })

    // Hover: resume download
    document.querySelectorAll('.resume_download').forEach((res) => {
      res.addEventListener('mouseenter', () => {
        gsap.to(cursorEl!, {
          scale: 4,
          // borderRadius: '50%',
          backgroundColor: '#7c3aed',
          duration: animationDuration,
          fontSize: '3px',
          paddingBottom: '1px',
        })
        if (cursorTextEl) cursorTextEl.textContent = 'Download'
      })
      res.addEventListener('mouseleave', () => {
        gsap.to(cursorEl!, {
          scale: 1,
          borderRadius: defaultBorderRadius,
          backgroundColor: '#ffffff',
          duration: animationDuration,
        })
        if (cursorTextEl) cursorTextEl.textContent = ''
      })
    })

    // Hover: text elements
    document
      .querySelectorAll('h1,h2,h3,h5,h6,strong,em, .hero_current, .about_text')
      .forEach((el) => {
        el.addEventListener('mouseenter', () => {
          const style = window.getComputedStyle(el)
          const fontSize = parseFloat(style.fontSize)
          const cursorHeight = Math.min(100, Math.max(24, fontSize * 1.3))

          gsap.to(cursorEl!, {
            width: 2,
            height: cursorHeight,
            borderRadius: '0%',
            backgroundColor: '#7c3aed',
            duration: animationDuration,
          })
        })
        el.addEventListener('mouseleave', () => {
          gsap.to(cursorEl!, {
            width: defaultSize.width,
            height: defaultSize.height,
            borderRadius: defaultBorderRadius,
            backgroundColor: '#ffffff',
            duration: animationDuration,
          })
        })
      })
  })

  onUnmounted(() => {
    if (moveHandler) window.removeEventListener('mousemove', moveHandler)
    if (styleEl) document.head.removeChild(styleEl)
  })
}
