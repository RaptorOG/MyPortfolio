import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';

export default function Projects() {
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
    <div ref={sectionRef} style={{ borderTop: '1px solid var(--border)' }}>
      <section id="projects" className="px-5 md:px-10" style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '4rem', paddingBottom: '4rem' }}>
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
            03 — Work
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
            Things I've built
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />
        </div>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1px',
            background: 'var(--border)',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group"
              style={{
                background: 'var(--bg2)',
                padding: '1.5rem',
                transition: 'background 0.18s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
            >
              {/* Featured project has badge on mobile too */}
              <div className="flex flex-col gap-4">
                {project.featured && project.badge && (
                  <span
                    className="self-start md:hidden"
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '8px',
                      padding: '3px 8px',
                      borderRadius: '2px',
                      background: 'var(--green-dim)',
                      border: '1px solid var(--green)',
                      color: 'var(--green)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {project.badge}
                  </span>
                )}

                <div>
                  <div
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '9px',
                      color: 'var(--muted)',
                      marginBottom: '0.75rem',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {project.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      lineHeight: 1.25,
                      color: 'var(--text)',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--muted2)',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                      fontWeight: 300,
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '8px',
                          padding: '3px 7px',
                          borderRadius: '2px',
                          background: 'var(--bg3)',
                          border: '1px solid var(--border)',
                          color: 'var(--muted)',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '10px',
                          color: 'var(--amber)',
                          textDecoration: 'none',
                          letterSpacing: '0.06em',
                          transition: 'color 0.15s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber2)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--amber)')}
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>

                {/* Badge on desktop for featured */}
                {project.featured && project.badge && (
                  <span
                    className="hidden md:block"
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '9px',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      background: 'var(--green-dim)',
                      border: '1px solid var(--green)',
                      color: 'var(--green)',
                      letterSpacing: '0.06em',
                      whiteSpace: 'nowrap',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {project.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
