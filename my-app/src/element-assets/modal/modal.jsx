import './modal.css'
import Carousel from '../carousel/carousel'

export default function Modal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <dialog open className="modal" onClick={e => e.stopPropagation()}>
        <Carousel slides={project.images} />
      </dialog>
    </div>
  )
}