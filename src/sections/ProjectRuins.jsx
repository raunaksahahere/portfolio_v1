// sections/ProjectRuins.jsx — Interactive ruin/puzzle project cards

import { useState, useCallback } from 'react'
import { PROJECTS } from '../data'

const STRUCTURE_ICONS = {
    pyramid: '🔺',
    temple: '🏛️',
    obelisk: '🗿',
    tomb: '⚱️',
}

const STRUCTURE_LABELS = {
    pyramid: 'The Great Pyramid',
    temple: 'The Sacred Temple',
    obelisk: 'The Obelisk',
    tomb: 'The Ancient Tomb',
}

export default function ProjectRuins() {
    const [opened, setOpened] = useState({})
    const [torches, setTorches] = useState({})

    const handleTorch = useCallback((projId, torchIdx) => {
        setTorches(prev => {
            const current = prev[projId] || []
            const next = current.includes(torchIdx)
                ? current
                : [...current, torchIdx]

            // If all 3 torches lit, open the ruin
            if (next.length >= 3) {
                setTimeout(() => {
                    setOpened(p => ({ ...p, [projId]: true }))
                }, 400)
            }
            return { ...prev, [projId]: next }
        })
    }, [])

    const handleCardClick = useCallback((projId) => {
        // Quick open on click if not using torches
        setOpened(p => ({ ...p, [projId]: !p[projId] }))
    }, [])

    return (
        <section id="projects" className="section ruins-section">
            <div className="section-inner reveal">
                <div className="hieroglyph-divider">𓊽 𓉐 𓊽 𓉐 𓊽</div>
                <h2 className="section-title">The Ruins</h2>
                <p className="section-subtitle">Ancient structures hiding modern creations — light the torches to reveal</p>

                <div className="ruins-grid">
                    {PROJECTS.map(proj => {
                        const isOpen = opened[proj.id]
                        const litTorches = torches[proj.id] || []
                        const icon = STRUCTURE_ICONS[proj.structure] || '🔺'
                        const structLabel = STRUCTURE_LABELS[proj.structure] || 'Ruins'

                        return (
                            <div
                                key={proj.id}
                                className={`ruin-card ${isOpen ? 'opened' : ''}`}
                                onClick={() => handleCardClick(proj.id)}
                            >
                                {/* Structure header */}
                                <div className="ruin-header">
                                    <div className="ruin-structure">{icon}</div>

                                    {/* Sealed overlay */}
                                    <div className="ruin-sealed">
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{
                                                fontSize: 28, marginBottom: 8,
                                                filter: isOpen ? 'none' : 'grayscale(0.5)',
                                            }}>{icon}</div>
                                            <span>🔒 {structLabel}</span>
                                            <div style={{
                                                fontSize: 10, color: 'rgba(200,160,80,0.3)',
                                                marginTop: 6, fontFamily: "'IM Fell English', serif",
                                                fontStyle: 'italic',
                                            }}>
                                                Click to unseal · Light the torches
                                            </div>
                                        </div>
                                    </div>

                                    {/* Torch indicators */}
                                    <div className="ruin-torches">
                                        {[0, 1, 2].map(i => (
                                            <div
                                                key={i}
                                                className={`torch ${litTorches.includes(i) ? 'lit' : ''}`}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleTorch(proj.id, i)
                                                }}
                                                title="Light this torch"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Project info */}
                                <div className="ruin-info">
                                    <div className="ruin-tag">{proj.tag}</div>
                                    <h3>{proj.title}</h3>
                                    <p>{proj.desc}</p>
                                    <div className="ruin-techs">
                                        {proj.techs.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </div>
                                    <a href={proj.gh} className="ruin-link" target="_blank" rel="noopener noreferrer">
                                        View on GitHub →
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
