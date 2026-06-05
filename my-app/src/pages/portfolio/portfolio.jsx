import VAI1Cover from './assets/via-1/cover.png';
import ZodiakCover from './assets/zodiak/cover.png';
import BlueBellValleyCover from './assets/bluebell-valley/cover.png';
import LunCover from './assets/lun/cover.png';
import './portfolio.css'

export default function Portfolio() {
  return (
    <main className="page-content">
      <section id="modal-panels" className="modal-panels">
        <button id="via-1-modal" class="modal-panel">
          <img src={VAI1Cover} alt="VIA-1 poster" class="modal-panel-image" draggable={false}></img>
        </button>
        <button id="zodiak-modal" class="modal-panel">
          <img src={ZodiakCover} alt="Zodiak circle" class="modal-panel-image" draggable={false}></img>
        </button>
        <button id="bluebell-valley-modal" class="modal-panel">
          <img src={BlueBellValleyCover} alt="Blue Bell Valley poster" class="modal-panel-image" draggable={false}></img>
        </button>
        <button id="lun-modal" class="modal-panel">
          <img src={LunCover} alt="Lun poster" class="modal-panel-image" draggable={false}></img>
        </button>
      </section>
    </main>
  )
}
