export default function PriceDisclaimer({ style }) {
  return (
    <div className="warning-box" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', ...style }}>
      <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>📍</span>
      <div style={{ fontSize: '0.85rem' }}>
        <strong>All prices are in Canadian dollars (CAD) and reflect British Columbia market rates.</strong> Prices vary by city, shop type, and vehicle. Metro Vancouver and Victoria tend to be on the higher end; smaller BC communities tend to be lower. Always get at least two local quotes before approving any repair.
      </div>
    </div>
  );
}
