// sections/ContactPortal.jsx — Glowing portal contact section

import { CONTACTS } from '../data'

export default function ContactPortal({ onEnterPortal }) {
    return (
        <section id="contact" className="section portal-section">
            {/* Background stars */}
            <div style={{
                position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
            }}>
                {Array.from({ length: 60 }, (_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: 1 + Math.random() * 2,
                        height: 1 + Math.random() * 2,
                        borderRadius: '50%',
                        background: '#fff',
                        opacity: 0.1 + Math.random() * 0.3,
                        animation: `twinkle ${2 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite`,
                    }} />
                ))}
            </div>

            <div className="section-inner reveal">
                <div className="hieroglyph-divider">✦ 𓋹 ✦</div>
                <h2 className="section-title">The Portal</h2>
                <p className="section-subtitle">Step into the future — connect with me</p>

                {/* Portal effect */}
                <div className="portal-ring">
                    <div className="portal-center" onClick={onEnterPortal} style={{ cursor: 'pointer' }}>
                        <span>Enter</span>
                    </div>

                    {/* Orbiting glyphs */}
                    {['𓂀', '𓆣', '𓋹', '𓁹'].map((g, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: `rotate(${i * 90}deg) translateY(-150px)`,
                            fontSize: 20,
                            opacity: 0.4,
                            animation: `portalSpin 8s linear infinite`,
                            transformOrigin: '0 0',
                        }}>
                            {g}
                        </div>
                    ))}
                </div>

                {/* Contact links */}
                <div className="contact-orbs">
                    {CONTACTS.map((c, i) => (
                        <a key={i} href={c.url} className="contact-orb"
                            target={c.url.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            style={{ '--orb-color': c.color }}
                        >
                            <span className="orb-icon">{c.icon}</span>
                            <span className="orb-label">{c.label}</span>
                        </a>
                    ))}
                </div>

                {/* Closing narrative */}
                <div style={{
                    textAlign: 'center', marginTop: 60,
                    fontFamily: "'IM Fell English', serif", fontStyle: 'italic',
                    fontSize: 14, color: 'var(--text-dim)', letterSpacing: 2,
                }}>
                    𓂀 &nbsp; From ancient scrolls to modern code &nbsp; 𓂀
                </div>
                <div style={{
                    textAlign: 'center', marginTop: 10,
                    fontFamily: "'Cinzel', serif", fontSize: 12,
                    color: 'rgba(200,160,80,0.3)', letterSpacing: 3,
                }}>
                    Crafted with intention · Raunak Saha · {new Date().getFullYear()}
                </div>
            </div>

            <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
      `}</style>
        </section>
    )
}
