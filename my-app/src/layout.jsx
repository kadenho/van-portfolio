import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiInstagram, SiTiktok, SiBehance } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import Logo from './assets/logo.png'
import './element-assets/nav-link/nav-link.css'
import './layout.css'

export default function Layout({ children }) {
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
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Logo" className="logo" draggable={false} />
        </Link>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
        </nav>
      </section>

      {children}

      <footer className="footer">
        <span>&copy; Van Phan 2026</span>
        <div className="social-links">
          <a href="https://www.instagram.com/v.dreamt/" target="_blank" rel="noopener noreferrer" className="logo-link" title="Instagram">
            <SiInstagram className="social-icon" aria-label="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@v.dreamt" target="_blank" rel="noopener noreferrer" className="logo-link" title="TikTok">
            <SiTiktok className="social-icon" aria-label="TikTok" />
          </a>
          <a href="https://www.behance.net/vanphan21" target="_blank" rel="noopener noreferrer" className="logo-link" title="Behance">
            <SiBehance className="social-icon" aria-label="Behance" />
          </a>
          <a href="https://www.linkedin.com/in/van-phan-002b29346/" target="_blank" rel="noopener noreferrer" className="logo-link" title="LinkedIn">
            <FaLinkedin className="social-icon" aria-label="LinkedIn" />
          </a>
        </div>
      </footer>
    </>
  )
}
