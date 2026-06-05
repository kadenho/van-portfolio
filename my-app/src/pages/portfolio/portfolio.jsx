import { useState } from 'react'
import Modal from '../../element-assets/modal/modal'
import { getProjects } from '../../getProjects'
import './portfolio.css'

const projects = getProjects()

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <main className="page-content">
      <h1 className="page-title">Portfolio</h1>
      <section id="modal-panels" className="modal-panels">
        {projects.map(p => (
          <button key={p.id} className="modal-panel" onClick={() => setActiveProject(p)}>
            <img src={p.cover} alt={p.title} className="modal-panel-image" draggable={false} />
          </button>
        ))}
      </section>

      <Modal project={activeProject} onClose={() => setActiveProject(null)} />
    </main>
  )
}