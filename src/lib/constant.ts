import CypressImg from '@/assets/images/cypress-img.png'
import OfferJobsImg from '@/assets/images/offer-jobs.png'
import PortfolioImg from '@/assets/images/porfolio-img.png'

// Tech images for Tech Section
import VueIcon from '/vue.svg'
import TypescriptIcon from '/typescript.svg'
import GsapIcon from '/gsap.svg'
import FigmaIcon from '/figma.svg'
import JavascriptIcon from '/javascript.svg'
import TailwindIcon from '/tailwind.svg'
import ReactIcon from '/react.svg'
import NextIcon from '/next.svg'
import CssIcon from '/css.svg'
import GithubIcon from '/github.svg'
import GitIcon from '/git.svg'
import htmlIcon from '/html.svg'
import NodeIcon from '/node.svg'

// Header & Footer Navigation links
export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  // { id: 'resume', label: 'Resume' },
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
  { name: 'Tailwind', icon: TailwindIcon },
  { name: 'Gsap', icon: GsapIcon },
  { name: 'Figma', icon: FigmaIcon },
  { name: 'Javascript', icon: JavascriptIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Next', icon: NextIcon },
  { name: 'Node', icon: NodeIcon },
  { name: 'Github', icon: GithubIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'Html', icon: htmlIcon },
  { name: 'Css', icon: CssIcon },
]
