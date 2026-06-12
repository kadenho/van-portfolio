import './modal.css'
import Carousel from '../carousel/carousel'

export default function Modal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="close-modal" onClick={onClose}>
        &times;
      </button>
      <dialog open className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-top-bar">
          <h2>{project.title}</h2>
        </div>
        <Carousel slides={project.images} />
      </dialog>
    </div>
  )
}