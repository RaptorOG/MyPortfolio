import { useEffect, useRef } from 'react';
import { skillGroups } from '../data/skills';

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={{ borderTop: '1px solid var(--border)', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div id="skills" className="px-5 md:px-10" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal">
          <p
            className="flex items-center gap-2 mb-2"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '10px',
              color: 'var(--amber)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ width: '18px', height: '1px', background: 'var(--amber)', display: 'inline-block' }} />
            02 — Stack
          </p>
          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: '2rem',
              color: 'var(--text)',
            }}
          >
            What I work with
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />
        </div>

        <div
          className="reveal"
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {skillGroups.map((group) => (
              <div key={group.title}>
                <div
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '9px',
                    color: 'var(--amber)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                    paddingBottom: '6px',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '10px',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        background: 'var(--bg3)',
                        border: '1px solid var(--border2)',
                        color: 'var(--text)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '9px',
              color: 'var(--muted)',
              marginTop: '1.5rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--border)',
            }}
          >
            Stack grows as I build. Check the blog for what I'm currently exploring →
          </p>
        </div>
      </div>
    </div>
  );
}
