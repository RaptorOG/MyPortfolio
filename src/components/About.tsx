import { useEffect, useRef } from 'react';

const timelineItems = [
  {
    year: '2022 – 2024',
    role: 'Software Engineer · Fintech Firm',
    note: '2.2 years in production — real systems, real stakes, financial tech environment',
  },
  {
    year: '2024 · Post-firm',
    role: 'Continued Software Engineering',
    note: 'Months of active development, side projects, and contributions after leaving the firm',
  },
  {
    year: '2024 → Now',
    role: 'Exploration Mode · DevOps + Cloud + Blogging',
    note: 'Tech blogging (94+ articles), LinkedIn content, AI-assisted learning, DevOps contributions — building in public, transitioning deliberately',
    active: true,
  },
];

const stats = [
  { n: '3+', label: 'Years of Practice' },
  { n: '94+', label: 'Blog Articles' },
  { n: '∞', label: 'Still Learning' },
  { n: '2', label: 'Roles: Dev + Ops' },
];

export default function About() {
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
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <section
        ref={sectionRef}
        id="about"
        className="px-5 md:px-10"
        style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '4rem', paddingBottom: '4rem' }}
      >
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
            01 — About
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
            The story so far
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />
        </div>

        <div className="reveal">
          {/* Main grid */}
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-start">
            {/* Left column */}
            <div>
              {[
                <>
                  I'm Jasai — an IT professional and software engineer who spent{' '}
                  <strong style={{ color: 'var(--text)', fontWeight: 500 }}>2.2 years at a fintech firm</strong>, shipping
                  production code and learning what real systems actually look like under pressure.
                </>,
                <>
                  After the firm, I kept building.{' '}
                  <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Several more months of active software engineering</strong>{' '}
                  — projects, contributions, sharpening the craft — before deliberately pivoting my focus. Then came the shift: I
                  pushed myself into{' '}
                  <span style={{ color: 'var(--amber)' }}>exploration mode</span>.
                </>,
                <>
                  That meant: <strong style={{ color: 'var(--text)', fontWeight: 500 }}>tech blogging</strong> to force clarity on
                  what I'm learning, <strong style={{ color: 'var(--text)', fontWeight: 500 }}>LinkedIn content</strong> to build in
                  public, <strong style={{ color: 'var(--text)', fontWeight: 500 }}>leveraging AI tools</strong> to move faster and
                  understand deeper, and simultaneously going hands-on with DevOps — contributing to projects, setting up
                  pipelines, containerising apps, deploying on cloud infrastructure.
                </>,
                <>
                  I'm not a full-fledged DevOps engineer yet — and I'm honest about that. But I bring{' '}
                  <strong style={{ color: 'var(--text)', fontWeight: 500 }}>real software engineering depth</strong>, genuine
                  curiosity, and the kind of learner's energy that makes technical teams better. Still writing code. Still breaking
                  things on purpose.
                </>,
              ].map((content, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.8,
                    color: 'var(--muted2)',
                    marginBottom: '1rem',
                    fontWeight: 300,
                  }}
                >
                  {content}
                </p>
              ))}

              {/* Timeline */}
              <div
                style={{
                  marginTop: '2rem',
                  borderLeft: '1px solid var(--border2)',
                  paddingLeft: '1.25rem',
                }}
              >
                {timelineItems.map((item) => (
                  <div key={item.year} style={{ position: 'relative', paddingBottom: '1.5rem' }}>
                    <span
                      style={{
                        position: 'absolute',
                        left: '-1.4rem',
                        top: '6px',
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: item.active ? 'var(--amber)' : 'var(--bg)',
                        border: '1px solid var(--amber)',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '9px',
                        color: 'var(--amber)',
                        letterSpacing: '0.1em',
                        marginBottom: '4px',
                      }}
                    >
                      {item.year}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)', marginBottom: '3px' }}>
                      {item.role}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--muted2)', lineHeight: 1.5, fontWeight: 300 }}>
                      {item.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div>
              {/* Stats grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1px',
                  background: 'var(--border)',
                  marginBottom: '1.5rem',
                }}
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    style={{ background: 'var(--bg2)', padding: '1.25rem 1rem', textAlign: 'center' }}
                  >
                    <div
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: 'var(--amber)',
                        lineHeight: 1,
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '8px',
                        color: 'var(--muted)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginTop: '4px',
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo placeholder */}
              <div
                className="rounded-sm overflow-hidden mx-auto"
                style={{
                  border: '1px solid var(--border2)',
                  aspectRatio: '4/3',
                  background: 'var(--bg3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '8px',
                  maxWidth: '300px',
                }}
              >
                <img
                  src="YOUR_PHOTO_URL"
                  alt="Jasai Hansda"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div
                  style={{
                    display: 'none',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '2rem',
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--bg4)',
                      border: '1px solid var(--border2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--amber)',
                    }}
                  >
                    JH
                  </div>
                  <span
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '8px',
                      color: 'var(--muted)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    YOUR_PHOTO_URL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
