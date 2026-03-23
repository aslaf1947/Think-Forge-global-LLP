import React from 'react';

export default function TotalBalance({ total, onDeposit, onWithdraw, onAddBank }) {
  const fmt = (n) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2 });

  return (
    <div style={{
      background: '#1a1d27', border: '1px solid #2d3748',
      borderRadius: 16, padding: 24
    }}>
      <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 8 }}>Total Balance</p>
      <h1 style={{ fontSize: 36, fontWeight: 800, color: '#22c55e', fontFamily: 'monospace', marginBottom: 4 }}>
        {fmt(total)}
      </h1>
      <p style={{ fontSize: 12, color: '#22c55e', marginBottom: 20 }}>+20.1% from last month</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {[
          { label: 'Add to wallet', fn: onDeposit, primary: true },
          { label: 'Withdraw', fn: onWithdraw },
          { label: 'Add New Account', fn: onAddBank },
        ].map(({ label, fn, primary }) => (
          <button key={label} onClick={fn} style={{
            padding: '10px 20px',
            background: primary ? '#22c55e' : 'transparent',
            color: primary ? '#000' : '#e2e8f0',
            border: primary ? 'none' : '1px solid #2d3748',
            borderRadius: 10, cursor: 'pointer',
            fontWeight: 600, fontSize: 14, transition: 'all 0.2s'
          }}>{label}</button>
        ))}
      </div>
    </div>
  );
}