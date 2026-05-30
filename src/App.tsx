import { useState, useEffect, useCallback } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { ArrowUp } from 'lucide-react';

const SECTIONS = ['about', 'skills', 'projects', 'blog', 'contact'];

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Theme application
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.style.setProperty('--bg', '#fafaf9');
      root.style.setProperty('--bg2', '#f5f4f2');
      root.style.setProperty('--bg3', '#ebe9e5');
      root.style.setProperty('--bg4', '#e0ded9');
      root.style.setProperty('--text', '#1c1c1e');
      root.style.setProperty('--muted', '#6b6966');
      root.style.setProperty('--muted2', '#525150');
      root.style.setProperty('--border', 'rgba(0,0,0,0.1)');
      root.style.setProperty('--border2', 'rgba(0,0,0,0.18)');
      root.style.setProperty('--green', '#2a9d5c');
      root.style.setProperty('--green-dim', 'rgba(42,157,92,0.1)');
      root.style.setProperty('--amber', '#c77a20');
      root.style.setProperty('--amber2', '#a86310');
      root.style.setProperty('--amber-dim', 'rgba(199,122,32,0.1)');
    } else {
      root.classList.remove('light');
      root.style.setProperty('--bg', '#09090a');
      root.style.setProperty('--bg2', '#111113');
      root.style.setProperty('--bg3', '#18181b');
      root.style.setProperty('--bg4', '#1f1f23');
      root.style.setProperty('--text', '#e2e0db');
      root.style.setProperty('--muted', '#6b6966');
      root.style.setProperty('--muted2', '#908d89');
      root.style.setProperty('--border', 'rgba(255,255,255,0.07)');
      root.style.setProperty('--border2', 'rgba(255,255,255,0.13)');
      root.style.setProperty('--green', '#3ddc84');
      root.style.setProperty('--green-dim', 'rgba(61,220,132,0.1)');
      root.style.setProperty('--amber', '#e8a030');
      root.style.setProperty('--amber2', '#f5b84a');
      root.style.setProperty('--amber-dim', 'rgba(232,160,48,0.12)');
    }
  }, [theme]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35, rootMargin: '-54px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowBackToTop(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global scroll reveal (for Hero section children if needed)
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
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
      <Nav
        onResumeClick={() => setResumeOpen(true)}
        activeSection={activeSection}
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />

      <main>
        <Hero onResumeClick={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <Footer />

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        style={{
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '2px',
          background: 'var(--bg2)',
          border: '1px solid var(--border2)',
          color: 'var(--muted)',
          cursor: 'pointer',
          transition: 'border-color 0.18s, color 0.18s, opacity 0.3s, transform 0.3s',
          bottom: '1.25rem',
          right: '1.25rem',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--amber)';
          e.currentTarget.style.color = 'var(--amber)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border2)';
          e.currentTarget.style.color = 'var(--muted)';
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
