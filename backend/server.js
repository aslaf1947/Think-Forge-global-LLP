const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Wallet Dashboard API is running ✅' });
});

// ─── IN-MEMORY STORE ───────────────────────────────────────────────
let wallets = [
  { id: 'w1', name: 'Wallet A', balance: 10000, currency: 'USD' },
  { id: 'w2', name: 'Wallet B', balance: 5000, currency: 'USD' },
  { id: 'w3', name: 'Wallet C', balance: 5000, currency: 'EUR' },
];

let bankAccounts = [
  { id: 'b1', bankName: 'Citi Bank', amount: 5000000, currency: 'USD', change: '+125 since last hour' },
  { id: 'b2', bankName: 'Barclays Bank', amount: 120353, currency: 'USD', change: '+125 since last hour' },
  { id: 'b3', bankName: 'Axis Bank', amount: 110353, currency: 'USD', change: '+125 since last hour' },
];

let transactions = [
  { id: 't1', type: 'deposit', walletId: 'w1', description: 'Added to Wallet 1', amount: 21282, currency: 'GBP', status: 'success', date: new Date('2025-05-22T18:35:00') },
  { id: 't2', type: 'withdrawal', walletId: 'w1', description: 'Withdrawn', amount: 15750, currency: 'USD', status: 'success', date: new Date('2025-06-12T20:15:00') },
  { id: 't3', type: 'deposit', walletId: 'w2', description: 'Added to Wallet 2', amount: 7500, currency: 'EUR', status: 'success', date: new Date('2025-07-05T11:45:00') },
  { id: 't4', type: 'withdrawal', walletId: 'w1', description: 'Withdrawn', amount: 3000, currency: 'USD', status: 'pending', date: new Date() },
];

// ─── HELPER ────────────────────────────────────────────────────────
const getTotalBalance = () => wallets.reduce((sum, w) => sum + w.balance, 0);

// ─── WALLET ROUTES ─────────────────────────────────────────────────
// GET all wallets + total balance
app.get('/api/wallets', (req, res) => {
  res.json({ totalBalance: getTotalBalance(), wallets });
});

// POST deposit
app.post('/api/wallets/:id/deposit', (req, res) => {
  const { amount } = req.body;
  const wallet = wallets.find(w => w.id === req.params.id);
  if (!wallet) return res.status(404).json({ error: 'Wallet not found' });
  if (!amount || amount <= 0) return res.status(400).json({ error: 'Invalid amount' });

  wallet.balance += Number(amount);
  const tx = { id: uuidv4(), type: 'deposit', walletId: wallet.id, description: `Added to ${wallet.name}`, amount: Number(amount), currency: wallet.currency, status: 'success', date: new Date() };
  transactions.unshift(tx);
  res.json({ wallet, transaction: tx, totalBalance: getTotalBalance() });
});

// POST withdrawal
app.post('/api/wallets/:id/withdraw', (req, res) => {
  const { amount } = req.body;
  const wallet = wallets.find(w => w.id === req.params.id);
  if (!wallet) return res.status(404).json({ error: 'Wallet not found' });
  if (!amount || amount <= 0) return res.status(400).json({ error: 'Invalid amount' });
  if (wallet.balance < amount) return res.status(400).json({ error: 'Insufficient balance' });

  wallet.balance -= Number(amount);
  const tx = { id: uuidv4(), type: 'withdrawal', walletId: wallet.id, description: 'Withdrawn', amount: Number(amount), currency: wallet.currency, status: 'success', date: new Date() };
  transactions.unshift(tx);
  res.json({ wallet, transaction: tx, totalBalance: getTotalBalance() });
});

// ─── BANK ACCOUNT ROUTES ───────────────────────────────────────────
// GET all bank accounts
app.get('/api/bank-accounts', (req, res) => {
  res.json(bankAccounts);
});

// POST add bank account
app.post('/api/bank-accounts', (req, res) => {
  const { bankName, amount, currency } = req.body;
  if (!bankName || !currency) return res.status(400).json({ error: 'bankName and currency required' });

  const account = { id: uuidv4(), bankName, amount: Number(amount) || 0, currency, change: '+0 since last hour' };
  bankAccounts.push(account);
  res.status(201).json(account);
});

// ─── TRANSACTION ROUTES ────────────────────────────────────────────
// GET transaction history
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

// ─── START ─────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));