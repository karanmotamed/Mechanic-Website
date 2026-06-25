import { useState } from 'react';
import { maintenanceItems } from '../data/maintenance';
import PriceDisclaimer from '../components/PriceDisclaimer';

function MaintenanceCard({ item }) {
  const [open, setOpen] = useState(false);
  const priorityColors = {
    critical: '#dc2626',
    important: '#7c3aed',
    moderate: '#0369a1',
  };
  const priorityBadge = {
    critical: 'badge-critical',
    important: 'badge-important',
    moderate: 'badge-moderate',
  };

  return (
    <div className="accordion" style={{ borderLeft: `4px solid ${priorityColors[item.priority] || '#94a3b8'}` }}>
      <button className={`accordion-header ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
        <span className="accordion-icon">{item.icon}</span>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <div style={{ fontWeight: 700 }}>{item.name}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400, marginTop: 2 }}>{item.frequency}</div>
        </div>
        <span className={`badge ${priorityBadge[item.priority]}`} style={{ marginRight: 8 }}>
          {item.priority}
        </span>
        <span className="accordion-chevron">▼</span>
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div className="accordion-content">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 20 }}>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>Frequency</div>
              <div style={{ fontSize: '0.9rem' }}>{item.frequency}</div>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>Typical Cost</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--success)', fontWeight: 700 }}>{item.cost}</div>
            </div>
            <div style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>DIY Difficulty</div>
              <div style={{ fontSize: '0.9rem' }}>{item.diy}</div>
            </div>
          </div>

          <h4 style={{ marginBottom: 8 }}>Why it matters</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '0.95rem' }}>{item.why}</p>

          <h4 style={{ marginBottom: 10 }}>What's involved</h4>
          <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
            {item.steps.map((step, i) => (
              <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step}</li>
            ))}
          </ol>

          <div className="tip-box">
            <strong>💡 Money-saving tip: </strong>{item.tip}
          </div>
        </div>
      </div>
    </div>
  );
}

function MaintenanceSchedule() {
  const intervals = [
    { miles: '3,000–5,000', items: ['Check tire pressure', 'Check oil level', 'Check all fluid levels'] },
    { miles: '5,000–7,500', items: ['Oil change (synthetic)', 'Tire rotation', 'Inspect brakes visually'] },
    { miles: '15,000–30,000', items: ['Replace air filter', 'Replace cabin air filter', 'Inspect belts and hoses'] },
    { miles: '30,000–60,000', items: ['Spark plugs (copper)', 'Brake fluid flush', 'Coolant flush (check manual)'] },
    { miles: '60,000–100,000', items: ['Timing belt (if applicable)', 'Serpentine belt', 'Spark plugs (iridium)', 'Inspect suspension components'] },
    { miles: '100,000+', items: ['Major inspection of all systems', 'Replace timing chain if needed', 'Coolant hoses', 'Transmission service per manual'] },
  ];

  return (
    <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius)', padding: 24, marginBottom: 32 }}>
      <h3 style={{ marginBottom: 4 }}>📅 General Maintenance Schedule</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 20 }}>
        These are general guidelines. Always refer to YOUR owner's manual — it has the exact schedule for your car.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {intervals.map((interval, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--primary)', color: 'white', borderRadius: 8, padding: '8px 12px', minWidth: 120, textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>
              {interval.miles}<br/>miles
            </div>
            <ul style={{ flex: 1, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {interval.items.map((item, j) => (
                <li key={j} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--success)', fontWeight: 700 }}>→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Maintenance() {
  const [filter, setFilter] = useState('all');
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'critical', label: '🔴 Critical' },
    { id: 'important', label: '🟣 Important' },
    { id: 'moderate', label: '🔵 Moderate' },
  ];

  const filtered = filter === 'all' ? maintenanceItems : maintenanceItems.filter(i => i.priority === filter);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">📋 Maintenance Guide</h1>
        <p className="page-subtitle">
          What your car actually needs, when it needs it, and how much it should cost. This is your defense against unnecessary services.
        </p>
      </div>

      <PriceDisclaimer style={{ marginBottom: 16 }} />

      <div className="warning-box">
        <strong>⚠️ The #1 Rule:</strong> Your owner's manual is the REAL service schedule — not the sticker on your windshield, not what the shop recommends, not what a friend says. The manual was written by the engineers who designed your specific car.
      </div>

      <div style={{ marginBottom: 32, marginTop: 32 }}>
        <MaintenanceSchedule />
      </div>

      <h2 style={{ marginBottom: 8 }}>Detailed Service Guides</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: '0.9rem' }}>Click any service to learn what's involved and how to save money.</p>

      <div className="glossary-filters" style={{ marginBottom: 20 }}>
        {filters.map(f => (
          <button key={f.id} className={`filter-btn ${filter === f.id ? 'active' : ''}`} onClick={() => setFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {filtered.map(item => (
          <MaintenanceCard key={item.id} item={item} />
        ))}
      </div>

      <div style={{ marginTop: 40, padding: 24, background: 'linear-gradient(135deg, #064e3b, #065f46)', borderRadius: 'var(--radius)', color: 'white' }}>
        <h3 style={{ marginBottom: 12 }}>🛠️ Must-Have Items to Check Monthly (Free!)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
          {[
            { icon: '🛢️', label: 'Engine Oil', action: 'Check dipstick — amber, between marks' },
            { icon: '💧', label: 'Coolant', action: 'Check reservoir — at FULL line when cold' },
            { icon: '🛑', label: 'Brake Fluid', action: 'Check reservoir — between MIN/MAX' },
            { icon: '⭕', label: 'Tire Pressure', action: 'Should match sticker on door jamb' },
            { icon: '💡', label: 'Lights', action: 'Walk around and check all lights work' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{item.action}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
