import React from 'react';

const statusColor = { success: '#22c55e', pending: '#f59e0b', failed: '#ef4444' };

export default function TransactionHistory({ transactions }) {
  return (
    <div style={{ background: '#1a1d27', border: '1px solid #2d3748', borderRadius: 16, padding: 20, height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <p style={{ fontWeight: 600, color: '#fff' }}>Transaction History</p>
        <span style={{ color: '#64748b', cursor: 'pointer' }}>···</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {transactions.map(tx => (
          <div key={tx.id} style={{
            background: '#0f1117', border: '1px solid #2d3748',
            borderRadius: 10, padding: '14px 16px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'
          }}>
            <div>
              <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 4 }}>{tx.description}</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: tx.type === 'deposit' ? '#22c55e' : '#ef4444' }}>
                {tx.type === 'deposit' ? '+' : '-'}{Number(tx.amount).toLocaleString()} {tx.currency}
              </p>
              <p style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>
                {new Date(tx.date).toLocaleString()}
              </p>
            </div>
            <span style={{
              fontSize: 12, fontWeight: 600, padding: '4px 12px',
              borderRadius: 20, background: statusColor[tx.status] + '22',
              color: statusColor[tx.status], textTransform: 'capitalize'
            }}>{tx.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}