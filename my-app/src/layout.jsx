import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiInstagram, SiTiktok, SiBehance } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import Logo from './assets/logo.png'
import './element-assets/nav-link/nav-link.css'
import './layout.css'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
]

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/v.dreamt/', icon: SiInstagram, title: 'Instagram' },
  { href: 'https://www.tiktok.com/@v.dreamt', icon: SiTiktok, title: 'TikTok' },
  { href: 'https://www.behance.net/vanphan21', icon: SiBehance, title: 'Behance' },
  { href: 'https://www.linkedin.com/in/van-phan-002b29346/', icon: FaLinkedin, title: 'LinkedIn' },
]

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
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </section>

      {children}

      <footer className="footer">
        <span>&copy; Van Phan 2026</span>
        <div className="social-links">
          {SOCIAL_LINKS.map(({ href, icon: Icon, title }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-link"
              title={title}
            >
              <Icon className="social-icon" aria-label={title} />
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
