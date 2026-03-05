// sections/FutureWorld.jsx — Complete futuristic cyberpunk version of the portfolio
// Same data, completely different visuals — neon, lasers, glitch, no Egyptian elements

import { useState, useEffect, useCallback, useRef } from 'react'
import { PROFILE, SKILLS, PROJECTS, ACHIEVEMENTS, CONTACTS } from '../data'

const FT_NAV_ITEMS = [
    { href: '#ft-about', label: 'PROFILE', code: '01' },
    { href: '#ft-skills', label: 'STACK', code: '02' },
    { href: '#ft-projects', label: 'BUILDS', code: '03' },
    { href: '#ft-achievements', label: 'FEATS', code: '04' },
    { href: '#ft-contact', label: 'CONNECT', code: '05' },
]

/* ═══ JARVIS Mobile Menu ═══ */
function JarvisMenu({ open, onClose, onGoBack }) {
    if (!open) return null
    return (
        <div className="jarvis-overlay" onClick={onClose}>
            <div className="jarvis-panel" onClick={e => e.stopPropagation()}>
                {/* Glass layers */}
                <div className="jarvis-glass" />
                <div className="jarvis-scanline" />
                <div className="jarvis-hex" />

                {/* Content */}
                <div className="jarvis-content">
                    <div className="jarvis-header">
                        <span style={{ color: '#0ff', letterSpacing: 4, fontSize: 10, fontWeight: 700 }}>
                            ◈ NAVIGATION SYSTEM ◈
                        </span>
                        <div style={{
                            width: 60, height: 1, margin: '8px auto',
                            background: 'linear-gradient(90deg, transparent, #0ff, transparent)',
                        }} />
                    </div>

                    {FT_NAV_ITEMS.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="jarvis-link"
                            onClick={onClose}
                        >
                            <span className="jarvis-code">[{item.code}]</span>
                            <span className="jarvis-label">{item.label}</span>
                            <span className="jarvis-arrow">→</span>
                        </a>
                    ))}

                    <div style={{ margin: '14px 0', height: 1, background: 'rgba(0,255,255,0.1)' }} />

                    <button className="jarvis-back" onClick={() => { onGoBack(); onClose(); }}>
                        ← ANCIENT WORLD
                    </button>
                </div>
            </div>
        </div>
    )
}

