'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export default function Navbar() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [menuOpen, setMenuOpen] = useState(false);

  const truncateAddress = (addr: string | undefined) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold text-white">RealEstate</span>
            <span className="text-xs bg-blue-600 px-2 py-1 rounded">Crypto</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/marketplace" className="text-gray-300 hover:text-white transition">
              Marketplace
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition">
              Dashboard
            </Link>
            <Link href="/kyc" className="text-gray-300 hover:text-white transition">
              KYC Verification
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <div className="text-sm bg-slate-800 px-3 py-2 rounded-lg">
                  <span className="text-green-400">●</span> {truncateAddress(address)}
                </div>
                <button
                  onClick={() => disconnect()}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={() => connect({ connector: connectors[0] })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition font-semibold"
              >
                Connect Wallet
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/marketplace" className="block text-gray-300 hover:text-white p-2">
              Marketplace
            </Link>
            <Link href="/dashboard" className="block text-gray-300 hover:text-white p-2">
              Dashboard
            </Link>
            <Link href="/kyc" className="block text-gray-300 hover:text-white p-2">
              KYC Verification
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
