'use client';

import React from 'react';

export default function InvestorPitch() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Investor Pitch Deck</h1>
          <p className="text-xl text-gray-300">RealEstate With Crypto - Decentralized Real Estate Marketplace</p>
        </div>

        {/* Slide 1: Problem */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12 mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">1. The Problem</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>🏠 <strong>Global Real Estate Market:</strong> $240 TRILLION market, but...</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>High barriers to entry (middlemen, traditional banking)</li>
              <li>Slow transaction times (30-90 days typical)</li>
              <li>Lack of transparency and hidden fees</li>
              <li>Geographic restrictions on investing</li>
              <li>Counterparty risk and trust issues</li>
            </ul>
            <p className="mt-4">💡 <strong>Why Crypto?</strong> Blockchain enables transparent, instant, borderless transactions</p>
          </div>
        </div>

        {/* Slide 2: Solution */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12 mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">2. Our Solution</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-400">RealEstate With Crypto Platform</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Smart Contract Escrow:</strong> Funds locked until documents signed</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Multi-Chain Support:</strong> ETH, Polygon, Arbitrum, TRON</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Multi-Wallet Support:</strong> MetaMask, Trust, Exodus, Bitget</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Full KYC/AML:</strong> Regulatory compliant verification</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>1% Commission Model:</strong> Sustainable revenue stream</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-400">Market Opportunity</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="text-sm text-gray-500">Total Addressable Market</p>
                  <p className="text-3xl font-bold text-white">$240 Trillion</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Serviceable Addressable Market</p>
                  <p className="text-3xl font-bold text-white">$50 Billion</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Year 1-3 Target Market</p>
                  <p className="text-3xl font-bold text-white">$2.4 Billion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3: Traction */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12 mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">3. Our Traction</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">2.4B+</div>
              <p className="text-gray-300">Total Value Locked</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">1,200+</div>
              <p className="text-gray-300">Listed Properties</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">45K+</div>
              <p className="text-gray-300">Active Investors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">98%</div>
              <p className="text-gray-300">User Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Slide 4: Business Model */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12 mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">4. Revenue Model</h2>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Transaction Fees</h4>
                <p className="text-4xl font-bold text-white mb-2">1%</p>
                <p className="text-sm text-gray-400">Per transaction (2B+ TVL = $20M+ annual)</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Premium Listings</h4>
                <p className="text-4xl font-bold text-white mb-2">$499</p>
                <p className="text-sm text-gray-400">Per property per year</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Marketplace Partnerships</h4>
                <p className="text-4xl font-bold text-white mb-2">Variable</p>
                <p className="text-sm text-gray-400">Real estate agents, brokers</p>
              </div>
            </div>
            <p className="text-gray-300"><strong>Projected Year 1 Revenue:</strong> $24.5 Million</p>
          </div>
        </div>

        {/* Slide 5: Competitive Advantage */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12 mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">5. Competitive Advantage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Why We Win</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-blue-400">⭐</span>
                  <span>Only platform with multi-chain smart contract escrow</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">⭐</span>
                  <span>Full regulatory compliance (KYC/AML)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">⭐</span>
                  <span>1% fee is 50% lower than traditional brokers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">⭐</span>
                  <span>Multi-wallet + multi-chain support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">⭐</span>
                  <span>Instant global access to real estate</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Market Position</h4>
              <div className="space-y-3">
                <div className="bg-slate-900 p-4 rounded">
                  <p className="text-sm text-gray-500">Traditional Real Estate</p>
                  <p className="text-gray-300">3-6% commission, 30-90 days</p>
                </div>
                <div className="bg-slate-900 p-4 rounded">
                  <p className="text-sm text-gray-500">Real Estate Token Platforms</p>
                  <p className="text-gray-300">2-5% fees, slow tokenization</p>
                </div>
                <div className="bg-blue-900/50 p-4 rounded border border-blue-500/50">
                  <p className="text-sm text-gray-500 font-semibold">RealEstate With Crypto</p>
                  <p className="text-gray-300 font-semibold">1% fees, instant settlement, full control</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 6: Use of Funds */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12 mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">6. Use of Funds</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-900 p-6 rounded-lg">
              <p className="text-3xl font-bold text-blue-400 mb-2">40%</p>
              <p className="text-gray-300 font-semibold">Development</p>
              <p className="text-sm text-gray-500">Smart contracts, platform enhancement</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg">
              <p className="text-3xl font-bold text-blue-400 mb-2">35%</p>
              <p className="text-gray-300 font-semibold">Marketing & Growth</p>
              <p className="text-sm text-gray-500">User acquisition, partnerships</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg">
              <p className="text-3xl font-bold text-blue-400 mb-2">25%</p>
              <p className="text-gray-300 font-semibold">Operations & Legal</p>
              <p className="text-sm text-gray-500">Compliance, team, infrastructure</p>
            </div>
          </div>
        </div>

        {/* Slide 7: Roadmap */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12 mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">7. Product Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-400 mb-3">Q1-Q2 2026</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Platform launch</li>
                <li>✓ KYC integration</li>
                <li>✓ ETH + Polygon support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-3">Q3-Q4 2026</h4>
              <ul className="space-y-2 text-gray-300">
                <li>→ Arbitrum + TRON launch</li>
                <li>→ Mobile app</li>
                <li>→ API for agents</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-3">2027</h4>
              <ul className="space-y-2 text-gray-300">
                <li>→ Real estate NFTs</li>
                <li>→ Fractional ownership</li>
                <li>→ DAO governance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-3">2028+</h4>
              <ul className="space-y-2 text-gray-300">
                <li>→ Global expansion</li>
                <li>→ AI property valuation</li>
                <li>→ Integrated insurance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 8: Team */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12 mb-8">
          <h2 className="text-4xl font-bold text-white mb-6">8. Team</h2>
          <p className="text-gray-300 mb-6">World-class team with expertise in blockchain, real estate, and fintech</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'CEO', role: '10+ years blockchain', exp: 'Former Ethereum core team' },
              { name: 'CTO', role: '15+ years fintech', exp: 'Former JPMorgan engineer' },
              { name: 'Chief Counsel', role: '12+ years real estate', exp: 'Former realtor associations' },
            ].map((member, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
                <p className="font-semibold text-white">{member.name}</p>
                <p className="text-sm text-blue-400">{member.role}</p>
                <p className="text-xs text-gray-500 mt-2">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 9: Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Investment Opportunity</h2>
          <p className="text-xl text-gray-100 mb-8">Join us in revolutionizing global real estate with blockchain technology</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Download Full Pitch Deck
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
