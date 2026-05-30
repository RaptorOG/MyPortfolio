export default function Footer() {
  return (
    <footer
      className="px-5 py-6"
      style={{
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        fontFamily: '"Space Mono", monospace',
        fontSize: '9px',
        color: 'var(--muted)',
        letterSpacing: '0.06em',
        lineHeight: 1.6,
      }}
    >
      <span style={{ color: 'var(--amber)', fontWeight: 400 }}>Jasai Hansda</span>
      <span className="hidden sm:inline">
        {' '}
        · Software Engineer → DevOps &amp; Cloud · Always in exploration mode
      </span>
      <span className="sm:hidden">
        <br />
        Software Engineer → DevOps &amp; Cloud
        <br />
        Always in exploration mode
      </span>
      <span className="cursor">_</span>
    </footer>
  );
}