/* ═══ Laser line background ═══ */
function LaserGrid() {
    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden',
            perspective: '600px',
        }}>
            {/* Horizontal grid lines */}
            <div style={{
                position: 'absolute', bottom: 0, left: '-20%', right: '-20%', height: '50%',
                transform: 'rotateX(60deg)', transformOrigin: 'bottom center',
                backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(0,255,255,0.06) 38px, rgba(0,255,255,0.06) 40px),
          repeating-linear-gradient(90deg, transparent, transparent 78px, rgba(0,255,255,0.04) 78px, rgba(0,255,255,0.04) 80px)
        `,
            }} />
            {/* Vertical scanline */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.01) 2px, rgba(0,255,255,0.01) 4px)',
                animation: 'scanDrift 8s linear infinite',
            }} />
            {/* Top gradient */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(120,0,255,0.08) 0%, transparent 70%)',
            }} />
        </div>
    )
}

/* ═══ Glitch text effect ═══ */
function GlitchText({ children, size = 48 }) {
    return (
        <div className="ft-glitch-wrap" style={{ position: 'relative', display: 'inline-block' }}>
            <span className="ft-glitch" style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: size,
                textTransform: 'uppercase',
                letterSpacing: 6,
                color: '#fff',
            }}>{children}</span>
        </div>
    )
}

/* ═══ Neon divider ═══ */
function NeonDivider() {
    return (
        <div style={{
            width: 120, height: 2, margin: '30px auto',
            background: 'linear-gradient(90deg, transparent, #0ff, #f0f, transparent)',
            boxShadow: '0 0 10px rgba(0,255,255,0.3)',
        }} />
    )
}

/* ═══ Section wrapper ═══ */
function FtSection({ id, children, bg }) {
    return (
        <section id={id} className="ft-section" style={{
            minHeight: '100vh', position: 'relative', zIndex: 2,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '80px 20px',
            background: bg || 'transparent',
        }}>
            <div className="ft-section-inner reveal" style={{
                maxWidth: 1000, width: '100%',
            }}>
                {children}
            </div>
        </section>
    )
}

/* ═══════════════ MAIN FUTURE WORLD ═══════════════ */
export default function FutureWorld({ onGoBack }) {
    const [navVisible, setNavVisible] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    // Reveal observer + resize listener
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.15 })
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

        const handleScroll = () => setNavVisible(window.scrollY > 100)
        const handleResize = () => setIsMobile(window.innerWidth <= 768)
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        handleScroll()

        window.scrollTo(0, 0)

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="future-world">
            <LaserGrid />

            {/* ── Futuristic Navbar ── */}
            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                padding: '12px 30px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'linear-gradient(180deg, rgba(0,0,10,0.95) 0%, transparent 100%)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0,255,255,0.08)',
                transform: navVisible ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.5s ease',
            }}>
                <div style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 900,
                    fontSize: 18, color: '#0ff', letterSpacing: 3,
                    textShadow: '0 0 10px rgba(0,255,255,0.5)',
                }}>
                    RS<span style={{ color: '#f0f' }}>_</span>
                </div>

                {/* Desktop links — hidden on mobile */}
                {!isMobile && (
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        {FT_NAV_ITEMS.map(l => (
                            <a key={l.href} href={l.href} style={{
                                padding: '8px 14px', borderRadius: 6,
                                color: 'rgba(0,255,255,0.7)', textDecoration: 'none',
                                fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600,
                                letterSpacing: 2, textTransform: 'uppercase',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={e => { e.target.style.color = '#0ff'; e.target.style.background = 'rgba(0,255,255,0.08)' }}
                                onMouseLeave={e => { e.target.style.color = 'rgba(0,255,255,0.7)'; e.target.style.background = 'none' }}
                            >{l.label}</a>
                        ))}
                        <button onClick={onGoBack} style={{
                            padding: '6px 14px', borderRadius: 6, marginLeft: 8,
                            background: 'rgba(255,0,255,0.1)', border: '1px solid rgba(255,0,255,0.3)',
                            color: '#f0f', fontFamily: "'Inter', sans-serif", fontSize: 10,
                            fontWeight: 700, letterSpacing: 2, cursor: 'pointer',
                            textTransform: 'uppercase', transition: 'all 0.3s ease',
                        }}>
                            ← ANCIENT
                        </button>
                    </div>
                )}

                {/* Mobile hamburger — shown on mobile */}
                {isMobile && (
                    <button
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        aria-label="Menu"
                        style={{
                            display: 'flex', flexDirection: 'column', gap: 5,
                            background: 'none', border: 'none',
                            cursor: 'pointer', padding: 8, zIndex: 10001,
                        }}
                    >
                        <div style={{
                            width: 22, height: 2, background: '#0ff', borderRadius: 1,
                            transition: 'all 0.3s ease',
                            boxShadow: '0 0 6px rgba(0,255,255,0.5)',
                            transform: mobileMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                        }} />
                        <div style={{
                            width: 22, height: 2, background: '#0ff', borderRadius: 1,
                            transition: 'all 0.3s ease',
                            boxShadow: '0 0 6px rgba(0,255,255,0.5)',
                            opacity: mobileMenuOpen ? 0 : 1,
                        }} />
                        <div style={{
                            width: 22, height: 2, background: '#0ff', borderRadius: 1,
                            transition: 'all 0.3s ease',
                            boxShadow: '0 0 6px rgba(0,255,255,0.5)',
                            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }} />
                    </button>
                )}
            </nav>

            {/* JARVIS mobile menu */}
            <JarvisMenu
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                onGoBack={onGoBack}
            />

            {/* ── Hero ── */}
            <section style={{
                minHeight: '100vh', position: 'relative', zIndex: 2,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', padding: '80px 20px 40px',
            }}>
                <div style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 900,
                    fontSize: 'clamp(60px, 15vw, 180px)', lineHeight: 1,
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(0,255,255,0.5)',
                    textShadow: '0 0 60px rgba(0,255,255,0.2)',
                    animation: 'revealUp 1.2s ease forwards',
                    marginBottom: 8,
                }}>R</div>

                <div style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 800,
                    fontSize: 'clamp(14px, 3vw, 22px)', letterSpacing: 10,
                    textTransform: 'uppercase', color: '#0ff',
                    textShadow: '0 0 20px rgba(0,255,255,0.3)',
                    animation: 'revealUp 1s ease 0.3s forwards', opacity: 0,
                }}>RAUNAK SAHA</div>

                <div style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 300,
                    fontSize: 'clamp(12px, 2vw, 16px)', color: 'rgba(255,255,255,0.4)',
                    letterSpacing: 4, marginTop: 12,
                    animation: 'revealUp 1s ease 0.6s forwards', opacity: 0,
                }}>SYSTEM.INITIALIZED // FUTURE.MODE</div>

                <div style={{
                    marginTop: 20, fontSize: 14, letterSpacing: 8,
                    color: 'rgba(0,255,255,0.2)',
                    animation: 'revealUp 0.8s ease 0.9s forwards',
                }}>⟨ ◇ ⟩ ◈ ⟨ ◇ ⟩</div>

                {/* Scroll indicator */}
                <div style={{ marginTop: 50, opacity: 0.3, animation: 'scrollFloat 2s ease-in-out infinite' }}>
                    <div style={{
                        width: 24, height: 40, borderRadius: 12,
                        border: '2px solid #0ff', display: 'flex', justifyContent: 'center', paddingTop: 8,
                    }}>
                        <div style={{
                            width: 3, height: 8, borderRadius: 2, background: '#0ff',
                            animation: 'scrollFloat 1.5s ease-in-out infinite',
                        }} />
                    </div>
                </div>
            </section>

            {/* ── About (Profile) ── */}
            <FtSection id="ft-about" bg="radial-gradient(ellipse at 50% 50%, rgba(0,255,255,0.03) 0%, transparent 60%)">
                <NeonDivider />
                <h2 className="ft-title">SYSTEM.PROFILE</h2>
                <p className="ft-subtitle">ACCESSING CORE DATA...</p>

                <div className="ft-card" style={{
                    maxWidth: 700, margin: '30px auto 0',
                    padding: 40, background: 'rgba(0,5,15,0.85)',
                    border: '1px solid rgba(0,255,255,0.12)', borderRadius: 12,
                    boxShadow: '0 0 40px rgba(0,255,255,0.05), inset 0 0 40px rgba(0,0,0,0.3)',
                }}>
                    <div style={{
                        fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 22,
                        color: '#0ff', marginBottom: 4,
                        textShadow: '0 0 15px rgba(0,255,255,0.3)',
                    }}>{PROFILE.name}</div>
                    <div style={{
                        fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
                        color: 'rgba(255,0,255,0.7)', marginBottom: 20, letterSpacing: 2,
                    }}>{PROFILE.title}</div>
                    <p style={{
                        fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8,
                        color: 'rgba(255,255,255,0.7)',
                    }}>{PROFILE.bio}</p>
                    {PROFILE.available && (
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            marginTop: 20, padding: '6px 16px', borderRadius: 20,
                            background: 'rgba(0,255,100,0.08)', border: '1px solid rgba(0,255,100,0.25)',
                            fontSize: 12, color: '#0f6',
                        }}>
                            <span style={{
                                width: 8, height: 8, borderRadius: '50%', background: '#0f6',
                                animation: 'pulse-avail 2s ease infinite',
                            }} />
                            STATUS: ONLINE
                        </div>
                    )}
                </div>
            </FtSection>

            {/* ── Skills (Stack) ── */}
            <FtSection id="ft-skills">
                <NeonDivider />
                <h2 className="ft-title">TECH.STACK</h2>
                <p className="ft-subtitle">MODULES LOADED</p>

                <div style={{
                    display: 'flex', flexDirection: 'column', gap: 12,
                    maxWidth: 900, margin: '30px auto 0',
                }}>
                    {SKILLS.map((skill, i) => (
                        <div key={i} className="ft-skill-row" style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            gap: 20, padding: '16px 20px',
                            background: 'rgba(0,5,15,0.8)',
                            border: '1px solid rgba(0,255,255,0.08)',
                            borderRadius: 10,
                            transition: 'all 0.4s ease',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.3)'
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.08)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.08)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 240 }}>
                                <span style={{ fontSize: 12, color: 'rgba(0,255,255,0.3)', fontFamily: "'Inter', monospace", fontWeight: 700 }}>
                                    [{String(i).padStart(2, '0')}]
                                </span>
                                <div>
                                    <div style={{
                                        fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700,
                                        color: '#0ff', textTransform: 'uppercase', letterSpacing: 1,
                                    }}>{skill.name}</div>
                                    <div style={{
                                        fontFamily: "'Inter', sans-serif", fontSize: 11,
                                        color: 'rgba(255,0,255,0.5)',
                                    }}>{skill.desc}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'flex-end' }}>
                                {skill.techs.map((tech, j) => (
                                    <div key={j} style={{
                                        display: 'flex', alignItems: 'center', gap: 6,
                                        padding: '4px 10px 4px 4px',
                                        background: 'rgba(0,255,255,0.04)',
                                        border: '1px solid rgba(0,255,255,0.1)',
                                        borderRadius: 8, transition: 'all 0.3s ease',
                                    }}>
                                        <img
                                            src={tech.icon.startsWith('local:') ? tech.icon.slice(6) : `https://skillicons.dev/icons?i=${tech.icon}`}
                                            alt={tech.label} width={24} height={24}
                                            style={{ borderRadius: 4 }} loading="lazy"
                                        />
                                        <span style={{
                                            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500,
                                            color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap',
                                        }}>{tech.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </FtSection>

            {/* ── Projects (Builds) ── */}
            <FtSection id="ft-projects" bg="radial-gradient(ellipse at 50% 50%, rgba(255,0,255,0.03) 0%, transparent 60%)">
                <NeonDivider />
                <h2 className="ft-title">BUILDS.LOG</h2>
                <p className="ft-subtitle">DEPLOYMENT HISTORY</p>

                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: 20, maxWidth: 900, margin: '30px auto 0',
                }}>
                    {PROJECTS.map(proj => (
                        <div key={proj.id} style={{
                            padding: 24, background: 'rgba(0,5,15,0.85)',
                            border: '1px solid rgba(0,255,255,0.08)', borderRadius: 12,
                            transition: 'all 0.4s ease', cursor: 'default',
                            position: 'relative', overflow: 'hidden',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.3)'
                                e.currentTarget.style.transform = 'translateY(-4px)'
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,255,255,0.08)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.08)'
                                e.currentTarget.style.transform = 'none'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            {/* Status indicator */}
                            <div style={{
                                position: 'absolute', top: 12, right: 12,
                                width: 6, height: 6, borderRadius: '50%',
                                background: '#0f6', boxShadow: '0 0 8px rgba(0,255,100,0.5)',
                            }} />

                            <div style={{
                                fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700,
                                color: '#f0f', textTransform: 'uppercase', letterSpacing: 2,
                                marginBottom: 6,
                            }}>{proj.tag}</div>

                            <h3 style={{
                                fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 800,
                                color: '#0ff', marginBottom: 10,
                                textShadow: '0 0 10px rgba(0,255,255,0.2)',
                            }}>{proj.title}</h3>

                            <p style={{
                                fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6,
                                color: 'rgba(255,255,255,0.6)', marginBottom: 14,
                            }}>{proj.desc}</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                                {proj.techs.map((t, i) => (
                                    <span key={i} style={{
                                        padding: '3px 10px', borderRadius: 12,
                                        background: 'rgba(0,255,255,0.06)', border: '1px solid rgba(0,255,255,0.12)',
                                        fontSize: 10, color: '#0ff',
                                    }}>{t}</span>
                                ))}
                            </div>

                            <a href={proj.gh} target="_blank" rel="noopener noreferrer" style={{
                                fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700,
                                color: '#f0f', textDecoration: 'none', textTransform: 'uppercase',
                                letterSpacing: 2, transition: 'color 0.3s',
                            }}>
                                → SOURCE CODE
                            </a>
                        </div>
                    ))}
                </div>
            </FtSection>

            {/* ── Achievements (Feats) ── */}
            <FtSection id="ft-achievements">
                <NeonDivider />
                <h2 className="ft-title">ACHIEVEMENTS.UNLOCKED</h2>
                <p className="ft-subtitle">RARE DROPS</p>

                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: 20, maxWidth: 900, margin: '30px auto 0',
                }}>
                    {ACHIEVEMENTS.map((ach, i) => (
                        <div key={i} style={{
                            textAlign: 'center', padding: '36px 20px',
                            background: 'rgba(0,5,15,0.85)',
                            border: '1px solid rgba(255,0,255,0.1)', borderRadius: 12,
                            transition: 'all 0.4s ease',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(255,0,255,0.4)'
                                e.currentTarget.style.transform = 'translateY(-6px)'
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,0,255,0.1)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(255,0,255,0.1)'
                                e.currentTarget.style.transform = 'none'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            <div style={{
                                fontSize: 42, marginBottom: 14,
                                animation: 'floatArtifact 3s ease-in-out infinite',
                                animationDelay: `${i * 0.3}s`,
                            }}>{ach.icon}</div>
                            <div style={{
                                fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500,
                                color: 'rgba(255,0,255,0.5)', marginBottom: 6,
                                textTransform: 'uppercase', letterSpacing: 2,
                            }}>{ach.artifact}</div>
                            <div style={{
                                fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 800,
                                color: '#0ff', marginBottom: 8,
                            }}>{ach.title}</div>
                            <div style={{
                                fontFamily: "'Inter', sans-serif", fontSize: 12,
                                color: 'rgba(255,255,255,0.5)', lineHeight: 1.5,
                            }}>{ach.desc}</div>
                        </div>
                    ))}
                </div>
            </FtSection>

            {/* ── Contact (Connect) ── */}
            <FtSection id="ft-contact" bg="radial-gradient(ellipse at 50% 60%, rgba(0,255,255,0.04) 0%, transparent 60%)">
                <NeonDivider />
                <h2 className="ft-title">CONNECT.INIT</h2>
                <p className="ft-subtitle">ESTABLISHING UPLINK...</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', marginTop: 40 }}>
                    {CONTACTS.map((c, i) => (
                        <a key={i} href={c.url}
                            target={c.url.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                                padding: '28px 32px', minWidth: 120,
                                background: 'rgba(0,5,15,0.85)',
                                border: '1px solid rgba(0,255,255,0.1)',
                                borderRadius: 14, textDecoration: 'none',
                                transition: 'all 0.4s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = '#0ff'
                                e.currentTarget.style.transform = 'translateY(-6px)'
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,255,255,0.15)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.1)'
                                e.currentTarget.style.transform = 'none'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            <span style={{ fontSize: 28 }}>{c.icon}</span>
                            <span style={{
                                fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700,
                                color: '#0ff', textTransform: 'uppercase', letterSpacing: 2,
                            }}>{c.label}</span>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div style={{
                    textAlign: 'center', marginTop: 60,
                    fontFamily: "'Inter', sans-serif", fontSize: 12,
                    color: 'rgba(0,255,255,0.2)', letterSpacing: 3,
                }}>
                    ⟨ RAUNAK SAHA // {new Date().getFullYear()} // ALL SYSTEMS OPERATIONAL ⟩
                </div>
            </FtSection>

            {/* ── Return Portal — back to Ancient world ── */}
            <section style={{
                minHeight: '60vh', position: 'relative', zIndex: 2,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '60px 20px 80px', textAlign: 'center',
            }}>
                <div style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 300,
                    fontSize: 13, color: 'rgba(255,0,255,0.4)',
                    letterSpacing: 4, textTransform: 'uppercase',
                    marginBottom: 30,
                }}>
                    TEMPORAL RIFT DETECTED
                </div>

                {/* Portal ring */}
                <div style={{
                    position: 'relative', width: 260, height: 260,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    {/* Outer ring */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        borderRadius: '50%',
                        border: '2px solid rgba(255,0,255,0.3)',
                        animation: 'portalSpin 10s linear infinite reverse',
                        boxShadow: '0 0 30px rgba(255,0,255,0.1), inset 0 0 30px rgba(255,0,255,0.05)',
                    }} />
                    {/* Inner ring */}
                    <div style={{
                        position: 'absolute', inset: 30,
                        borderRadius: '50%',
                        border: '1px solid rgba(0,255,255,0.25)',
                        animation: 'portalSpin 6s linear infinite',
                        boxShadow: '0 0 20px rgba(0,255,255,0.08)',
                    }} />
                    {/* Glow center */}
                    <div style={{
                        position: 'absolute', inset: 60,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,0,255,0.08) 0%, transparent 70%)',
                    }} />

                    {/* Orbiting elements */}
                    {['◇', '◈', '◇', '◈'].map((g, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: `rotate(${i * 90}deg) translateY(-120px)`,
                            fontSize: 14, color: '#f0f', opacity: 0.4,
                            animation: 'portalSpin 8s linear infinite reverse',
                            transformOrigin: '0 0',
                        }}>{g}</div>
                    ))}

                    {/* Center button */}
                    <div
                        onClick={onGoBack}
                        style={{
                            width: 100, height: 100, borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 5,
                            background: 'radial-gradient(circle, rgba(255,0,255,0.12) 0%, rgba(0,0,0,0.6) 100%)',
                            border: '1px solid rgba(255,0,255,0.3)',
                            transition: 'all 0.5s ease',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 800, fontSize: 12,
                            color: '#f0f', letterSpacing: 3,
                            textTransform: 'uppercase',
                            textShadow: '0 0 15px rgba(255,0,255,0.5)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = '0 0 40px rgba(255,0,255,0.3), inset 0 0 20px rgba(255,0,255,0.1)'
                            e.currentTarget.style.transform = 'scale(1.1)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.style.transform = 'scale(1)'
                        }}
                    >
                        Return
                    </div>
                </div>

                <div style={{
                    marginTop: 24,
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: 11, color: 'rgba(0,255,255,0.3)',
                    letterSpacing: 3,
                }}>
                    TRAVEL BACK TO THE ANCIENT WORLD
                </div>
            </section>

            {/* ── Futuristic inline styles ── */}
            <style>{`
        .future-world {
          background: #000008;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          max-width: 100vw;
        }

        .ft-title {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: clamp(24px, 5vw, 42px);
          color: #0ff;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 6px;
          text-shadow: 0 0 30px rgba(0,255,255,0.3), 0 0 60px rgba(0,255,255,0.1);
          margin-bottom: 6px;
        }

        .ft-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(11px, 1.5vw, 13px);
          font-weight: 500;
          color: rgba(255,0,255,0.5);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: 30px;
        }

        @keyframes scanDrift {
          0%   { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }

        @keyframes neonPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .ft-mobile-btn {
          display: none;
        }

        @media (max-width: 768px) {
          .ft-desktop-links { display: none !important; }
          .ft-mobile-btn { display: flex !important; }
          .ft-skill-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .ft-section {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          .ft-section-inner {
            max-width: 100% !important;
            overflow-x: hidden;
          }
        }

        /* ═══ JARVIS Glass Menu ═══ */
        .jarvis-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,10,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: jarvisFadeIn 0.3s ease;
        }

        @keyframes jarvisFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .jarvis-panel {
          position: relative;
          width: min(320px, 85vw);
          border-radius: 16px;
          overflow: hidden;
          animation: jarvisOpen 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes jarvisOpen {
          from { transform: scale(0.8) translateY(20px); opacity: 0; }
          to   { transform: scale(1) translateY(0); opacity: 1; }
        }

        .jarvis-glass {
          position: absolute;
          inset: 0;
          background: rgba(0, 10, 30, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,255,255,0.15);
          border-radius: 16px;
          box-shadow:
            0 0 40px rgba(0,255,255,0.08),
            inset 0 0 40px rgba(0,255,255,0.03),
            inset 0 1px 0 rgba(0,255,255,0.1);
        }

        .jarvis-scanline {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,255,255,0.015) 3px,
            rgba(0,255,255,0.015) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        .jarvis-hex {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .jarvis-content {
          position: relative;
          z-index: 2;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .jarvis-header {
          text-align: center;
          margin-bottom: 12px;
          font-family: 'Inter', sans-serif;
        }

        .jarvis-link {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 10px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .jarvis-link:hover {
          background: rgba(0,255,255,0.06);
          border-color: rgba(0,255,255,0.15);
        }

        .jarvis-code {
          font-size: 10px;
          font-weight: 700;
          color: rgba(0,255,255,0.3);
          font-family: 'Inter', monospace;
          letter-spacing: 1px;
        }

        .jarvis-label {
          font-size: 13px;
          font-weight: 700;
          color: #0ff;
          letter-spacing: 3px;
          text-transform: uppercase;
          flex: 1;
        }

        .jarvis-arrow {
          font-size: 12px;
          color: rgba(255,0,255,0.4);
          transition: transform 0.3s ease;
        }

        .jarvis-link:hover .jarvis-arrow {
          transform: translateX(4px);
          color: rgba(255,0,255,0.8);
        }

        .jarvis-back {
          width: 100%;
          padding: 10px 16px;
          border-radius: 8px;
          background: rgba(255,0,255,0.06);
          border: 1px solid rgba(255,0,255,0.2);
          color: #f0f;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .jarvis-back:hover {
          background: rgba(255,0,255,0.12);
          border-color: rgba(255,0,255,0.4);
          box-shadow: 0 0 15px rgba(255,0,255,0.1);
        }
      `}</style>
        </div>
    )
}
