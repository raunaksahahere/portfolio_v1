// sections/TempleOfCreation.jsx — Hall of greatest achievements

import { ACHIEVEMENTS } from '../data'

export default function TempleOfCreation() {
    return (
        <section id="temple" className="section temple-section">
            {/* Temple columns background */}
            <div style={{
                position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
            }}>
                {/* Left column */}
                <div style={{
                    position: 'absolute', left: '5%', top: 0, bottom: 0, width: 40,
                    background: 'linear-gradient(180deg, transparent 10%, rgba(200,149,42,0.04) 30%, rgba(200,149,42,0.04) 70%, transparent 90%)',
                    borderRadius: 4,
                }} />
                {/* Right column */}
                <div style={{
                    position: 'absolute', right: '5%', top: 0, bottom: 0, width: 40,
                    background: 'linear-gradient(180deg, transparent 10%, rgba(200,149,42,0.04) 30%, rgba(200,149,42,0.04) 70%, transparent 90%)',
                    borderRadius: 4,
                }} />
                {/* Floor glow */}
                <div style={{
                    position: 'absolute', bottom: 0, left: '15%', right: '15%', height: 2,
                    background: 'linear-gradient(90deg, transparent, rgba(200,149,42,0.15), transparent)',
                }} />
            </div>

            <div className="section-inner reveal">
                <div className="hieroglyph-divider">𓊽 𓋹 𓂀 𓋹 𓊽</div>
                <h2 className="section-title">Temple of Creation</h2>
                <p className="section-subtitle">Where the greatest artifacts were forged</p>

                <div className="temple-grid">
                    {ACHIEVEMENTS.map((ach, i) => (
                        <div key={i} className="artifact-card">
                            <div className="artifact-icon">{ach.icon}</div>
                            <div className="artifact-label">{ach.artifact}</div>
                            <div className="artifact-title">{ach.title}</div>
                            <div className="artifact-desc">{ach.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
