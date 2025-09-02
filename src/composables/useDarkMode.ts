// src/composables/useDarkMode.ts
import { ref, onMounted } from 'vue'

export function useDarkMode() {
  const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    document.body.classList.toggle('dark', isDarkMode.value)
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    isDarkMode.value = savedTheme === 'dark'
    document.body.classList.toggle('dark', isDarkMode.value)
  })

  return { isDarkMode, toggleDarkMode }
}
