import { useReveal } from '../../useReveal'
import { NavLink } from 'react-router-dom'
import ProjectGrid from '../../element-assets/project-grid/project-grid'
import Banner from './assets/home-banner.jpg'
import IntroductionImage from './assets/intro-picture.png'
import { getProjects } from '../../getProjects'
import '../../reveal.css'
import '../../element-assets/nav-link/nav-link.css'
import './home.css'

const projects = getProjects().slice(0, 3)

export default function Home() {
  const introRef = useReveal()
  const recentWorkRef = useReveal()

  return (
    <div className="page-content">
      <img src={Banner} alt="Banner" className="banner" draggable={false} />

      <section id="introduction" className="introduction reveal" ref={introRef}>
        <img
          src={IntroductionImage}
          alt="Introduction"
          className="introduction-image"
          draggable={false}
        />
        <p className="introduction-text">
          Van is a multi-disciplinary designer who dreams of unifying her love for traditional art
          and graphic design to inspire audiences all over the world.
        </p>
      </section>

      <section id="recent-work" className="recent-work" ref={recentWorkRef}>
        <h1>Recent Work</h1>
        <ProjectGrid projects={projects} />
        <NavLink to="/portfolio" className="nav-link">
          View All Projects
        </NavLink>
      </section>
    </div>
  )
}
