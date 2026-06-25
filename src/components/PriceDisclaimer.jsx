export default function PriceDisclaimer({ style }) {
  return (
    <div className="warning-box" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', ...style }}>
      <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>📍</span>
      <div style={{ fontSize: '0.85rem' }}>
        <strong>Prices vary by location.</strong> All estimates on this site reflect average US market rates and can differ significantly based on your city, region, local cost of living, and the specific shop you visit. Urban areas and dealerships typically charge more; rural areas and independent shops typically charge less. Always get at least two local quotes before approving any repair.
      </div>
    </div>
  );
}
