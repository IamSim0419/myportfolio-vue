import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const isNight = ref(true)

export function useNightMode() {
  const toggleNightMode = (target?: HTMLElement | null) => {
    isNight.value = !isNight.value

    const el = target || document.body
    if (!el) return

    if (isNight.value) {
      gsap.to(el, {
        backgroundColor: '#080808',
        color: '#ffffff',
        duration: 0.6,
        ease: 'power2.inOut',
      })
    } else {
      gsap.to(el, {
        backgroundColor: '#FAFAFA',
        color: '#080808',
        duration: 0.6,
        ease: 'power2.inOut',
      })
    }

    localStorage.setItem('nightMode', isNight.value ? 'true' : 'false')
  }

  onMounted(() => {
    const saved = localStorage.getItem('nightMode')

    if (saved !== null) {
      isNight.value = saved === 'true'

      gsap.set(document.body, {
        backgroundColor: isNight.value ? '#080808' : '#FAFAFA',
        color: isNight.value ? '#ffffff' : '#080808',
      })
    }
  })

  return { isNight, toggleNightMode }
}
