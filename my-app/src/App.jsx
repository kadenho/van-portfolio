import { useState, useEffect } from 'react'
import Logo from './assets/logo.png'
import Banner from './assets/home-banner.jpg'
import InstagramLogo from './assets/instagram-logo.svg'
import TikTokLogo from './assets/tiktok-logo.svg'
import BehanceLogo from './assets/behance-logo.svg'
import LinkedInLogo from './assets/linkedin-logo.svg'
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
          <img src={Logo} alt="Logo" className="logo" draggable={false} alt="Logo"/>
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

      <footer className="footer">
        <span>&copy; Van Phan 2026</span>
        <div className="social-links">
          <a href="https://www.instagram.com/v.dreamt/" target="_blank" rel="noopener noreferrer" className="logo-link" alt="Instagram Logo" title="Instagram">
            <img src={InstagramLogo} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com/@v.dreamt" target="_blank" rel="noopener noreferrer" className="logo-link" alt="TikTok Logo" title="TikTok">
            <img src={TikTokLogo} alt="TikTok" className="social-icon" />
          </a>
          <a href="https://www.behance.net/vanphan21" target="_blank" rel="noopener noreferrer" className="logo-link" alt="Behance Logo" title="Behance">
            <img src={BehanceLogo} alt="Behance" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/van-phan-002b29346/" target="_blank" rel="noopener noreferrer" className="logo-link" alt="LinkedIn Logo" title="LinkedIn">
            <img src={LinkedInLogo} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
