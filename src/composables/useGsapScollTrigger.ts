import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export type ScrollPreset =
  | 'fade-in'
  | 'scale-in'
  | 'slide-up'
  | 'slide-down'
  | 'stagger-fade'
  | 'stagger-scale'

interface ScrollOptions {
  preset?: ScrollPreset
  trigger?: Element | string
  start?: string
  end?: string
  once?: boolean
  delay?: number
  duration?: number
  stagger?: number
  ease?: string
}

/**
 * Composable to apply GSAP animations with ScrollTrigger
 */
export function useGsapScrollTrigger(el: Element | null, options: ScrollOptions = {}) {
  if (!el) return

  const {
    preset = 'fade-in',
    trigger = el,
    start = 'top 80%',
    end = 'bottom 20%',
    once = false,
    delay = 0,
    duration = 0.8,
    stagger = 0.2,
    ease = 'power2.out',
  } = options

  let tween: gsap.core.Tween | gsap.core.Timeline | null = null

  switch (preset) {
    case 'fade-in':
      tween = gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger,
            start,
            end,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          },
        },
      )
      break

    case 'scale-in':
      tween = gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger,
            start,
            end,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          },
        },
      )
      break

    case 'slide-up':
      tween = gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger,
            start,
            end,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          },
        },
      )
      break

    case 'slide-down':
      tween = gsap.fromTo(
        el,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          scrollTrigger: {
            trigger,
            start,
            end,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          },
        },
      )
      break

    case 'stagger-fade':
      tween = gsap.from(el.children, {
        opacity: 0,
        y: 30,
        stagger,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger,
          start,
          end,
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        },
      })
      break

    case 'stagger-scale': {
      const targets = Array.from(el.children)
      // const targets = gsap.utils.toArray(el.children)
      const tl = gsap.timeline()
      targets.forEach((child, i) => {
        tl.fromTo(
          child,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            y: 1,
            duration,
            ease,
            delay: delay + i * stagger,
            scrollTrigger: {
              trigger: child, // 👈 each child observed individually
              start,
              end,
              toggleActions: once ? 'play none none none' : 'play reverse play reverse',
              markers: true,
            },
          },
          0,
        )
      })
      tween = tl
      break
    }
    default:
      console.warn(`Unknown ScrollTrigger preset: ${preset}`)
  }

  return tween
}
