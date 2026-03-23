import React from 'react';

export default function WalletAccounts({ wallets }) {
  return (
    <div style={{ background: '#1a1d27', border: '1px solid #2d3748', borderRadius: 16, padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <p style={{ fontWeight: 600, color: '#fff' }}>Wallet Accounts</p>
        <span style={{ color: '#64748b', cursor: 'pointer' }}>···</span>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {wallets.map(w => (
          <div key={w.id} style={{
            background: '#0f1117', border: '1px solid #2d3748',
            borderRadius: 10, padding: '12px 16px', flex: 1, minWidth: 130
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: '#94a3b8' }}>{w.name}</span>
              <span style={{ color: '#64748b', fontSize: 12 }}>⋮</span>
            </div>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>{Number(w.balance).toLocaleString()}</p>
            <p style={{ fontSize: 11, color: '#94a3b8', marginTop: 4 }}>{w.currency}</p>
          </div>
        ))}
      </div>
    </div>
  );
}