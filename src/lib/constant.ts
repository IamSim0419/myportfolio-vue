import CypressImg from '@/assets/images/cypress-img.png'
import OfferJobsImg from '@/assets/images/offer-jobs.png'
import PortfolioImg from '@/assets/images/porfolio-img.png'
import FurrowImg from '@/assets/images//furrow-img.png'

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
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/simreich-somogod-a977a02b3/' },
  { name: 'X.com', href: 'https://x.com/iamsimreich' },
  { name: 'Github', href: 'https://github.com/IamSim0419' },
]

// Project Section
export const projects = [
  {
    title: 'Saas Modern Landing Page',
    href: 'https://cypress-saas.vercel.app/',
    description:
      'Designed and developed a dark-themed SaaS landing page from design to code, ensuring pixel-perfect implementation and responsiveness across devices. Built with Vue 3, TypeScript, Tailwind CSS, and GSAP to deliver smooth animations, modern UI components, and an engaging user experience. The project demonstrates strong frontend development skills in turning design concepts into functional, production-ready code.',
    image: CypressImg,
    tech: ['Vue', 'TypeScript', 'GSAP', 'TailwindCSS'],
    class: 'card_01',
  },
  {
    title: 'JobSpots - Job Offer Platform',
    description:
      'Developed a modern job offer platform with features such as advanced search and filtering to enhance user experience. Built using Vue 3, TypeScript, Vite, Tailwind CSS, and Pinia for state management, with GSAP animations for smooth interactions and engaging UI transitions. The project highlights clean design, responsive layouts, and efficient data handling to deliver a seamless and intuitive job-hunting experience.',
    href: 'https://jobspots-neon.vercel.app/',
    image: OfferJobsImg,
    tech: ['Vue', 'TypeScript', 'GSAP', 'Pinia', 'TailwindCSS'],
    class: 'card_02',
  },
  {
    title: 'Portfolio',
    description:
      'Built a personal portfolio website named Simreich, designed in Figma and developed into a sleek, modern, and fully responsive site. Implemented smooth GSAP animations and interactive transitions to enhance user engagement. Developed with Vue 3, TypeScript, and Tailwind CSS, focusing on performance, accessibility, and clean UI to effectively showcase projects and skills.',
    href: 'https://myportfolio-mu-eight-69.vercel.app/',
    image: PortfolioImg,
    tech: ['Vue', 'TypeScript', 'GSAP', 'TailwindCSS'],
    class: 'card_03',
  },
  {
    title: 'Furrow - Saas Landing Page',
    href: 'https://furrow-modern-saas-landing-page.vercel.app/',
    description:
      'Built a modern and sleek dark-themed SaaS landing page using Next.js and React, styled with Tailwind CSS for a fully responsive design. Implemented smooth, interactive animations with Framer Motion and deployed seamlessly on Vercel. The project highlights expertise in creating production-ready landing pages with performance, scalability, and modern UI best practices in mind.',
    image: FurrowImg,
    tech: ['Next.js', 'React', 'Framer Motion', 'TailwindCSS', 'Vercel'],
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

// About Section > Accordion
export const experience = [
  {
    id: 1,
    company: 'Freelance / Upwork',
    role: 'Frontend Developer',
    year: '2025',
    description:
      'Freelance Frontend Developer based in the Philippines with 2 years of experience, I deliver modern, responsive, and high-performance websites tailored to client needs, leveraging cutting-edge technologies.',
  },
  {
    id: 2,
    company: 'Freelance / Online Jobs PH',
    role: 'Frontend Developer',
    year: '2024',
    description:
      'Freelance Frontend Developer at OnlineJobs PH, I delivered scalable web applications, collaborating with diverse clients to create innovative, user-focused solutions tailored to their needs.',
  },
  {
    id: 3,
    company: 'FlexCode',
    role: 'Intern Frontend Developer',
    year: 'Feb-May 2024',
    description:
      'As an Intern Frontend Developer, I honed my skills in crafting seamless digital experiences, writing clean and maintainable code, and adapting to the dynamic web development landscape.',
  },
]
