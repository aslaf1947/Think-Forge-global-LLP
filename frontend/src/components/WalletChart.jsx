import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Apr 9', value: 20000 }, { month: 'Apr 19', value: 25000 },
  { month: 'Apr 29', value: 22000 }, { month: 'May 9', value: 30000 },
  { month: 'May 19', value: 28000 }, { month: 'May 30', value: 35000 },
  { month: 'Jun 9', value: 32000 }, { month: 'Jun 19', value: 40000 },
  { month: 'Jun 30', value: 45231 },
];

export default function WalletChart() {
  return (
    <div style={{ background: '#1a1d27', border: '1px solid #2d3748', borderRadius: 16, padding: 20 }}>
      <p style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>Overall Wallet Chart</p>
      <p style={{ fontSize: 12, color: '#64748b', marginBottom: 16 }}>Showing your wallet balances over time</p>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip contentStyle={{ background: '#1e2330', border: '1px solid #2d3748', borderRadius: 8, color: '#fff' }} />
          <Area type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} fill="url(#grad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}