import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export function useScrollTo() {
  const smoother = ref<ScrollSmoother | null>(null)

  onMounted(() => {
    smoother.value = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.3,
      effects: true,
    })
  })

  onBeforeUnmount(() => {
    smoother.value?.kill()
  })

  const scrollTo = (id: string) => {
    if (smoother.value) {
      smoother.value.scrollTo(`#${id}`, true, 'top top+=80')
    }
  }

  return { scrollTo }
}
