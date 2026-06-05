import { useState } from 'react'
import Logo from './assets/logo.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <section id="header" className="header">
        <a href="#home" className="logo-link">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#resume" className="nav-link" onClick={() => setMenuOpen(false)}>Resume</a>
        </nav>
      </section>
    </>
  )
}

export default App
