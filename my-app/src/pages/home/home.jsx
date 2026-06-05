import { useState } from 'react'
import { useReveal } from '../../useReveal'
import Modal from '../../element-assets/modal/modal'
import Banner from './assets/home-banner.jpg'
import IntroductionImage from './assets/intro-picture.png'
import { getProjects } from '../../getProjects'
import '../../reveal.css'
import '../../element-assets/modal-panels/modal-panels.css'
import './home.css'

const projects = getProjects().slice(-3);

export default function Home() {
  const introRef = useReveal();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="page-content">
      <img src={Banner} alt="Banner" className="banner" draggable={false} />

      <section id="introduction" className="introduction reveal" ref={introRef}>
        <img src={IntroductionImage} alt="Introduction" className="introduction-image" draggable={false} />
        <p className="introduction-text">
          Van is a multi-disciplinary designer
          who dreams of unifying her love for
          traditional art and graphic design to
          inspire audiences all over the world.
        </p>
      </section>


      <h1>Recent Work</h1>
      <section id="modal-panels" className="modal-panels">
        {projects.map(p => (
          <button key={p.id} className="modal-panel" onClick={() => setActiveProject(p)}>
            <img src={p.cover} alt={p.title} className="modal-panel-image" draggable={false} />
          </button>
        ))}
      </section>

      <Modal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  )
}
