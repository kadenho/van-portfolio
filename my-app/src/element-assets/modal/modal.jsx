import './modal.css'
import Carousel from '../carousel/carousel'

export default function Modal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="close-modal" onClick={onClose}>
        &times;
      </button>
      <dialog open className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top-bar">
          <h2>{project.title}</h2>
        </div>
        <div className="modal-content">
          <Carousel slides={project.images} />
          <div className="modal-sidebar">
            <div className="modal-date">
              <small>Date: {project.date}</small>
            </div>
            <small className="modal-caption">{project.caption}</small>
          </div>
        </div>
      </dialog>
    </div>
  )
}
