// components/ScarabGuide.jsx — Floating AI scarab beetle companion

import { useState, useEffect } from 'react'
import { SCARAB_MESSAGES } from '../data'

export default function ScarabGuide({ currentSection }) {
    const [showBubble, setShowBubble] = useState(false)
    const [message, setMessage] = useState(SCARAB_MESSAGES.intro)
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        // Update message based on current section
        const msg = SCARAB_MESSAGES[currentSection] || SCARAB_MESSAGES.intro
        if (msg !== message) {
            setMessage(msg)
            setDismissed(false)
            setShowBubble(true)
            // Auto-hide after 6 seconds
            const t = setTimeout(() => setShowBubble(false), 6000)
            return () => clearTimeout(t)
        }
    }, [currentSection])

    const toggleBubble = () => {
        if (dismissed) {
            setDismissed(false)
            setShowBubble(true)
        } else {
            setShowBubble(!showBubble)
            if (showBubble) setDismissed(true)
        }
    }

    return (
        <div className="scarab-guide">
            <div className={`scarab-bubble ${showBubble && !dismissed ? 'visible' : ''}`}>
                {message}
            </div>
            <div className="scarab-icon" onClick={toggleBubble} title="Scarab Guide">
                𓆣
            </div>
        </div>
    )
}
