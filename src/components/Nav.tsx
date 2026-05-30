import { useState } from 'react';
import { FileText, Sun, Moon, Menu, X } from 'lucide-react';

interface NavProps {
  onResumeClick: () => void;
  activeSection: string;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Stack' },
  { href: '#projects', label: 'Work' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav({ onResumeClick, activeSection, theme, onThemeToggle }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLight = theme === 'light';
  const navBg = isLight ? 'rgba(250,250,249,0.95)' : 'rgba(9,9,10,0.95)';

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-[200] h-[54px] flex items-center px-5 md:px-10"
        style={{
          borderBottom: '1px solid var(--border)',
          background: navBg,
          backdropFilter: 'blur(12px)',
        }}
      >
        <a
          href="#"
          className="mr-auto"
          style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '13px',
            color: 'var(--amber)',
            letterSpacing: '0.04em',
            textDecoration: 'none',
          }}
        >
          <span style={{ color: 'var(--muted)' }}>~/</span>jasai.dev
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '10px',
                    color: isActive ? 'var(--amber)' : 'var(--muted)',
                    textDecoration: 'none',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    transition: 'color 0.18s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--amber)')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive ? 'var(--amber)' : 'var(--muted)')
                  }
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-2 ml-4 md:ml-6">
          {/* Theme toggle */}
          <button
            onClick={onThemeToggle}
            className="flex items-center justify-center w-8 h-8 rounded-sm transition-colors"
            style={{
              background: 'transparent',
              border: `1px solid ${isLight ? 'rgba(0,0,0,0.15)' : 'var(--border2)'}`,
              color: 'var(--muted)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--amber)';
              e.currentTarget.style.color = 'var(--amber)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isLight ? 'rgba(0,0,0,0.15)' : 'var(--border2)';
              e.currentTarget.style.color = 'var(--muted)';
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          {/* Resume button - desktop */}
          <button
            onClick={onResumeClick}
            className="hidden md:flex items-center gap-2 rounded-sm transition-colors"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '7px 16px',
              border: `1px solid ${isLight ? 'rgba(0,0,0,0.2)' : 'var(--border2)'}`,
              color: 'var(--text)',
              background: 'transparent',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--amber)';
              e.currentTarget.style.color = 'var(--amber)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isLight ? 'rgba(0,0,0,0.2)' : 'var(--border2)';
              e.currentTarget.style.color = 'var(--text)';
            }}
          >
            <FileText size={12} />
            Resume
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-sm transition-colors"
            style={{
              background: 'transparent',
              border: `1px solid ${isLight ? 'rgba(0,0,0,0.15)' : 'var(--border2)'}`,
              color: 'var(--muted)',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div
          className="fixed top-[54px] inset-x-0 z-[199] md:hidden"
          style={{
            background: navBg,
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div className="flex flex-col py-3">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '11px',
                    color: isActive ? 'var(--amber)' : 'var(--muted)',
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '12px 20px',
                    transition: 'background 0.18s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {link.label}
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileOpen(false);
                onResumeClick();
              }}
              className="flex items-center gap-2 mx-5 mt-2 rounded-sm transition-colors"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '10px 16px',
                border: `1px solid ${isLight ? 'rgba(0,0,0,0.2)' : 'var(--border2)'}`,
                color: 'var(--text)',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              <FileText size={12} />
              Resume
            </button>
          </div>
        </div>
      )}
    </>
  );
}
