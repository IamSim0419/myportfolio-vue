// useCustomCursor.ts
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

interface CustomCursorOptions {
  defaultSize?: { width: number; height: number }
  defaultBorderRadius?: string
  defaultBackgroundColor?: string // Cursor default color
  defaultSelectionColor?: string // Default text selection color (blue)
  animationDuration?: number
  cursorSelector?: string
  cursorTextSelector?: string
}

export function useCustomCursor(options: CustomCursorOptions = {}) {
  const {
    defaultSize = { width: 16, height: 16 },
    defaultBorderRadius = '50%',
    defaultBackgroundColor = '#FFFFFF', // Cursor default (white)
    defaultSelectionColor = '#7c3aed', // Mimic Windows default blue
    animationDuration = 0.1,
    cursorSelector = '.custom_cursor',
    cursorTextSelector = '.custom_cursor_text',
  } = options

  let cursorEl: HTMLElement | null = null
  let cursorTextEl: HTMLElement | null = null
  let moveHandler: ((e: MouseEvent) => void) | null = null

  onMounted(() => {
    // Check if screen width is below mobile breakpoint
    if (window.innerWidth <= 1024) return // 1024px for tablet/mobile cutoff

    cursorEl = document.querySelector<HTMLElement>(cursorSelector)
    cursorTextEl = document.querySelector<HTMLElement>(cursorTextSelector)

    if (!cursorEl) return

    // Apply default selection color via CSS
    const style = document.createElement('style')
    style.textContent = `
      ::selection {
        background-color: ${defaultSelectionColor};
        color: #000;
      }
      *::-moz-selection {
        background-color: ${defaultSelectionColor};
        color: #000;
      }
    `
    document.head.appendChild(style)

    // Initialize cursor position and style
    gsap.set(cursorEl, {
      width: defaultSize.width,
      height: defaultSize.height,
      borderRadius: defaultBorderRadius,
      backgroundColor: defaultBackgroundColor,
      x: 0,
      y: 0,
    })

    // Move cursor with GSAP
    moveHandler = (e: MouseEvent) => {
      gsap.to(cursorEl, {
        x: e.clientX,
        y: e.clientY,
        duration: animationDuration,
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
          color: '#000000',
          duration: animationDuration,
        })
        if (cursorTextEl) cursorTextEl.textContent = 'View'
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(cursorEl, {
          scale: 1,
          borderRadius: defaultBorderRadius,
          backgroundColor: defaultBackgroundColor,
          duration: animationDuration,
        })
        if (cursorTextEl) cursorTextEl.textContent = ''
      })
    })

    // Hover states for resume download
    // const resumeDownload = document.querySelectorAll('.resume_download')
    // resumeDownload.forEach((res) => {
    //   res.addEventListener('mouseenter', () => {
    //     gsap.to(cursorEl, {
    //       scale: 5,
    //       borderRadius: '20%',
    //       backgroundColor: '#ffffff',
    //       duration: animationDuration,
    //     })
    //     if (cursorTextEl) cursorTextEl.textContent = 'Download'
    //   })
    //   res.addEventListener('mouseleave', () => {
    //     gsap.to(cursorEl, {
    //       scale: 1,
    //       borderRadius: defaultBorderRadius,
    //       backgroundColor: defaultBackgroundColor,
    //       duration: animationDuration,
    //     })
    //     if (cursorTextEl) cursorTextEl.textContent = ''
    //   })
    // })

    // Hover states for text elements with dynamic height based on font size
    const textElements = document.querySelectorAll(
      'p, h1, h2, h3, h4, h5, h6, span, small, strong, em',
    )
    textElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        const style = window.getComputedStyle(el)
        const fontSize = parseFloat(style.fontSize)
        const cursorHeight = Math.min(100, Math.max(24, fontSize * 1.3))

        gsap.to(cursorEl, {
          width: 2,
          height: cursorHeight,
          scale: 1,
          borderRadius: '0%',
          backgroundColor: '#7c3aed',
          duration: animationDuration,
        })
      })
      el.addEventListener('mouseleave', () => {
        gsap.to(cursorEl, {
          width: defaultSize.width,
          height: defaultSize.height,
          borderRadius: defaultBorderRadius,
          backgroundColor: defaultBackgroundColor,
          duration: animationDuration,
        })
      })
    })
  })

  onUnmounted(() => {
    if (moveHandler) window.removeEventListener('mousemove', moveHandler)
    // Clean up the dynamically added style
    const style = document.head.querySelector('style')
    if (style) document.head.removeChild(style)
  })
}

// Usage
// import { useCustomCursor } from '@/composables/useCustomCursor'

// useCustomCursor({
//   defaultSize: { width: 20, height: 20 },
//   textHover: { minHeight: 20, maxHeight: 120, width: 3 },
//   projectHover: { scale: 6, text: 'Explore' },
// })
