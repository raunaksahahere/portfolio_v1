// components/SandstormTransition.jsx — Between-section sandstorm effect

import { useEffect, useRef } from 'react'

export default function SandstormTransition({ active }) {
    const canvasRef = useRef(null)
    const animRef = useRef(null)
    const particlesRef = useRef([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Init particles
        particlesRef.current = Array.from({ length: 120 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 1 + Math.random() * 3,
            speedX: 2 + Math.random() * 6,
            speedY: -1 + Math.random() * 2,
            opacity: 0.2 + Math.random() * 0.4,
        }))

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particlesRef.current.forEach(p => {
                p.x += p.speedX
                p.y += p.speedY
                if (p.x > canvas.width) p.x = -5
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(200, 149, 42, ${p.opacity})`
                ctx.fill()
            })
            animRef.current = requestAnimationFrame(animate)
        }

        if (active) {
            animate()
        }

        return () => {
            window.removeEventListener('resize', resize)
            if (animRef.current) cancelAnimationFrame(animRef.current)
        }
    }, [active])

    return (
        <div className={`sandstorm ${active ? 'active' : ''}`}>
            <canvas ref={canvasRef} style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
            }} />
        </div>
    )
}
