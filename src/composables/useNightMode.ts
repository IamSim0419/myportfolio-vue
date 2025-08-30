import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const isDark = ref(true)

export function useNightMode() {
  const applyMode = (dark: boolean, animate = false) => {
    const el = document.body
    const html = document.documentElement

    isDark.value = dark

    // Toggle Tailwind's dark class
    if (dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }

    // Animate body transition
    if (animate) {
      gsap.to(el, {
        backgroundColor: dark ? '#080808' : '#FAFAFA',
        color: dark ? '#FAFAFA' : '#080808',
        duration: 0.5,
        ease: 'power2.inOut',
      })
    } else {
      gsap.set(el, {
        backgroundColor: dark ? '#080808' : '#FAFAFA',
        color: dark ? '#FAFAFA' : '#080808',
      })
    }

    localStorage.setItem('nightMode', isDark.value ? 'true' : 'false')
  }

  const toggleNightMode = () => {
    applyMode(!isDark.value, true) // animate on toggle
  }

  onMounted(() => {
    const saved = localStorage.getItem('nightMode')

    if (saved !== null) {
      applyMode(saved !== null)
    } else {
      // Fallback to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyMode(prefersDark)
    }
  })

  return { isDark, toggleNightMode }
}
