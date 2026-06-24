export default function Home({ navigate, progress, visitedCount, totalPages }) {
  const sections = [
    {
      id: 'basics',
      icon: '🔧',
      title: 'Car Basics',
      desc: 'Understand how your engine, transmission, brakes, and other systems actually work — in plain English.',
    },
    {
      id: 'maintenance',
      icon: '📋',
      title: 'Maintenance Guide',
      desc: 'Learn what needs to be done, when to do it, and what it should cost. Stop paying for unnecessary services.',
    },
    {
      id: 'scams',
      icon: '🚨',
      title: 'Scams & Red Flags',
      desc: 'Real examples of upsells and dishonest tactics — plus exactly what to say to protect yourself.',
    },
    {
      id: 'costs',
      icon: '💰',
      title: 'Cost Estimates',
      desc: 'Fair price ranges for common repairs. Know before you go — and spot when you\'re being overcharged.',
    },
    {
      id: 'glossary',
      icon: '📖',
      title: 'Car Glossary',
      desc: 'Searchable dictionary of 45+ car terms explained simply. Never be confused by mechanic jargon again.',
    },
    {
      id: 'quiz',
      icon: '🎯',
      title: 'Test Your Knowledge',
      desc: 'Take an interactive quiz to see how much you\'ve learned and what to watch out for.',
    },
  ];

  const tips = [
    { icon: '📝', text: 'Always get a written estimate before authorizing any work' },
    { icon: '📖', text: 'Your owner\'s manual has the actual maintenance schedule — not what the shop says' },
    { icon: '🔍', text: 'Ask to see old parts they claim to have replaced' },
    { icon: '💬', text: 'Get at least 2 quotes for anything over $200' },
    { icon: '🆓', text: 'Auto parts stores (AutoZone, O\'Reilly) read check engine codes for FREE' },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="hero-section">
        <h1>Don't Get Taken<br /><span className="hero-accent">for a Ride</span></h1>
        <p className="hero-sub">
          Learn car basics so you can walk into any mechanic shop with confidence — and walk out without being ripped off.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('basics')}>
            Start Learning →
          </button>
          <button className="btn-secondary" onClick={() => navigate('scams')}>
            See Common Scams
          </button>
        </div>
      </div>

      {/* Progress */}
      {visitedCount > 0 && (
        <div style={{ background: 'var(--bg-secondary)', padding: '16px 20px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Your progress: <strong style={{ color: 'var(--primary)' }}>{visitedCount} of {totalPages}</strong> sections explored
            {visitedCount === totalPages && ' 🎉 You\'ve completed all sections!'}
          </span>
        </div>
      )}

      {/* Quick tips banner */}
      <div style={{ background: '#fef9c3', borderBottom: '1px solid #fde047', padding: '12px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontWeight: 700, color: '#854d0e', fontSize: '0.85rem', flexShrink: 0 }}>💡 QUICK TIPS:</span>
          {tips.map((t, i) => (
            <span key={i} style={{ fontSize: '0.82rem', color: '#713f12' }}>
              {t.icon} {t.text}
            </span>
          ))}
        </div>
      </div>

      {/* Section cards */}
      <div className="sections-grid">
        {sections.map(s => (
          <button
            key={s.id}
            className="section-card"
            onClick={() => navigate(s.id)}
          >
            <div className="section-card-icon">{s.icon}</div>
            <div className="section-card-title">{s.title}</div>
            <div className="section-card-desc">{s.desc}</div>
            <div className="section-card-cta">
              {progress[s.id] ? '✓ Revisit' : 'Explore'} →
            </div>
          </button>
        ))}
      </div>

      {/* Stats */}
      <div style={{ background: 'var(--bg-secondary)', padding: '48px 20px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 8, fontSize: '1.5rem', fontWeight: 800 }}>Why This Matters</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: 32 }}>Americans spend billions on unnecessary car repairs every year.</p>
          <div className="stats-row" style={{ justifyContent: 'center' }}>
            <div className="stat-item">
              <div className="stat-value">$21B</div>
              <div className="stat-label">Lost to unnecessary car repairs annually</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">$750</div>
              <div className="stat-label">Average overpayment per car owner per year</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">2 min</div>
              <div className="stat-label">Time to swap an air filter yourself</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">$0</div>
              <div className="stat-label">Cost to read a check engine code at AutoZone</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '48px 20px' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Ready to Become Car-Savvy?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
          Start with Car Basics, work through the guides, then test yourself with the quiz.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => navigate('basics')} style={{ background: 'var(--primary)', color: 'white' }}>
            Learn Car Basics →
          </button>
          <button className="btn-primary" onClick={() => navigate('quiz')}>
            Jump to Quiz 🎯
          </button>
        </div>
      </div>
    </div>
  );
}
