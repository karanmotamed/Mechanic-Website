import { useState, useMemo } from 'react';
import { glossaryTerms, categories } from '../data/glossary';

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchSearch = search === '' ||
        term.term.toLowerCase().includes(search.toLowerCase()) ||
        term.definition.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === 'All' || term.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  const highlight = (text) => {
    if (!search) return text;
    const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i} style={{ background: '#fde047', borderRadius: 2, padding: '0 2px' }}>{part}</mark> : part
    );
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">📖 Car Glossary</h1>
        <p className="page-subtitle">
          {glossaryTerms.length} car terms explained in plain English. Search for any word a mechanic uses and understand exactly what they mean.
        </p>
      </div>

      <div className="tip-box" style={{ marginBottom: 24 }}>
        <strong>Pro move:</strong> When a mechanic mentions a part you don't recognize, look it up here before agreeing to the repair. Understanding what it is helps you verify whether it actually needs fixing.
      </div>

      {/* Search */}
      <div className="glossary-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search terms or definitions..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          autoFocus
        />
      </div>

      {/* Category filters */}
      <div className="glossary-filters">
        <button
          className={`filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => setActiveCategory('All')}
        >
          All ({glossaryTerms.length})
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat} ({glossaryTerms.filter(t => t.category === cat).length})
          </button>
        ))}
      </div>

      {/* Results count */}
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 8 }}>
        {filtered.length === glossaryTerms.length
          ? `Showing all ${glossaryTerms.length} terms`
          : `${filtered.length} term${filtered.length !== 1 ? 's' : ''} found`}
      </p>

      {/* Terms list */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0 20px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 48, color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 8 }}>🔍</div>
            <p>No terms found for "{search}"</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); }} style={{ marginTop: 12, color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', border: 'none', background: 'none', cursor: 'pointer' }}>
              Clear search
            </button>
          </div>
        ) : (
          filtered.map((term, i) => (
            <div key={i} className="glossary-term">
              <div>
                <span className="term-name">{highlight(term.term)}</span>
                <span className="term-category">{term.category}</span>
              </div>
              <p className="term-definition">{highlight(term.definition)}</p>
            </div>
          ))
        )}
      </div>

      <div style={{ marginTop: 32, padding: 24, background: 'var(--bg-secondary)', borderRadius: 'var(--radius)' }}>
        <h3 style={{ marginBottom: 12 }}>🗣️ What to Say When You Don't Know a Term</h3>
        <ul className="check-list">
          <li>"Can you explain that in simple terms? What does that part actually do?"</li>
          <li>"Can you show me on a diagram where that part is located?"</li>
          <li>"What happens if I don't fix this right now?"</li>
          <li>"Is this the same as what my owner's manual calls [X]?"</li>
          <li>"Can you write down the technical name so I can research it?"</li>
        </ul>
        <p style={{ marginTop: 12, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Any good mechanic will be happy to explain. If they seem annoyed by questions, that's a red flag.
        </p>
      </div>
    </div>
  );
}
