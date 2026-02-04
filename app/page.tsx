'use client';

import React from 'react';
import Link from 'next/link';
import { useAccount } from 'wagmi';

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Buy Real Estate with <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">Cryptocurrency</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Invest in premium properties globally with secure smart contract escrow. No intermediaries, full transparency, multi-chain support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={isConnected ? "/marketplace" : "#"}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition inline-block text-center"
                >
                  {isConnected ? "Browse Properties" : "Connect Wallet"}
                </Link>
                <Link
                  href="/about"
                  className="border border-blue-600 text-blue-400 hover:text-blue-300 px-8 py-3 rounded-lg font-semibold transition inline-block text-center"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                  <div className="text-3xl font-bold text-blue-400">2.4B+</div>
                  <div className="text-gray-400 text-sm">Total Value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">1,200+</div>
                  <div className="text-gray-400 text-sm">Properties</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">45K+</div>
                  <div className="text-gray-400 text-sm">Investors</div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-400">Your Properties Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔒',
                title: 'Smart Contract Escrow',
                desc: 'Funds locked securely until documents are signed. Zero counterparty risk.'
              },
              {
                icon: '🌍',
                title: 'Multi-Chain Support',
                desc: 'Buy with ETH, Polygon, Arbitrum, or TRON. Maximum flexibility.'
              },
              {
                icon: '✅',
                title: 'Full KYC & Verification',
                desc: 'Secure identity verification for all transactions. Regulatory compliant.'
              },
              {
                icon: '💰',
                title: 'Transparent Fees',
                desc: '1% commission per transaction. No hidden costs.'
              },
              {
                icon: '👥',
                title: 'Multi-Seller Marketplace',
                desc: 'Connect with verified sellers from around the world.'
              },
              {
                icon: '📊',
                title: 'Real-Time Dashboard',
                desc: 'Track investments, portfolio performance, and transaction history.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Connect Wallet', desc: 'Link your crypto wallet (MetaMask, Trust, etc.)' },
              { step: '2', title: 'Browse Properties', desc: 'Explore thousands of verified properties' },
              { step: '3', title: 'Escrow Payment', desc: 'Funds locked in smart contract' },
              { step: '4', title: 'Receive Deed', desc: 'Documents signed, funds released' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-4 top-8 text-2xl text-blue-500">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Invest?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your real estate investment journey with cryptocurrency today.
          </p>
          <Link
            href={isConnected ? "/marketplace" : "#"}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-semibold transition inline-block"
          >
            {isConnected ? "Go to Marketplace" : "Connect Wallet Now"}
          </Link>
        </div>
      </section>
    </>
  );
}
