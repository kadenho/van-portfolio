import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './assets/logo.png'
import './element-assets/nav-link/nav-link.css'
import './layout.css'
import InstagramLogo from './assets/instagram-logo.svg'
import TikTokLogo from './assets/tiktok-logo.svg'
import BehanceLogo from './assets/behance-logo.svg'
import LinkedInLogo from './assets/linkedin-logo.svg'

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
          <NavLink to="/cv" className="nav-link" onClick={() => setMenuOpen(false)}>CV</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
        </nav>
      </section>

      {children}

      <footer className="footer">
        <span>&copy; Van Phan 2026</span>
        <div className="social-links">
          <a href="https://www.instagram.com/v.dreamt/" target="_blank" rel="noopener noreferrer" className="logo-link" title="Instagram">
            <img src={InstagramLogo} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com/@v.dreamt" target="_blank" rel="noopener noreferrer" className="logo-link" title="TikTok">
            <img src={TikTokLogo} alt="TikTok" className="social-icon" />
          </a>
          <a href="https://www.behance.net/vanphan21" target="_blank" rel="noopener noreferrer" className="logo-link" title="Behance">
            <img src={BehanceLogo} alt="Behance" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/van-phan-002b29346/" target="_blank" rel="noopener noreferrer" className="logo-link" title="LinkedIn">
            <img src={LinkedInLogo} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </footer>
    </>
  )
}
