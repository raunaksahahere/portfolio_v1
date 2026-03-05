// sections/OasisAbout.jsx — About Me section styled as an Oasis

import { PROFILE } from '../data'

export default function OasisAbout() {
    return (
        <section id="about" className="section oasis-section">
            {/* Decorative dunes background */}
            <div style={{
                position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
            }}>
                {/* Top dune */}
                <svg viewBox="0 0 1200 150" preserveAspectRatio="none" style={{
                    position: 'absolute', top: 0, width: '100%', height: 100, opacity: 0.15,
                }}>
                    <path d="M0,100 Q200,30 400,80 Q600,130 800,60 Q1000,0 1200,70 L1200,0 L0,0 Z"
                        fill="rgba(200,149,42,0.3)" />
                </svg>

                {/* Bottom dune */}
                <svg viewBox="0 0 1200 150" preserveAspectRatio="none" style={{
                    position: 'absolute', bottom: 0, width: '100%', height: 100, opacity: 0.15,
                }}>
                    <path d="M0,50 Q200,120 400,70 Q600,20 800,90 Q1000,150 1200,80 L1200,150 L0,150 Z"
                        fill="rgba(200,149,42,0.3)" />
                </svg>

                {/* Palm trees */}
                <div style={{ position: 'absolute', bottom: 60, left: '8%', opacity: 0.08, fontSize: 80 }}>🌴</div>
                <div style={{ position: 'absolute', bottom: 40, right: '10%', opacity: 0.06, fontSize: 60 }}>🌴</div>

                {/* Water shimmer */}
                <div style={{
                    position: 'absolute', bottom: 0, left: '20%', right: '20%', height: 4,
                    background: 'linear-gradient(90deg, transparent, rgba(64, 224, 255, 0.1), transparent)',
                    animation: 'shimmer 3s ease-in-out infinite',
                }} />
            </div>

            <div className="section-inner reveal">
                <div className="hieroglyph-divider">𓃭 𓆣 𓋹 𓆣 𓃭</div>
                <h2 className="section-title">The Oasis</h2>
                <p className="section-subtitle">Where the journey begins</p>

                <div className="oasis-card">
                    <h2>{PROFILE.name}</h2>
                    <div className="title-role">{PROFILE.title}</div>
                    <p className="bio">{PROFILE.bio}</p>
                    {PROFILE.available && (
                        <div className="avail-badge">
                            <span className="avail-dot" />
                            Available for opportunities
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; transform: scaleX(0.8); }
          50% { opacity: 0.8; transform: scaleX(1.2); }
        }
      `}</style>
        </section>
    )
}
