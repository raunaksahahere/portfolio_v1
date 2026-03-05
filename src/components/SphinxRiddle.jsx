// components/SphinxRiddle.jsx — Hidden Sphinx Easter Egg

import { useState, useCallback, useRef, useEffect } from 'react'

export default function SphinxRiddle() {
    const [showModal, setShowModal] = useState(false)
    const [answer, setAnswer] = useState('')
    const [status, setStatus] = useState('idle') // idle, wrong, correct
    const inputRef = useRef(null)

    useEffect(() => {
        if (showModal && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300)
        }
    }, [showModal])

    const checkAnswer = useCallback(() => {
        const normalized = answer.trim().toLowerCase()
        if (normalized === 'b#' || normalized === 'b sharp' || normalized === 'bsharp') {
            setStatus('correct')
        } else if (answer.trim().length > 0) {
            setStatus('wrong')
            setTimeout(() => setStatus('idle'), 800)
        }
    }, [answer])

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter') checkAnswer()
        if (e.key === 'Escape') { setShowModal(false); setStatus('idle'); setAnswer('') }
    }, [checkAnswer])

    const close = () => {
        setShowModal(false)
        setStatus('idle')
        setAnswer('')
    }

    return (
        <>
            {/* Sphinx trigger — subtle icon */}
            <div
                className="sphinx-trigger"
                onClick={() => setShowModal(true)}
                title="The Sphinx guards a secret..."
            >
                🦁
            </div>

            {/* Riddle modal */}
            {showModal && (
                <div className="sphinx-modal" onClick={(e) => {
                    if (e.target === e.currentTarget) close()
                }}>
                    <button className="sphinx-close" onClick={close}>✕</button>

                    <div className="sphinx-content">
                        {status !== 'correct' ? (
                            <>
                                <div style={{ fontSize: 48, marginBottom: 12 }}>🦁</div>
                                <h3>The Sphinx Speaks</h3>
                                <p className="riddle">
                                    "I am neither ancient nor forgotten,<br />
                                    yet I was born from the mind of a builder.<br />
                                    What language did you create?"
                                </p>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className={`sphinx-input ${status}`}
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Speak the name..."
                                    autoComplete="off"
                                />
                                <p className="sphinx-hint">
                                    Hint: It sounds like a musical note.
                                </p>
                            </>
                        ) : (
                            <div className="sphinx-reveal">
                                <div style={{
                                    fontSize: 48, marginBottom: 16,
                                    animation: 'floatArtifact 2s ease-in-out infinite',
                                }}>
                                    ✨
                                </div>
                                <h3>The Secret Chamber Opens!</h3>
                                <div style={{
                                    marginTop: 16,
                                    padding: 20,
                                    background: 'rgba(200,149,42,0.08)',
                                    borderRadius: 12,
                                    border: '1px solid rgba(200,149,42,0.2)',
                                }}>
                                    <div style={{
                                        fontFamily: "'Cinzel Decorative', serif",
                                        fontSize: 22, fontWeight: 700,
                                        color: 'var(--gold-l)', marginBottom: 8,
                                    }}>
                                        B# Programming Language
                                    </div>
                                    <p>
                                        A complete programming language created from scratch — with its own
                                        interpreter, package manager, and VS Code extension. This is the artifact
                                        that defines a builder.
                                    </p>
                                    <div style={{
                                        display: 'flex', gap: 8, justifyContent: 'center',
                                        marginTop: 16, flexWrap: 'wrap',
                                    }}>
                                        {['Interpreter', 'Package Manager', 'VS Code Extension', 'Custom Syntax'].map((t, i) => (
                                            <span key={i} style={{
                                                padding: '4px 12px', borderRadius: 20,
                                                background: 'rgba(200,149,42,0.12)',
                                                border: '1px solid rgba(200,149,42,0.2)',
                                                fontSize: 11, color: 'var(--gold)',
                                            }}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <button onClick={close} style={{
                                    marginTop: 20, padding: '10px 28px',
                                    background: 'rgba(200,149,42,0.15)',
                                    border: '1px solid rgba(200,149,42,0.3)',
                                    borderRadius: 10, cursor: 'pointer',
                                    fontFamily: "'Cinzel', serif", fontSize: 12,
                                    color: 'var(--gold-l)', letterSpacing: 2,
                                    textTransform: 'uppercase',
                                    transition: 'all 0.3s ease',
                                }}>
                                    Close Chamber
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
