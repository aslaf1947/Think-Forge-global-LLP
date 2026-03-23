import React, { useState } from 'react';

export default function AddBankModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ bankName: '', amount: '', currency: 'USD' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <h2>🏦 Add Bank Account</h2>
        <label>Bank Name</label>
        <input placeholder="e.g. HDFC Bank" value={form.bankName} onChange={e => set('bankName', e.target.value)} />
        <label>Initial Amount</label>
        <input type="number" placeholder="e.g. 50000" value={form.amount} onChange={e => set('amount', e.target.value)} />
        <label>Currency</label>
        <select value={form.currency} onChange={e => set('currency', e.target.value)}>
          {['USD', 'EUR', 'GBP', 'INR'].map(c => <option key={c}>{c}</option>)}
        </select>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={() => { onSubmit(form); onClose(); }}>Add Account</button>
        </div>
      </div>
    </div>
  );
}

