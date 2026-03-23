import React, { useState } from 'react';

export default function DepositModal({ wallets, onClose, onSubmit }) {
  const [walletId, setWalletId] = useState(wallets[0]?.id || '');
  const [amount, setAmount] = useState('');

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <h2>💰 Deposit Funds</h2>
        <label>Select Wallet</label>
        <select value={walletId} onChange={e => setWalletId(e.target.value)}>
          {wallets.map(w => <option key={w.id} value={w.id}>{w.name} — {w.currency}</option>)}
        </select>
        <label>Amount</label>
        <input type="number" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)} />
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={() => { onSubmit(walletId, Number(amount)); onClose(); }}>Deposit</button>
        </div>
      </div>
    </div>
  );
}