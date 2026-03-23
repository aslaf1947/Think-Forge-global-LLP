import React from 'react';

export default function BankAccounts({ accounts }) {
  return (
    <div style={{ background: '#1a1d27', border: '1px solid #2d3748', borderRadius: 16, padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <p style={{ fontWeight: 600, color: '#fff' }}>Associated Bank Accounts</p>
        <span style={{ color: '#64748b', cursor: 'pointer' }}>···</span>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {accounts.map(acc => (
          <div key={acc.id} style={{
            background: '#0f1117', border: '1px solid #2d3748',
            borderRadius: 10, padding: '12px 16px', flex: 1, minWidth: 130
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: '#94a3b8' }}>{acc.bankName}</span>
              <span style={{ color: '#64748b', fontSize: 12 }}>⋮</span>
            </div>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>{Number(acc.amount).toLocaleString()}</p>
            <p style={{ fontSize: 11, color: '#22c55e', marginTop: 4 }}>{acc.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}