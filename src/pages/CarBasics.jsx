import { useState } from 'react';
import { carSystems } from '../data/carBasics';

function EngineDiagram() {
  const [hovered, setHovered] = useState(null);
  const parts = [
    { id: 'pistons', label: 'Pistons', x: 200, y: 160, desc: 'Move up and down to create power' },
    { id: 'crankshaft', label: 'Crankshaft', x: 200, y: 260, desc: 'Converts up-down motion to rotation' },
    { id: 'spark', label: 'Spark Plugs', x: 130, y: 100, desc: 'Ignite the fuel-air mixture' },
    { id: 'valves', label: 'Valves', x: 270, y: 100, desc: 'Let air/fuel in, exhaust gases out' },
    { id: 'timing', label: 'Timing Belt', x: 340, y: 200, desc: 'Keeps everything in sync' },
    { id: 'oil', label: 'Oil Pan', x: 200, y: 320, desc: 'Stores engine oil for lubrication' },
  ];
  return (
    <div className="diagram-container">
      <svg viewBox="0 0 480 360" style={{ width: '100%', maxHeight: 300 }}>
        {/* Engine block */}
        <rect x="80" y="80" width="240" height="200" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2"/>
        {/* Cylinders */}
        {[120, 170, 220, 270].map((x, i) => (
          <g key={i}>
            <rect x={x} y="90" width="30" height="120" rx="4" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1"/>
            <rect x={x+5} y="190" width="20" height="20" rx="2" fill="#94a3b8"/>
          </g>
        ))}
        {/* Crankshaft */}
        <rect x="90" y="225" width="220" height="20" rx="6" fill="#64748b"/>
        {/* Oil pan */}
        <rect x="100" y="255" width="200" height="25" rx="6" fill="#475569"/>
        {/* Timing belt */}
        <rect x="330" y="90" width="12" height="160" rx="6" fill="#f59e0b" opacity="0.8"/>
        {/* Tooltips */}
        {parts.map(p => (
          <g key={p.id} style={{ cursor: 'pointer' }}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}>
            <circle cx={p.x} cy={p.y} r="8" fill={hovered === p.id ? '#2563eb' : '#3b82f6'} opacity="0.8"/>
            <text x={p.x} y={p.y - 14} textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="600">{p.label}</text>
            {hovered === p.id && (
              <g>
                <rect x={p.x - 70} y={p.y + 12} width="140" height="28" rx="4" fill="#1e293b"/>
                <text x={p.x} y={p.y + 30} textAnchor="middle" fontSize="8" fill="white">{p.desc}</text>
              </g>
            )}
          </g>
        ))}
      </svg>
      <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 8 }}>
        Hover over the blue dots to learn about each part
      </p>
    </div>
  );
}

function BrakeDiagram() {
  const [step, setStep] = useState(0);
  const steps = [
    { label: 'Press Pedal', desc: 'You push the brake pedal with your foot' },
    { label: 'Master Cylinder', desc: 'Converts pedal pressure into hydraulic pressure in the fluid' },
    { label: 'Brake Lines', desc: 'Fluid travels through lines to each wheel' },
    { label: 'Caliper Squeezes', desc: 'Caliper pushes brake pads against the spinning rotor' },
    { label: 'Friction → Stop', desc: 'Friction between pads and rotor slows the wheel down' },
  ];
  return (
    <div className="diagram-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        <strong style={{ fontSize: '0.9rem' }}>How Brakes Work — Step by Step</strong>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={() => setStep(s => Math.max(0, s-1))} style={{ padding: '4px 10px', borderRadius: 4, border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text)' }}>←</button>
          <button onClick={() => setStep(s => Math.min(steps.length-1, s+1))} style={{ padding: '4px 10px', borderRadius: 4, border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text)' }}>→</button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        {steps.map((s, i) => (
          <button key={i} onClick={() => setStep(i)}
            style={{ padding: '6px 12px', borderRadius: 20, border: `2px solid ${i === step ? '#2563eb' : 'var(--border)'}`, background: i === step ? '#2563eb' : 'var(--bg-card)', color: i === step ? 'white' : 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
            {i+1}. {s.label}
          </button>
        ))}
      </div>
      <div style={{ background: 'var(--bg-card)', borderRadius: 8, padding: 16, borderLeft: '4px solid #2563eb' }}>
        <strong>Step {step+1}: {steps[step].label}</strong>
        <p style={{ color: 'var(--text-muted)', marginTop: 4, fontSize: '0.9rem' }}>{steps[step].desc}</p>
      </div>
    </div>
  );
}

function SystemSection({ system }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <button className={`accordion-header ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
        <span className="accordion-icon">{system.icon}</span>
        <span style={{ flex: 1 }}>{system.name}</span>
        <span className="accordion-chevron">▼</span>
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div className="accordion-content">
          <div className="tip-box" style={{ marginBottom: 16 }}>
            <strong>The analogy: </strong>{system.analogy}
          </div>

          <p style={{ marginBottom: 16, color: 'var(--text-muted)' }}>{system.summary}</p>

          {system.id === 'engine' && <EngineDiagram />}
          {system.id === 'brakes' && <BrakeDiagram />}

          <h4 style={{ marginBottom: 12, marginTop: 16 }}>How it works</h4>
          <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: '0.95rem' }}>{system.howItWorks}</p>

          <h4 style={{ marginBottom: 12 }}>Key Parts</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10, marginBottom: 20 }}>
            {system.parts.map(part => (
              <div key={part.name} style={{ background: 'var(--bg-secondary)', borderRadius: 8, padding: '12px 14px' }}>
                <strong style={{ fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>{part.name}</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{part.description}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            <div>
              <h4 style={{ marginBottom: 10 }}>⚠️ Warning Lights</h4>
              <ul className="check-list" style={{ gap: 6 }}>
                {system.warningLights.map((w, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{w}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: 10 }}>🔍 Warning Symptoms</h4>
              <ul className="red-list" style={{ gap: 6 }}>
                {system.warningSymptoms.map((s, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CarBasics() {
  const [activeSystem, setActiveSystem] = useState(null);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">🔧 Car Basics</h1>
        <p className="page-subtitle">
          Understanding how your car works is the first step to not getting ripped off. You don't need to be a mechanic — just understand the basics.
        </p>
      </div>

      <div className="tip-box" style={{ marginBottom: 24 }}>
        <strong>Pro tip:</strong> When a mechanic tells you something is wrong, understanding WHAT that system does helps you ask smarter questions — and spot BS.
      </div>

      <div style={{ marginBottom: 20 }}>
        <strong style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Click any system to learn more:
        </strong>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {carSystems.map(system => (
          <SystemSection key={system.id} system={system} />
        ))}
      </div>

      <div style={{ marginTop: 40, padding: '24px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius)' }}>
        <h3 style={{ marginBottom: 16 }}>🎓 The Most Important Things to Remember</h3>
        <ul className="check-list">
          <li>Your engine needs oil — running low destroys it. Check it monthly.</li>
          <li>Brakes are safety-critical — don't ignore squealing or grinding sounds.</li>
          <li>The check engine light isn't always an emergency — get the code read first (free at auto parts stores).</li>
          <li>Modern synthetic oil lasts 5,000–10,000 miles, not 3,000 miles.</li>
          <li>A timing belt failure can total an engine — do it on schedule.</li>
          <li>Most warning lights are worth addressing promptly but won't leave you stranded immediately (except temperature/oil pressure — pull over!).</li>
        </ul>
      </div>
    </div>
  );
}
