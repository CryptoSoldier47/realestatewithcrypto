'use client';

export default function About() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About RealEstate With Crypto</h1>
          <p className="text-xl text-gray-300 mb-8">
            Revolutionizing global real estate investment through blockchain technology and decentralized smart contracts.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            To democratize global real estate investment by removing barriers to entry, providing transparent transactions, and leveraging blockchain technology to enable instant settlement and eliminate intermediaries. We believe everyone should have access to premium real estate investments regardless of their geographic location or wealth.
          </p>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '2B+ Users',
                desc: 'Connect billions of people to global real estate opportunities'
              },
              {
                title: '$100B+ TVL',
                desc: 'Enable trillions in real estate tokenization and trading'
              },
              {
                title: '150+ Countries',
                desc: 'Operate across all major jurisdictions with full compliance'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🔐',
                title: 'Security First',
                desc: 'Your assets are protected by audited smart contracts and industry-leading security practices'
              },
              {
                icon: '🌍',
                title: 'Global Access',
                desc: 'Open to investors worldwide with support for 10+ blockchains and multiple currencies'
              },
              {
                icon: '💎',
                title: 'Transparency',
                desc: 'All transactions recorded on immutable blockchain, fully transparent and verifiable'
              },
              {
                icon: '⚡',
                title: 'Efficiency',
                desc: 'Settle transactions instantly without expensive intermediaries or paper work'
              },
              {
                icon: '✅',
                title: 'Compliance',
                desc: 'Full regulatory compliance with KYC/AML verification in all jurisdictions'
              },
              {
                icon: '👥',
                title: 'Community',
                desc: 'Build a global community of real estate investors supporting each other'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose RealEstate With Crypto?</h2>
          <div className="space-y-4">
            {[
              '🔒 Smart Contract Escrow - Funds locked until documents are verified and signed',
              '🌐 Multi-Chain Support - Trade on Ethereum, Polygon, Arbitrum, and TRON',
              '💳 Multi-Wallet Support - Connect MetaMask, Trust Wallet, Exodus, Bitget, and more',
              '⚙️ Fully Automated - Smart contracts handle payments and fund release automatically',
              '📊 Real-Time Dashboard - Track investments and portfolio performance instantly',
              '✅ Full KYC/AML - Compliant with all global financial regulations',
              '💰 1% Commission - Lowest fees in the industry (vs 3-6% traditional brokers)',
              '🚀 Lightning Fast - Settle transactions in minutes instead of 30-90 days',
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="text-xl flex-shrink-0">{feature.split(' - ')[0]}</div>
                <div className="text-gray-300">{feature.split(' - ')[1]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Frontend</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Next.js 14</li>
                <li>✓ React 18</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ TypeScript</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Blockchain</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Solidity Smart Contracts</li>
                <li>✓ Wagmi + Viem</li>
                <li>✓ WalletConnect SDK</li>
                <li>✓ OpenZeppelin Libraries</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Backend</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Node.js</li>
                <li>✓ MongoDB</li>
                <li>✓ REST APIs</li>
                <li>✓ IPFS for documents</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Infrastructure</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Vercel (Hosting)</li>
                <li>✓ AWS (Infrastructure)</li>
                <li>✓ SSL/TLS Encryption</li>
                <li>✓ Multi-chain Testnet Support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Invest?</h2>
          <p className="text-xl text-gray-100 mb-8">Start building your crypto real estate portfolio today</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </section>
      </div>
    </div>
  );
}
