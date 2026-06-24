import { useState } from 'react';
import { scams, generalRedFlags, protectYourself } from '../data/scams';

const severityConfig = {
  critical: { color: '#dc2626', bg: '#fef2f2', label: 'CRITICAL', badge: 'badge-critical' },
  high: { color: '#c2410c', bg: '#fff7ed', label: 'HIGH RISK', badge: 'badge-high' },
  medium: { color: '#a16207', bg: '#fefce8', label: 'MEDIUM RISK', badge: 'badge-medium' },
  low: { color: '#16a34a', bg: '#f0fdf4', label: 'LOW RISK', badge: 'badge-low' },
};

function ScamCard({ scam }) {
  const [open, setOpen] = useState(false);
  const sev = severityConfig[scam.severity] || severityConfig.medium;

  return (
    <div className="accordion" style={{ borderLeft: `4px solid ${sev.color}` }}>
      <button className={`accordion-header ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
        <span className="accordion-icon">{scam.icon}</span>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <div style={{ fontWeight: 700 }}>{scam.title}</div>
          <div style={{ fontSize: '0.8rem', color: sev.color, fontWeight: 600, marginTop: 2 }}>
            Potential savings: {scam.averageSavings}
          </div>
        </div>
        <span className={`badge ${sev.badge}`} style={{ marginRight: 8 }}>{sev.label}</span>
        <span className="accordion-chevron">▼</span>
      </button>

      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div className="accordion-content">
          <div className="danger-box">
            <strong>What they tell you:</strong><br />
            <em style={{ color: 'var(--text-muted)' }}>{scam.whatTheyTell}</em>
          </div>

          <div className="success-box" style={{ marginTop: 0 }}>
            <strong>The reality:</strong><br />
            <span style={{ color: 'var(--text-muted)' }}>{scam.reality}</span>
          </div>

          <h4 style={{ marginBottom: 10 }}>🚩 Red Flags</h4>
          <ul className="red-list" style={{ marginBottom: 16 }}>
            {scam.redFlags.map((flag, i) => (
              <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{flag}</li>
            ))}
          </ul>

          <div className="tip-box">
            <strong>💬 What to say: </strong>{scam.whatToSay}
          </div>

          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Potential savings by declining:</span>
            <strong style={{ color: 'var(--success)' }}>{scam.averageSavings}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceComparison() {
  const comparisons = [
    { service: 'Oil Change (Synthetic)', fair: '$65–$90', scam: '$130–$180', savings: '$65+' },
    { service: 'Air Filter Replacement', fair: '$20–$35 total', scam: '$60–$100', savings: '$40–$65' },
    { service: 'Front Brake Pads', fair: '$150–$250', scam: '$400–$600', savings: '$250+' },
    { service: 'Cabin Air Filter', fair: '$20–$40 total', scam: '$70–$120', savings: '$50–$80' },
    { service: 'Battery (installed)', fair: '$120–$200', scam: '$300–$400', savings: '$150+' },
  ];

  return (
    <div style={{ margin: '32px 0' }}>
      <h3 style={{ marginBottom: 16 }}>💰 Fair Price vs. Scam Price</h3>
      <div style={{ overflowX: 'auto' }}>
        <table className="price-table">
          <thead>
            <tr>
              <th>Service</th>
              <th style={{ color: 'var(--success)' }}>✓ Fair Price</th>
              <th style={{ color: 'var(--danger)' }}>⚠️ Watch Out</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{row.service}</td>
                <td className="fair-price">{row.fair}</td>
                <td className="warning-price">{row.scam}</td>
                <td style={{ color: 'var(--success)', fontWeight: 700 }}>{row.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Scams() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? scams : scams.filter(s => s.severity === filter);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">🚨 Scams & Red Flags</h1>
        <p className="page-subtitle">
          Real tactics used by dishonest shops — and exactly how to protect yourself. Knowledge is your best defense.
        </p>
      </div>

      <div className="danger-box" style={{ marginBottom: 24 }}>
        <strong>Important:</strong> Most mechanics are honest professionals. But some shops — especially chain quick-lube shops — use commission-based sales tactics that incentivize unnecessary upsells. Knowing these tactics protects you even at honest shops.
      </div>

      <PriceComparison />

      <h2 style={{ marginBottom: 8 }}>Common Scams — Decoded</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: '0.9rem' }}>Click any scam to see what they say, the reality, and what to do.</p>

      <div className="glossary-filters" style={{ marginBottom: 20 }}>
        {[
          { id: 'all', label: 'All Scams' },
          { id: 'critical', label: '🔴 Critical' },
          { id: 'high', label: '🟠 High Risk' },
          { id: 'medium', label: '🟡 Medium Risk' },
          { id: 'low', label: '🟢 Low Risk' },
        ].map(f => (
          <button key={f.id} className={`filter-btn ${filter === f.id ? 'active' : ''}`} onClick={() => setFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {filtered.map(scam => (
          <ScamCard key={scam.id} scam={scam} />
        ))}
      </div>

      <div style={{ marginTop: 40 }}>
        <h3 style={{ marginBottom: 16 }}>🚩 Universal Red Flags</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '0.9rem' }}>
          Walk out of any shop that does these things:
        </p>
        <ul className="red-list" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 20 }}>
          {generalRedFlags.map((flag, i) => (
            <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{flag}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: 32, background: 'linear-gradient(135deg, #14532d, #166534)', borderRadius: 'var(--radius)', padding: 24, color: 'white' }}>
        <h3 style={{ marginBottom: 16 }}>🛡️ How to Protect Yourself</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
          {protectYourself.map((tip, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 8, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{tip.icon}</span>
              <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>{tip.tip}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 32, padding: 24, background: 'var(--bg-secondary)', borderRadius: 'var(--radius)' }}>
        <h3 style={{ marginBottom: 12 }}>📝 Printable Mechanic Visit Checklist</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 16 }}>Bring this mental checklist to every shop visit:</p>
        <ul className="check-list">
          <li>Get a written estimate before authorizing work</li>
          <li>Ask what diagnostic code or symptom prompted each recommendation</li>
          <li>Ask for the old part when anything is replaced</li>
          <li>Check your owner's manual for the actual service interval</li>
          <li>Say "I'll think about it" for anything unexpected — don't agree on the spot</li>
          <li>Get a second opinion for any repair over $300</li>
          <li>Pay by credit card (easier to dispute unauthorized charges)</li>
        </ul>
        <button onClick={() => window.print()} style={{ marginTop: 16, padding: '10px 20px', background: 'var(--primary)', color: 'white', borderRadius: 8, fontWeight: 600, fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}>
          🖨️ Print This Page
        </button>
      </div>
    </div>
  );
}
