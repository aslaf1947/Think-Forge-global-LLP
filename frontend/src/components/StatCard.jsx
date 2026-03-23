import React from 'react';

export default function StatCard({ label, value, currency, change }) {
  return (
    <div style={{
      background: '#1e2330', border: '1px solid #2d3748',
      borderRadius: 12, padding: '16px 20px', flex: 1, minWidth: 140
    }}>
      <p style={{ fontSize: 12, color: '#64748b', marginBottom: 6 }}>{label}</p>
      <p style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>
        {Number(value).toLocaleString()} <span style={{ fontSize: 12, color: '#94a3b8' }}>{currency}</span>
      </p>
      <p style={{ fontSize: 12, color: '#22c55e', marginTop: 4 }}>{change}</p>
    </div>
  );
}