'use client';

import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import Link from 'next/link';

export default function Dashboard() {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState('overview');
  const [userDeals, setUserDeals] = useState([]);
  const [portfolio, setPortfolio] = useState({ totalValue: '$0', totalDeals: 0, pendingTransactions: 0 });

  useEffect(() => {
    if (!isConnected) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/deals?wallet=${address}`);
        const data = await response.json();
        if (data.success) {
          setUserDeals(data.deals || []);
          setPortfolio({
            totalValue: `$${(data.deals.length * 10000).toLocaleString()}`,
            totalDeals: data.deals.length,
            pendingTransactions: data.deals.filter((d: any) => d.status !== 'completed').length,
          });
        }
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };

    fetchData();
  }, [isConnected, address]);

  if (!isConnected) {
    return (
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-12 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
            <p className="text-gray-300 mb-8">Connect your wallet to view your dashboard</p>
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-block">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Your Dashboard</h1>

        {/* Portfolio Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6">
            <p className="text-gray-400 text-sm mb-2">Total Portfolio Value</p>
            <p className="text-4xl font-bold text-blue-400">{portfolio.totalValue}</p>
            <p className="text-green-400 text-sm mt-2">+12.5% this month</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6">
            <p className="text-gray-400 text-sm mb-2">Active Deals</p>
            <p className="text-4xl font-bold text-blue-400">{portfolio.totalDeals}</p>
            <p className="text-yellow-400 text-sm mt-2">{portfolio.pendingTransactions} pending</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6">
            <p className="text-gray-400 text-sm mb-2">Wallet Address</p>
            <p className="text-sm font-mono text-blue-400 break-all">{address}</p>
            <button className="text-green-400 text-sm mt-2 hover:text-green-300">✓ Verified</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-700">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'deals', label: 'My Deals' },
            { id: 'properties', label: 'Watchlist' },
            { id: 'settings', label: 'Settings' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-semibold transition ${
                activeTab === tab.id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Recent Activity</h2>
              {userDeals.length === 0 ? (
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center">
                  <p className="text-gray-400 mb-4">No deals yet</p>
                  <Link href="/marketplace" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block">
                    Browse Properties
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {userDeals.map((deal: any) => (
                    <div key={deal.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-white">Deal #{deal.id}</h3>
                          <p className="text-gray-400 text-sm">Status: {deal.status}</p>
                        </div>
                        <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded text-sm">{deal.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'deals' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Transaction History</h2>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center">
                <p className="text-gray-400">No transactions yet. Start investing to see your transaction history here.</p>
              </div>
            </div>
          )}

          {activeTab === 'properties' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Watchlist</h2>
              <Link href="/marketplace" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block">
                Add Properties to Watchlist
              </Link>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Account Settings</h2>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">KYC Status</span>
                  <span className="text-green-400">✓ Verified</span>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <button className="text-red-400 hover:text-red-300 font-semibold">
                    Disconnect Wallet
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
