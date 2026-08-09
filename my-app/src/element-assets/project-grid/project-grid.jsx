import { useState } from 'react'
import Modal from '../modal/modal'
import '../modal-panels/modal-panels.css'

export default function ProjectGrid({ projects, id = 'modal-panels' }) {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <section id={id} className="modal-panels">
        {projects.map((p) => (
          <button key={p.id} className="modal-panel" onClick={() => setActiveProject(p)}>
            <img src={p.cover} alt={p.title} className="modal-panel-image" draggable={false} />
          </button>
        ))}
      </section>

      <Modal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
