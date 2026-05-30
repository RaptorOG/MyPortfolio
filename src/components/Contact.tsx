import { useEffect, useRef } from 'react';
import { contactLinks } from '../data/contact';

export default function Contact() {
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
      <section id="contact" className="px-5 md:px-10" style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '4rem', paddingBottom: '4rem' }}>
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
            05 — Contact
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
            Let's work together
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />
        </div>

        <div className="reveal grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Left — copy */}
          <div>
            {[
              <>
                I'm <strong style={{ color: 'var(--text)', fontWeight: 500 }}>open to DevOps and Cloud engineering roles</strong> —
                full-time or contract. I bring software engineering depth from fintech, and I'm actively building infrastructure
                expertise to match.
              </>,
              <>
                Also <strong style={{ color: 'var(--text)', fontWeight: 500 }}>available for freelance</strong> — web apps,
                automation scripts, deployment pipelines, technical content, or any technical challenge that needs someone who'll
                actually figure it out.
              </>,
              <>No formal cover letters. Just reach out, tell me what you're working on, and let's see if we're a fit.</>,
            ].map((content, i) => (
              <p
                key={i}
                style={{
                  fontSize: '14px',
                  color: 'var(--muted2)',
                  lineHeight: 1.8,
                  marginBottom: '0.9rem',
                  fontWeight: 300,
                }}
              >
                {content}
              </p>
            ))}
          </div>

          {/* Right — contact links */}
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
                background: 'var(--border)',
                border: '1px solid var(--border)',
              }}
            >
              {contactLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    textDecoration: 'none',
                    background: 'var(--bg2)',
                    transition: 'background 0.16s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                      background: 'var(--bg3)',
                      border: '1px solid var(--border2)',
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '10px',
                      color: 'var(--amber)',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '8px',
                        color: 'var(--muted)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '2px',
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.value}
                    </div>
                  </div>
                  <span style={{ color: 'var(--muted)', fontSize: '14px', flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
