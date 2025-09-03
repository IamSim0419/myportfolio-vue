// src/composables/useTheme.ts
import { ref, onMounted } from 'vue'

export function useTheme() {
  const theme = ref<'light' | 'dark'>('dark')

  const applyTheme = () => {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null

    if (savedTheme) {
      theme.value = savedTheme
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme.value = 'dark'
    }

    applyTheme()
  })

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    applyTheme()
  }

  return {
    theme,
    toggleTheme,
  }
}
