interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center p-8"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="rounded-sm p-10 max-w-[460px] w-full text-center"
        style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border2)',
        }}
      >
        <h3
          className="text-2xl font-extrabold mb-2"
          style={{ fontFamily: 'var(--ff-display, Syne, sans-serif)', color: 'var(--text)' }}
        >
          Jasai Hansda
        </h3>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--muted2)', fontWeight: 300 }}>
          Software Engineer → DevOps &amp; Cloud
          <br />
          Drop your resume PDF link here once ready. For now — reach out directly and I'll send it your way.
        </p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <a
            href="YOUR_RESUME_PDF_URL"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '11px 24px',
              background: 'var(--amber)',
              color: '#fff',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'background 0.18s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--amber2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--amber)')}
          >
            Download PDF
          </a>
          <a
            href="mailto:YOUR_EMAIL"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '11px 24px',
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--border2)',
              borderRadius: '2px',
              textDecoration: 'none',
              transition: 'border-color 0.18s, color 0.18s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--amber)';
              e.currentTarget.style.color = 'var(--amber)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border2)';
              e.currentTarget.style.color = 'var(--text)';
            }}
          >
            Request via Email
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-5 block w-full text-center transition-colors"
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '10px',
            color: 'var(--muted)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
