import { useEffect, useRef } from 'react';
import { blogPosts, blogUrl } from '../data/blog';

export default function Blog() {
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
      <div id="blog" className="px-5 md:px-10" style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            04 — Writing
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
            Demystifying Tech
          </h2>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '2rem' }} />
        </div>

        <p
          className="reveal"
          style={{
            fontSize: '14px',
            color: 'var(--muted2)',
            maxWidth: '520px',
            lineHeight: 1.75,
            marginBottom: '2rem',
            fontWeight: 300,
          }}
        >
          I write to learn. 94+ articles on{' '}
          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--amber)', textDecoration: 'none' }}
          >
            Hashnode
          </a>{' '}
          — DevOps, cloud, Python, Docker, and whatever I'm currently figuring out. No fluff, just honest walkthroughs
          from someone in the middle of the journey.
        </p>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1px',
            background: 'var(--border)',
          }}
        >
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--bg2)',
                padding: '1.25rem',
                textDecoration: 'none',
                display: 'block',
                transition: 'background 0.18s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
            >
              <div
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '8px',
                  color: 'var(--amber)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                {post.category}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  lineHeight: 1.45,
                  marginBottom: '0.5rem',
                }}
              >
                {post.title}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--muted2)',
                  lineHeight: 1.6,
                  marginBottom: '0.75rem',
                  fontWeight: 300,
                }}
              >
                {post.excerpt}
              </div>
              <div
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '9px',
                  color: 'var(--muted)',
                }}
              >
                {post.date}
              </div>
            </a>
          ))}

          {/* View all card */}
          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent',
              border: '1px dashed var(--border2)',
              padding: '1.25rem',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'border-color 0.18s, background 0.18s',
              minHeight: '120px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--amber)';
              e.currentTarget.style.background = 'var(--amber-dim)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border2)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '9px',
                color: 'var(--amber)',
                letterSpacing: '0.1em',
                textAlign: 'center',
              }}
            >
              View all 94+ articles →
            </span>
            <small
              style={{
                fontSize: '10px',
                color: 'var(--muted)',
                fontFamily: '"Space Mono", monospace',
              }}
            >
              jasaiblogs.hashnode.dev
            </small>
          </a>
        </div>
      </div>
    </div>
  );
}
