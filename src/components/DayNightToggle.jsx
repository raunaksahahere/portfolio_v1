// components/DayNightToggle.jsx — Day/Night mode toggle

import { useCallback } from 'react'

export default function DayNightToggle({ isDark, onToggle }) {
    const toggle = useCallback(() => {
        onToggle(!isDark)
    }, [isDark, onToggle])

    return (
        <div className="dn-toggle" onClick={toggle} title={isDark ? 'Switch to Day' : 'Switch to Night'}>
            <div className="dn-knob">
                {isDark ? '🌙' : '☀️'}
            </div>
        </div>
    )
}
