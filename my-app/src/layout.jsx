import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
          <NavLink to="/cv" className="nav-link" onClick={() => setMenuOpen(false)}>CV</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
        </nav>
      </section>

      {children}

      <footer className="footer">
        <span>&copy; Van Phan 2026</span>
        <div className="social-links">
          <a href="https://www.instagram.com/v.dreamt/" target="_blank" rel="noopener noreferrer" className="logo-link" title="Instagram">
            <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="4 4 23.9 23.9" fill="currentColor" aria-label="Instagram">
              <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"/>
              <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"/>
              <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@v.dreamt" target="_blank" rel="noopener noreferrer" className="logo-link" title="TikTok">
            <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-label="TikTok">
              <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"/>
            </svg>
          </a>
          <a href="https://www.behance.net/vanphan21" target="_blank" rel="noopener noreferrer" className="logo-link" title="Behance">
            <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0.55 4.37 22.92 15.27" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91" aria-label="Behance">
              <path d="M1.5,5.32H6.92a3.17,3.17,0,0,1,3.17,3.17v.34A3.17,3.17,0,0,1,6.92,12H1.5a0,0,0,0,1,0,0V5.32A0,0,0,0,1,1.5,5.32Z"/>
              <path d="M1.5,12H7.7A3.34,3.34,0,0,1,11,15.34v0A3.34,3.34,0,0,1,7.7,18.68H1.5a0,0,0,0,1,0,0V12A0,0,0,0,1,1.5,12Z"/>
              <path d="M13.91,13.91H22.5a4.55,4.55,0,0,0-4.3-4.77,4.55,4.55,0,0,0-4.29,4.77,4.55,4.55,0,0,0,4.29,4.77,4.13,4.13,0,0,0,3.43-1.91"/>
              <line x1="13.91" y1="6.27" x2="22.5" y2="6.27"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/van-phan-002b29346/" target="_blank" rel="noopener noreferrer" className="logo-link" title="LinkedIn">
            <svg className="social-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="LinkedIn">
              <g transform="translate(-180, -7479)">
                <g transform="translate(56, 160)">
                  <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"/>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}
