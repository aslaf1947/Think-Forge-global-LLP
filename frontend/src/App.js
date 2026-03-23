import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import TotalBalance from './components/TotalBalance'  // ← ADD THIS
import StatCard from './components/StatCard';
import BankAccounts from './components/BankAccounts';
import WalletAccounts from './components/WalletAccounts';
import TransactionHistory from './components/TransactionHistory';
import WalletChart from './components/WalletChart';
import DepositModal from './components/modals/DepositModal';
import WithdrawModal from './components/modals/WithdrawModal';
import AddBankModal from './components/modals/AddBankModal';
import { getWallets, getBankAccounts, getTransactions, deposit, withdraw, addBankAccount } from './api/api';
import './index.css';

export default function App() {
  const [wallets, setWallets] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [bankAccounts, setBankAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [modal, setModal] = useState(null); // 'deposit' | 'withdraw' | 'addBank'

  const refresh = useCallback(async () => {
    const [wRes, bRes, tRes] = await Promise.all([getWallets(), getBankAccounts(), getTransactions()]);
    setWallets(wRes.data.wallets);
    setTotalBalance(wRes.data.totalBalance);
    setBankAccounts(bRes.data);
    setTransactions(tRes.data);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const handleDeposit = async (id, amount) => {
    await deposit(id, amount);
    refresh();
  };

  const handleWithdraw = async (id, amount) => {
    await withdraw(id, amount);
    refresh();
  };

  const handleAddBank = async (data) => {
    await addBankAccount(data);
    refresh();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0f1117' }}>
      <Navbar/>

      <div style={{ padding: '24px', maxWidth: 1400, margin: '0 auto' }}>
        {/* Top Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TotalBalance
              total={totalBalance}
              onDeposit={() => setModal('deposit')}
              onWithdraw={() => setModal('withdraw')}
              onAddBank={() => setModal('addBank')}
            />
            <div style={{ display: 'flex', gap: 12 }}>
              <StatCard label="Referral" value={2362} currency="USD" change="+20.1% from last month" />
              <StatCard label="Bonus" value={2362} currency="USD" change="+20.1% from last month" />
            </div>
          </div>
          <WalletChart />
        </div>

        {/* Middle Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
          <BankAccounts accounts={bankAccounts} />
          <TransactionHistory transactions={transactions} />
        </div>

        {/* Bottom Row */}
        <WalletAccounts wallets={wallets} />
      </div>

      {/* Modals */}
      {modal === 'deposit' && <DepositModal wallets={wallets} onClose={() => setModal(null)} onSubmit={handleDeposit} />}
      {modal === 'withdraw' && <WithdrawModal wallets={wallets} onClose={() => setModal(null)} onSubmit={handleWithdraw} />}
      {modal === 'addBank' && <AddBankModal onClose={() => setModal(null)} onSubmit={handleAddBank} />}
    </div>
  );
}