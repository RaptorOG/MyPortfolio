interface HeroProps {
  onResumeClick: () => void;
}

const decoLines = [
  'docker build .',
  'kubectl apply -f .',
  'terraform init',
  'git push origin main',
  'ssh ubuntu@ec2',
  'cat /var/log/syslog',
  'npm run deploy',
  'ping 0.0.0.0',
];

export default function Hero({ onResumeClick }: HeroProps) {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
      <section
        className="flex flex-col justify-center relative"
        style={{ minHeight: '100svh', paddingTop: '100px', paddingBottom: '3rem', paddingLeft: '1.25rem', paddingRight: '1.25rem' }}
      >
        <p
          className="anim-up-1 flex items-center gap-2 mb-6 md:mb-8"
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '10px',
            color: 'var(--amber)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ width: '24px', height: '1px', background: 'var(--amber)', display: 'inline-block', flexShrink: 0 }} />
          Software Engineer &amp; DevOps Practitioner
        </p>

        <h1
          className="anim-up-2"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2.8rem, 10vw, 7.5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}
        >
          <span style={{ display: 'block', color: 'var(--text)' }}>Jasai</span>
          <span style={{ display: 'block', color: 'var(--amber)' }}>Hansda.</span>
          <span
            style={{
              display: 'block',
              color: 'var(--muted)',
              fontSize: 'clamp(1.8rem, 7vw, 5rem)',
            }}
          >
            Explorer.
          </span>
        </h1>

        <p
          className="anim-up-3"
          style={{
            maxWidth: '560px',
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--muted2)',
            marginBottom: '1.5rem',
            fontWeight: 300,
          }}
        >
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}>3 years building software</strong> — from fintech production
          systems to cloud infrastructure. Now deep in DevOps and Cloud engineering, documenting everything I learn, and still
          writing code every day. <span className="cursor">_</span>
        </p>

        <div className="anim-up-4 flex flex-wrap gap-2 mb-8">
          <span
            className="pill"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '9px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '5px 10px',
              borderRadius: '2px',
              background: 'var(--green-dim)',
              border: '1px solid var(--green)',
              color: 'var(--green)',
            }}
          >
            Open to DevOps / Cloud Roles
          </span>
          <span
            className="pill"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '9px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '5px 10px',
              borderRadius: '2px',
              background: 'var(--amber-dim)',
              border: '1px solid var(--amber)',
              color: 'var(--amber)',
            }}
          >
            Available for Freelance
          </span>
          <span
            className="pill"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '9px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '5px 10px',
              borderRadius: '2px',
              background: 'transparent',
              border: '1px solid var(--border2)',
              color: 'var(--muted2)',
            }}
          >
            Perpetual Learner
          </span>
        </div>

        <div className="anim-up-5 flex flex-wrap gap-3">
          <a
            href="#projects"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              background: 'var(--amber)',
              color: '#fff',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'background 0.18s, transform 0.12s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--amber2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--amber)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '12px 24px',
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--border2)',
              borderRadius: '2px',
              textDecoration: 'none',
              transition: 'border-color 0.18s, color 0.18s, transform 0.12s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--amber)';
              e.currentTarget.style.color = 'var(--amber)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border2)';
              e.currentTarget.style.color = 'var(--text)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Terminal deco — desktop only */}
        <div
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-right pointer-events-none select-none"
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '11px',
            lineHeight: 2.2,
            color: 'var(--muted)',
            opacity: 0.35,
          }}
        >
          {decoLines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
