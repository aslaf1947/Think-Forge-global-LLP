import axios from 'axios';

// const BASE = 'http://localhost:5000/api';
const BASE = 'https://YOUR-BACKEND-URL.vercel.app/api';

export const getWallets = () => axios.get(`${BASE}/wallets`);
export const deposit = (id, amount) => axios.post(`${BASE}/wallets/${id}/deposit`, { amount });
export const withdraw = (id, amount) => axios.post(`${BASE}/wallets/${id}/withdraw`, { amount });
export const getBankAccounts = () => axios.get(`${BASE}/bank-accounts`);
export const addBankAccount = (data) => axios.post(`${BASE}/bank-accounts`, data);
export const getTransactions = () => axios.get(`${BASE}/transactions`);