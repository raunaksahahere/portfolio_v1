// components/Navbar.jsx — Egyptian nav with mobile scroll menu

import { useState, useCallback } from 'react'
import DayNightToggle from './DayNightToggle'

const NAV_ITEMS = [
  { href: '#about', label: 'Oasis', glyph: '🌴' },
  { href: '#skills', label: 'Wisdom', glyph: '𓂀' },
  { href: '#projects', label: 'Ruins', glyph: '🏛️' },
  { href: '#temple', label: 'Temple', glyph: '⚱️' },
  { href: '#contact', label: 'Portal', glyph: '🌀' },
]

export default function Navbar({ visible, isDark, onToggleDark, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <>
      <nav className={`egyptian-nav ${!visible ? 'hidden' : ''}`}>
        <a href="#" className="nav-logo">
          <span className="logo-glyph">𓂀</span>
          <span>RS</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links desktop-only">
          {NAV_ITEMS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
          <DayNightToggle isDark={isDark} onToggle={onToggleDark} />
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-menu-btn mobile-only" onClick={toggleMenu} aria-label="Menu">
          <div className={`burger-line ${menuOpen ? 'open' : ''}`} />
          <div className={`burger-line ${menuOpen ? 'open' : ''}`} />
          <div className={`burger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      {/* Mobile scroll menu overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="scroll-mobile-menu" onClick={e => e.stopPropagation()}>
            {/* Scroll background */}
            <img src="/scroll.png" alt="" className="scroll-menu-bg" />

            {/* Menu content overlaid on scroll */}
            <div className="scroll-menu-content">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`scroll-menu-item ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="scroll-menu-glyph">{item.glyph}</span>
                  <span className="scroll-menu-label">{item.label}</span>
                </a>
              ))}
              <div style={{ marginTop: 12 }}>
                <DayNightToggle isDark={isDark} onToggle={onToggleDark} />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Desktop / Mobile toggle */
        .desktop-only { display: flex !important; }
        .mobile-only  { display: none !important; }

        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only  { display: flex !important; }
        }

        /* Hamburger button */
        .mobile-menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          flex-direction: column;
          gap: 5px;
          z-index: 10001;
        }

        .burger-line {
          width: 22px;
          height: 2px;
          background: var(--gold);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .burger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(4px, 4px);
        }
        .burger-line.open:nth-child(2) {
          opacity: 0;
        }
        .burger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Overlay */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Scroll menu */
        .scroll-mobile-menu {
          position: relative;
          width: min(420px, 90vw);
          animation: scrollMenuOpen 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes scrollMenuOpen {
          from { transform: scale(0.7); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }

        .scroll-menu-bg {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 0 40px rgba(200,149,42,0.3));
        }

        .scroll-menu-content {
          position: absolute;
          top: 22%;
          left: 12%;
          right: 15%;
          bottom: 15%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .scroll-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 20px;
          text-decoration: none;
          font-family: 'Cinzel', serif;
          font-size: 14px;
          font-weight: 700;
          color: #3a2810;
          letter-spacing: 2px;
          text-transform: uppercase;
          border-radius: 8px;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }

        .scroll-menu-item:hover,
        .scroll-menu-item.active {
          background: rgba(200,149,42,0.15);
          color: #1a0a00;
        }

        .scroll-menu-glyph {
          font-size: 18px;
        }

        .scroll-menu-label {
          min-width: 60px;
        }
      `}</style>
    </>
  )
}
