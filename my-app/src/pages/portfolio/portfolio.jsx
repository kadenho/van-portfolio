import './portfolio.css'

const covers = import.meta.glob('./assets/*/cover.png', { eager: true })
const metas  = import.meta.glob('./assets/*/meta.json', { eager: true })

const projects = Object.entries(covers).map(([path, module]) => {
  const id = path.split('/')[2]
  const meta = metas[`./assets/${id}/meta.json`]?.default ?? {}
  return { id, cover: module.default, alt: meta.title ?? id, date: meta.date ?? '' }
}).sort((a, b) => a.date.localeCompare(b.date))

export default function Portfolio() {
  return (
    <main className="page-content">
      <section id="modal-panels" className="modal-panels">
        {projects.map(p => (
          <button key={p.id} id={`${p.id}-modal`} className="modal-panel">
            <img src={p.cover} alt={p.alt} className="modal-panel-image" draggable={false} />
          </button>
        ))}
      </section>
    </main>
  )
}
