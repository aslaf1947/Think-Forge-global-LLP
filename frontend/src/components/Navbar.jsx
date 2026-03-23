import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 28px', background: '#1a1d27',
      borderBottom: '1px solid #2d3748', position: 'sticky', top: 0, zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, color: '#000', fontSize: 14
          }}>AK</div>
          <span style={{ fontWeight: 600, color: '#fff' }}>Alicia Koch</span>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Home', 'Customers', 'Settings'].map(item => (
            <span key={item} style={{
              fontSize: 14, color: item === 'Home' ? '#22c55e' : '#94a3b8',
              cursor: 'pointer', fontWeight: item === 'Home' ? 600 : 400
            }}>{item}</span>
          ))}
        </div>
      </div>
      <input placeholder="Search..." style={{
        padding: '8px 16px', background: '#0f1117',
        border: '1px solid #2d3748', borderRadius: 8,
        color: '#e2e8f0', fontSize: 14, width: 200
      }} />
    </nav>
  );
}