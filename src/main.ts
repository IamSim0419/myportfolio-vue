import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import gsap from 'gsap'

import { ScrollToPlugin, ScrollSmoother } from 'gsap/all'

gsap.registerPlugin(ScrollToPlugin, ScrollSmoother)

const app = createApp(App)

app.mount('#app')

// Initialize ScrollSmoother
ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1.5,
  effects: true,
})
