import { useState, useEffect } from 'react';
import Home from './pages/Home';
import CarBasics from './pages/CarBasics';
import Maintenance from './pages/Maintenance';
import Scams from './pages/Scams';
import Costs from './pages/Costs';
import Glossary from './pages/Glossary';
import Quiz from './pages/Quiz';
import './App.css';

const PAGES = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'basics', label: 'Car Basics', icon: '🔧' },
  { id: 'maintenance', label: 'Maintenance', icon: '📋' },
  { id: 'scams', label: 'Scams & Red Flags', icon: '🚨' },
  { id: 'costs', label: 'Cost Estimates', icon: '💰' },
  { id: 'glossary', label: 'Glossary', icon: '📖' },
  { id: 'quiz', label: 'Take the Quiz', icon: '🎯' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem('progress') || '{}'); } catch { return {}; }
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('progress', JSON.stringify(progress));
  }, [progress]);

  const markVisited = (pageId) => {
    setProgress(p => ({ ...p, [pageId]: true }));
  };

  const navigate = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    markVisited(pageId);
    window.scrollTo(0, 0);
  };

  const visitedCount = Object.keys(progress).filter(k => k !== 'home').length;
  const totalPages = PAGES.length - 1;

  const pageProps = { navigate, darkMode };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <nav className="navbar">
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => navigate('home')}>
            <span className="logo-icon">🚗</span>
            <span className="logo-text">CarSmart</span>
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {PAGES.filter(p => p.id !== 'home').map(page => (
              <button
                key={page.id}
                className={`nav-link ${currentPage === page.id ? 'active' : ''}`}
                onClick={() => navigate(page.id)}
              >
                <span className="nav-icon">{page.icon}</span>
                <span>{page.label}</span>
                {progress[page.id] && <span className="visited-dot">✓</span>}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <div className="progress-badge" title={`${visitedCount} of ${totalPages} sections visited`}>
              {visitedCount}/{totalPages}
            </div>
            <button className="dark-toggle" onClick={() => setDarkMode(d => !d)} title="Toggle dark mode">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <div className="nav-progress">
          <div className="nav-progress-bar" style={{ width: `${(visitedCount / totalPages) * 100}%` }} />
        </div>
      </nav>

      <main className="main-content">
        {currentPage === 'home' && <Home {...pageProps} progress={progress} visitedCount={visitedCount} totalPages={totalPages} />}
        {currentPage === 'basics' && <CarBasics {...pageProps} />}
        {currentPage === 'maintenance' && <Maintenance {...pageProps} />}
        {currentPage === 'scams' && <Scams {...pageProps} />}
        {currentPage === 'costs' && <Costs {...pageProps} />}
        {currentPage === 'glossary' && <Glossary {...pageProps} />}
        {currentPage === 'quiz' && <Quiz {...pageProps} />}
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>🚗 <strong>CarSmart</strong> — Empowering you to understand your vehicle</p>
          <p className="footer-sub">Price estimates are for the US market. Always consult your owner's manual and get multiple quotes for major repairs.</p>
        </div>
      </footer>
    </div>
  );
}
