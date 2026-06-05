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
        <Carousel slides={project.images} />
      </dialog>
    </div>
  )
}