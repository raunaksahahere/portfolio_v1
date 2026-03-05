// sections/HieroglyphSkills.jsx — Interactive hieroglyph skill system with inline tech icons

import { SKILLS } from '../data'

export default function HieroglyphSkills() {
  return (
    <section id="skills" className="section skills-section">
      {/* Background hieroglyph watermark */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', overflow: 'hidden',
      }}>
        <div style={{
          fontSize: 'clamp(200px, 40vw, 500px)',
          opacity: 0.02,
          color: 'var(--gold)',
          lineHeight: 1,
        }}>𓂀</div>
      </div>

      <div className="section-inner reveal">
        <div className="hieroglyph-divider">𓁹 𓏏 𓎛 𓏏 𓁹</div>
        <h2 className="section-title">Ancient Wisdom</h2>
        <p className="section-subtitle">Each hieroglyph holds a skill — with the technologies that power it</p>

        <div className="skill-list">
          {SKILLS.map((skill, i) => (
            <div key={i} className="skill-row">
              {/* Left: Glyph + Name + Description */}
              <div className="skill-identity">
                <div className="skill-glyph">{skill.glyph}</div>
                <div className="skill-meta">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-desc">{skill.desc}</div>
                </div>
              </div>

              {/* Right: Tech icons */}
              <div className="skill-techs">
                {skill.techs.map((tech, j) => (
                  <div key={j} className="tech-chip-v2" title={tech.label}>
                    <img
                      src={tech.icon.startsWith('local:') ? tech.icon.slice(6) : `https://skillicons.dev/icons?i=${tech.icon}`}
                      alt={tech.label}
                      width={28}
                      height={28}
                      loading="lazy"
                    />
                    <span className="tech-label-v2">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 900px;
          margin: 0 auto;
        }

        .skill-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid rgba(200, 149, 42, 0.1);
          border-radius: 14px;
          transition: all 0.4s var(--ease-smooth);
        }

        .skill-row:hover {
          border-color: rgba(200, 149, 42, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 30px rgba(200, 149, 42, 0.05);
          transform: translateY(-2px);
        }

        .skill-identity {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
          min-width: 260px;
        }

        .skill-glyph {
          font-size: 36px;
          filter: drop-shadow(0 0 0 transparent);
          transition: filter 0.4s ease, transform 0.3s var(--ease-bounce);
          flex-shrink: 0;
          width: 48px;
          text-align: center;
        }

        .skill-row:hover .skill-glyph {
          filter: drop-shadow(0 0 15px rgba(240, 200, 80, 0.6));
          transform: scale(1.15);
        }

        .skill-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .skill-name {
          font-family: 'Cinzel', serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--gold-l);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skill-desc {
          font-family: 'IM Fell English', serif;
          font-style: italic;
          font-size: 12px;
          color: var(--text-dim);
        }

        .skill-techs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-end;
        }

        .tech-chip-v2 {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px 6px 6px;
          background: rgba(200, 149, 42, 0.06);
          border: 1px solid rgba(200, 149, 42, 0.12);
          border-radius: 10px;
          transition: all 0.3s ease;
          cursor: default;
        }

        .tech-chip-v2:hover {
          background: rgba(200, 149, 42, 0.12);
          border-color: rgba(200, 149, 42, 0.3);
          transform: translateY(-2px);
        }

        .tech-chip-v2 img {
          border-radius: 4px;
          flex-shrink: 0;
        }

        .tech-label-v2 {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: var(--sand-2);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .skill-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .skill-identity {
            min-width: auto;
          }
          .skill-techs {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  )
}
