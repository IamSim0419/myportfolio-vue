// composables/useSplitText.ts
import { type Ref, watch, nextTick, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

type SplitTextOptions = {
  type?: 'chars' | 'words' | 'lines' | string
  duration?: number
  stagger?: number
  y?: number
  ease?: string
}

export function useSplitText(
  target: Ref<HTMLElement | null>,
  active?: Ref<boolean>, // optional toggle
  options: SplitTextOptions = {},
) {
  // ✅ composable safety check
  if (!getCurrentInstance()) {
    throw new Error('useSplitText must be called inside setup() or <script setup>')
  }

  let split: SplitText | null = null
  const { type = 'words', duration = 1, stagger = 0.05, y = 100, ease = 'power3.out' } = options

  const animate = async () => {
    await nextTick()
    if (target.value) {
      split = new SplitText(target.value, { type, linesClass: 'split-line' })
      const elems = type === 'chars' ? split.chars : type === 'lines' ? split.lines : split.words

      gsap.from(elems, {
        y,
        autoAlpha: 0,
        duration,
        stagger,
        ease,
      })
    }
  }

  if (active) {
    watch(active, (val) => {
      if (val) {
        animate()
      } else {
        split?.revert()
        split = null
      }
    })
  } else {
    onMounted(() => {
      animate()
    })
  }

  onBeforeUnmount(() => {
    split?.revert()
    split = null
  })
}
