import CypressImg from '@/assets/images/cypress-img.png'
import OfferJobsImg from '@/assets/images/offer-jobs.png'
import PortfolioImg from '@/assets/images/porfolio-img.png'

// Tech images for Tech Section
// import FigmaIcon from '../assets/icons/figma.svg'
import GsapIcon from '@/assets/icons/gsap.svg'
import VueIcon from '@/assets/icons/vue.svg'
import TypescriptIcon from '@/assets/icons/typescript.svg'

// Header & Footer Navigation links
export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
]

// Footer section social links
export const socialLinks = [
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/your-profile' },
  { name: 'X.com', href: 'https://github.com/your-profile' },
  { name: 'Github', href: 'https://twitter.com/your-profile' },
]

// Project Section
export const projects = [
  {
    title: 'SaaS Modern Platform',
    description:
      'A sleek and intuitive SaaS platform designed to simplify complex workflows. Built with Vue and TypeScript, animated with GSAP, and styled with TailwindCSS to deliver a seamless user experience.',
    image: CypressImg,
    tech: ['Vue', 'TypeScript', 'GSAP', 'TailwindCSS'],
    class: 'card_01',
  },
  {
    title: 'JobSpots - Job Offer Platform',
    description:
      'A modern job marketplace where employers and job seekers connect effortlessly. Powered by Vue and Pinia for state management, with GSAP-driven interactions and a clean TailwindCSS interface for a polished experience.',
    image: OfferJobsImg,
    tech: ['Vue', 'TypeScript', 'GSAP', 'Pinia', 'TailwindCSS'],
    class: 'card_02',
  },
  {
    title: 'Portfolio',
    description:
      'A personal portfolio crafted to showcase projects and skills with style. Built using Vue and TypeScript, enhanced with GSAP animations, and designed with TailwindCSS for a modern, responsive look.',
    image: PortfolioImg,
    tech: ['Vue', 'TypeScript', 'GSAP', 'TailwindCSS'],
    class: 'card_03',
  },
]

export const techStack = [
  { name: 'Typescript', icon: TypescriptIcon },
  { name: 'Vue.js', icon: VueIcon },
  { name: 'Gsap', icon: GsapIcon },
  // { name: 'Figma', icon: FigmaIcon },
]
