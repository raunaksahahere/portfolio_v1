// App.jsx — Main orchestrator for Egyptian Time Travel Portfolio

import { useState, useEffect, useCallback, useRef } from 'react'
import './styles/global.css'

import ScrollIntro from './sections/ScrollIntro'
import OasisAbout from './sections/OasisAbout'
import HieroglyphSkills from './sections/HieroglyphSkills'
import ProjectRuins from './sections/ProjectRuins'
import TempleOfCreation from './sections/TempleOfCreation'
import ContactPortal from './sections/ContactPortal'
import FutureWorld from './sections/FutureWorld'

import Navbar from './components/Navbar'
import ScarabGuide from './components/ScarabGuide'
import SphinxRiddle from './components/SphinxRiddle'
import SandstormTransition from './components/SandstormTransition'

const SECTIONS = ['about', 'skills', 'projects', 'temple', 'contact']

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [isDark, setIsDark] = useState(false)
  const [world, setWorld] = useState('ancient') // 'ancient' or 'future'
  const [activeSection, setActiveSection] = useState('')
  const [navVisible, setNavVisible] = useState(false)
  const [sandstormActive, setSandstormActive] = useState(false)
  const lastSectionRef = useRef('')

  // Apply theme
  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'night' : 'day')
  }, [isDark])

  // Scroll observer — detect current section + reveal animations
  useEffect(() => {
    if (showIntro || world === 'future') return

    // Reset reveal elements so they can re-animate when returning from future
    document.querySelectorAll('.reveal').forEach(el => el.classList.remove('visible'))
    window.scrollTo(0, 0)

    // Small delay to let DOM settle before observing
    const setupTimer = setTimeout(() => {
      // Reveal animation observer
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, { threshold: 0.15 })

      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

      // Section tracking observer
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id && SECTIONS.includes(id)) {
              setActiveSection(id)
            }
          }
        })
      }, { threshold: 0.3 })

      SECTIONS.forEach(id => {
        const el = document.getElementById(id)
        if (el) sectionObserver.observe(el)
      })

      // Show nav after scrolling 100px
      const handleScroll = () => {
        setNavVisible(window.scrollY > 100)
      }
      window.addEventListener('scroll', handleScroll)
      handleScroll()

      return () => {
        revealObserver.disconnect()
        sectionObserver.disconnect()
        window.removeEventListener('scroll', handleScroll)
      }
    }, 100)

    return () => clearTimeout(setupTimer)
  }, [showIntro, world])

  // Sandstorm effect on section change
  useEffect(() => {
    if (activeSection && lastSectionRef.current && activeSection !== lastSectionRef.current) {
      setSandstormActive(true)
      const t = setTimeout(() => setSandstormActive(false), 1200)
      return () => clearTimeout(t)
    }
    lastSectionRef.current = activeSection
  }, [activeSection])

  const handleEnter = useCallback(() => {
    setShowIntro(false)
  }, [])

  const toggleDark = useCallback((val) => {
    setIsDark(val)
  }, [])

  const enterFuture = useCallback(() => {
    setWorld('future')
  }, [])

  const goBackAncient = useCallback(() => {
    setWorld('ancient')
  }, [])

  // Scarab section mapping
  const scarabSection = activeSection || 'intro'

  if (showIntro) {
    return <ScrollIntro onEnter={handleEnter} />
  }

  if (world === 'future') {
    return <FutureWorld onGoBack={goBackAncient} />
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background gradient */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        background: `linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 40%, var(--sky-bottom) 100%)`,
        transition: 'background 1s ease',
      }} />

      {/* Ambient background texture */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.3,
        backgroundImage: `
          radial-gradient(ellipse at 20% 50%, rgba(200,149,42,0.03) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 50%, rgba(200,149,42,0.03) 0%, transparent 50%)
        `,
      }} />

      <Navbar
        visible={navVisible}
        isDark={isDark}
        onToggleDark={toggleDark}
        activeSection={activeSection}
      />

      <main style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero / Title area */}
        <section style={{
          minHeight: '60vh',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '80px 20px 40px',
          position: 'relative', zIndex: 2,
        }}>
          {/* Big title */}
          <div style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontWeight: 900,
            fontSize: 'clamp(60px, 15vw, 180px)',
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(200,149,42,0.4)',
            animation: 'revealUp 1.2s ease forwards',
            marginBottom: 8,
          }}>
            R
          </div>

          <div style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700, fontSize: 'clamp(14px, 3vw, 22px)',
            letterSpacing: 8, textTransform: 'uppercase',
            color: 'var(--gold)',
            animation: 'revealUp 1s ease 0.3s forwards',
            opacity: 0,
          }}>
            Raunak Saha
          </div>

          <div style={{
            fontFamily: "'IM Fell English', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(12px, 2vw, 16px)',
            color: 'var(--text-dim)',
            letterSpacing: 2,
            marginTop: 12,
            animation: 'revealUp 1s ease 0.6s forwards',
            opacity: 0,
          }}>
            Code is the new civilization.
          </div>

          <div style={{
            fontSize: 18, letterSpacing: 14,
            color: 'var(--gold)', opacity: 0.35,
            marginTop: 20,
            animation: 'revealUp 0.8s ease 0.9s forwards',
          }}>
            𓂀 𓆣 𓋹 𓆣 𓂀
          </div>

          {/* Scroll down indicator */}
          <div style={{
            marginTop: 50, opacity: 0.35,
            animation: 'scrollFloat 2s ease-in-out infinite',
          }}>
            <div style={{
              width: 24, height: 40, borderRadius: 12,
              border: '2px solid var(--gold)',
              display: 'flex', justifyContent: 'center', paddingTop: 8,
            }}>
              <div style={{
                width: 3, height: 8, borderRadius: 2,
                background: 'var(--gold)',
                animation: 'scrollFloat 1.5s ease-in-out infinite',
              }} />
            </div>
          </div>
        </section>

        <OasisAbout />
        <HieroglyphSkills />
        <ProjectRuins />
        <TempleOfCreation />

        {/* Sphinx riddle — hidden between Temple and Contact */}
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <SphinxRiddle />
          <div style={{
            fontFamily: "'IM Fell English', serif",
            fontStyle: 'italic', fontSize: 11,
            color: 'var(--text-dim)', marginTop: 8, opacity: 0.4,
          }}>
            The Sphinx guards a secret...
          </div>
        </div>

        <ContactPortal onEnterPortal={enterFuture} />
      </main>

      {/* Sandstorm transition */}
      <SandstormTransition active={sandstormActive} />

      {/* Scarab guide */}
      <ScarabGuide currentSection={scarabSection} />
    </div>
  )
}
