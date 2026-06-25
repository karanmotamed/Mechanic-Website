import { useState } from 'react';
import { repairCategories, priceComparisons, laborRates } from '../data/costs';
import PriceDisclaimer from '../components/PriceDisclaimer';

function Calculator() {
  const [vehicleType, setVehicleType] = useState('sedan');
  const [service, setService] = useState('oil-synthetic');
  const [location, setLocation] = useState('suburban');

  const services = {
    'oil-synthetic': { name: 'Oil Change (Synthetic)', base: [65, 95] },
    'oil-conventional': { name: 'Oil Change (Conventional)', base: [35, 55] },
    'brakes-front': { name: 'Front Brake Pads', base: [150, 280] },
    'brakes-full': { name: 'Full Brake Job (Pads + Rotors)', base: [400, 700] },
    'tires-rotate': { name: 'Tire Rotation', base: [20, 50] },
    'air-filter': { name: 'Air Filter', base: [20, 40] },
    'battery': { name: 'Battery Replacement', base: [120, 200] },
    'alignment': { name: 'Wheel Alignment', base: [75, 150] },
    'spark-plugs': { name: 'Spark Plugs', base: [80, 200] },
    'timing-belt': { name: 'Timing Belt', base: [400, 900] },
  };

  const multipliers = {
    vehicle: { sedan: 1.0, suv: 1.1, truck: 1.1, luxury: 1.4, sports: 1.3 },
    location: { rural: 0.85, suburban: 1.0, urban: 1.2, dealer: 1.6 },
  };

  const calc = () => {
    const svc = services[service];
    const vm = multipliers.vehicle[vehicleType];
    const lm = multipliers.location[location];
    const low = Math.round(svc.base[0] * vm * lm / 5) * 5;
    const high = Math.round(svc.base[1] * vm * lm / 5) * 5;
    const scamLow = Math.round(low * 1.6 / 5) * 5;
    const scamHigh = Math.round(high * 1.9 / 5) * 5;
    return { low, high, scamLow, scamHigh };
  };

  const result = calc();

  return (
    <div className="calculator">
      <h3>🧮 Repair Cost Estimator</h3>
      <p>Get a ballpark estimate based on your situation. Use this to know if a quote is reasonable.</p>

      <div className="calc-grid">
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 6, opacity: 0.8 }}>VEHICLE TYPE</label>
          <select className="calc-select" value={vehicleType} onChange={e => setVehicleType(e.target.value)}>
            <option value="sedan">Sedan / Small Car</option>
            <option value="suv">SUV / Minivan</option>
            <option value="truck">Truck / Van</option>
            <option value="sports">Sports Car</option>
            <option value="luxury">Luxury Vehicle</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 6, opacity: 0.8 }}>SERVICE NEEDED</label>
          <select className="calc-select" value={service} onChange={e => setService(e.target.value)}>
            {Object.entries(services).map(([k, v]) => (
              <option key={k} value={k}>{v.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: 6, opacity: 0.8 }}>SHOP TYPE / LOCATION</label>
          <select className="calc-select" value={location} onChange={e => setLocation(e.target.value)}>
            <option value="rural">Rural / Small Town</option>
            <option value="suburban">Suburban Independent</option>
            <option value="urban">Urban / Big City</option>
            <option value="dealer">Dealership</option>
          </select>
        </div>
      </div>

      <div className="calc-result">
        <h4>{services[service].name}</h4>
        <div className="calc-price-row">
          <span>Fair price range</span>
          <span className="calc-fair">${result.low} – ${result.high}</span>
        </div>
        <div className="calc-price-row">
          <span>Walk away if quoted over</span>
          <span className="calc-warning">${result.scamHigh}</span>
        </div>
        <div className="calc-price-row" style={{ border: 'none', paddingTop: 12, fontSize: '0.8rem', opacity: 0.75 }}>
          <span>⚡ These are estimates — always get at least 2 quotes for major repairs</span>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <button className={`accordion-header ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
        <span className="accordion-icon">{category.icon}</span>
        <span style={{ flex: 1 }}>{category.name}</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: 8 }}>{category.items.length} services</span>
        <span className="accordion-chevron">▼</span>
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <div className="accordion-content" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th style={{ color: 'var(--success)' }}>✓ Fair Price</th>
                  <th style={{ color: 'var(--danger)' }}>⚠️ Too High</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{item.name}</td>
                    <td className="fair-price">{item.fair}</td>
                    <td className="warning-price">{item.warning}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Costs() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">💰 Cost Estimates</h1>
        <p className="page-subtitle">
          Fair price ranges for common repairs and maintenance. Know what's reasonable before you walk in — and know when to walk out.
        </p>
      </div>

      <PriceDisclaimer style={{ marginBottom: 16 }} />

      <div className="tip-box" style={{ marginBottom: 32 }}>
        <strong>How to use this page:</strong> Use the calculator to get a ballpark for your specific situation, then check the detailed tables to understand what's fair. Remember — prices vary by region, vehicle, and shop type. These are US market averages.
      </div>

      <Calculator />

      {/* Shop comparison */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ marginBottom: 16 }}>Where You Take Your Car Matters</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="price-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Dealership 😰</th>
                <th>Chain Shop</th>
                <th>Indie Shop ✓</th>
                <th>DIY 🏆</th>
              </tr>
            </thead>
            <tbody>
              {priceComparisons.map((row, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600 }}>{row.service}</td>
                  <td style={{ color: 'var(--danger)' }}>{row.dealership}</td>
                  <td>{row.chainShop}</td>
                  <td className="fair-price">{row.independentShop}</td>
                  <td style={{ color: 'var(--success)', fontWeight: 700 }}>{row.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 10 }}>
          💡 Independent shops use the same parts and often have the same (or more) experience as dealerships, at a fraction of the cost.
        </p>
      </div>

      {/* Labor rates */}
      <div style={{ marginBottom: 32 }}>
        <h3 style={{ marginBottom: 12 }}>Labor Rate by Region</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '0.9rem' }}>
          Shops charge by the hour. The "book time" for a job is how many hours labor guides say it should take.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {laborRates.map((rate, i) => (
            <div key={i} style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', padding: '14px 18px', minWidth: 160 }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: 4 }}>{rate.region}</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>{rate.range}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 style={{ marginBottom: 8 }}>Detailed Price Guides</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20, fontSize: '0.9rem' }}>Click any category to see itemized prices.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {repairCategories.map(cat => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </div>

      <div style={{ marginTop: 40, padding: 24, background: 'var(--bg-secondary)', borderRadius: 'var(--radius)' }}>
        <h3 style={{ marginBottom: 16 }}>📝 Before You Approve Any Repair</h3>
        <ul className="check-list">
          <li>Is this in my owner's manual schedule? (If not, why is it being recommended?)</li>
          <li>What are the symptoms that indicate this is needed right now?</li>
          <li>Can I see the old part or the specific measurement that shows replacement is needed?</li>
          <li>Can this wait while I get a second quote? (Most non-emergency repairs can)</li>
          <li>Is there a warranty on this repair? (Most reputable shops offer 12-month/12,000-mile)</li>
        </ul>
      </div>
    </div>
  );
}
