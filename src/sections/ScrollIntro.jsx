// sections/ScrollIntro.jsx — Opening scroll animation with scroll.png

import { useState, useEffect, useCallback } from 'react'

export default function ScrollIntro({ onEnter }) {
    const [phase, setPhase] = useState(0) // 0=black, 1=scroll visible, 2=text, 3=button, 4=fading
    const [particles, setParticles] = useState([])

    useEffect(() => {
        // Generate sand particles
        const p = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 1 + Math.random() * 2,
            duration: 8 + Math.random() * 12,
            delay: Math.random() * 5,
            opacity: 0.1 + Math.random() * 0.15,
        }))
        setParticles(p)

        const t1 = setTimeout(() => setPhase(1), 400)
        const t2 = setTimeout(() => setPhase(2), 1200)
        const t3 = setTimeout(() => setPhase(3), 2800)
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
    }, [])

    const handleEnter = useCallback(() => {
        setPhase(4)
        setTimeout(onEnter, 1200)
    }, [onEnter])

    return (
        <div className={`scroll-intro ${phase >= 4 ? 'fading' : ''}`}>
            {/* Ambient sand particles */}
            {particles.map(p => (
                <div key={p.id} style={{
                    position: 'absolute',
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    borderRadius: '50%',
                    background: 'rgba(200, 149, 42, 0.5)',
                    opacity: p.opacity,
                    animation: `floatParticle ${p.duration}s linear ${p.delay}s infinite`,
                    pointerEvents: 'none',
                }} />
            ))}

            {/* Ambient glow */}
            <div style={{
                position: 'absolute',
                width: '600px', height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,149,42,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Scroll image */}
            <div className="scroll-image-wrap" style={{
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? 'scale(1)' : 'scale(0.7)',
                transition: 'opacity 1s ease, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
                <img src="/scroll.png" alt="Ancient Scroll" />

                {/* Text overlay on the scroll */}
                <div className="scroll-text-overlay" style={{
                    opacity: phase >= 2 ? 1 : 0,
                    transition: 'opacity 0.8s ease 0.3s',
                }}>
                    <div className="scroll-narrative" style={{
                        opacity: phase >= 2 ? 1 : 0,
                        animation: phase >= 2 ? 'textReveal 1s ease forwards' : 'none',
                    }}>
                        Knowledge began with scrolls.<br />
                        Civilizations built monuments.<br />
                        Today, we build technology.
                    </div>

                    <div className="scroll-name" style={{
                        opacity: phase >= 2 ? 1 : 0,
                        animation: phase >= 2 ? 'textReveal 1s ease 0.5s forwards' : 'none',
                    }}>
                        Raunak Saha
                    </div>

                    <div className="scroll-tagline" style={{
                        opacity: phase >= 2 ? 1 : 0,
                        animation: phase >= 2 ? 'textReveal 0.8s ease 1s forwards' : 'none',
                    }}>
                        Code is the new civilization.
                    </div>
                </div>
            </div>

            {/* Stone seal button */}
            {phase >= 3 && (
                <div className="seal-button" style={{
                    animation: 'textReveal 0.8s ease forwards',
                }}>
                    <button onClick={handleEnter}>
                        <span className="seal-glyph">𓋹</span>
                        <span>Begin Journey</span>
                        <span className="seal-glyph">𓋹</span>
                    </button>
                    <div style={{
                        textAlign: 'center',
                        marginTop: 14,
                        fontFamily: "'IM Fell English', serif",
                        fontStyle: 'italic',
                        fontSize: 12,
                        color: 'rgba(200, 160, 80, 0.35)',
                        letterSpacing: 2,
                    }}>
                        Unroll the scroll · Enter the world
                    </div>
                </div>
            )}

            {/* Float particle keyframes (injected) */}
            <style>{`
        @keyframes floatParticle {
          0%   { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.3; }
          90%  { opacity: 0.3; }
          100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}120px, -200px) rotate(360deg); opacity: 0; }
        }
      `}</style>
        </div>
    )
}
