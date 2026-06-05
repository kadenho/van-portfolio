import { useState } from 'react'
import Modal from '../../element-assets/modal/modal'
import './portfolio.css'

const covers    = import.meta.glob('./projects/*/cover.png', { eager: true })
const metas     = import.meta.glob('./projects/*/meta.json', { eager: true })
const allImages = import.meta.glob('./projects/*/*.{png,jpg,jpeg,webp,svg}', { eager: true })

const projects = Object.entries(covers).map(([path, module]) => {
  const id = path.split('/')[2]
  const meta = metas[`./projects/${id}/meta.json`]?.default ?? {}
  const images = Object.entries(allImages)
    .filter(([p]) => p.startsWith(`./projects/${id}/`) && !p.endsWith('cover.png'))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.default)
  return {
    id,
    cover: module.default,
    title: meta.title ?? id,
    date: meta.date ?? '',
    caption: meta.caption ?? '',
    images,
  }
}).sort((a, b) => a.date.localeCompare(b.date))

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <main className="page-content">
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