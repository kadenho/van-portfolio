import { useState, useEffect } from 'react'
import Logo from './assets/logo.png'
import Banner from './assets/home-banner.jpg'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let timer
    const onResize = () => {
      document.body.classList.add('no-transition')
      clearTimeout(timer)
      timer = setTimeout(() => document.body.classList.remove('no-transition'), 200)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <section id="header" className="header">
        <a href="#home" className="logo-link">
          <img src={Logo} alt="Logo" className="logo" draggable={false} />
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(menuOpen => !menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#resume" className="nav-link" onClick={() => setMenuOpen(false)}>CV</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </section>
      <img src={Banner} alt="Banner" className="banner" draggable={false} />
    </>
  )
}

export default App
