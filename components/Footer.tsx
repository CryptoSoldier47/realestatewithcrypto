'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">RealEstate Crypto</h3>
            <p className="text-gray-400 text-sm">
              Decentralized real estate marketplace with secure smart contract escrow and multi-chain support.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300">Twitter</a>
              <a href="https://discord.com" className="text-blue-400 hover:text-blue-300">Discord</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/marketplace" className="hover:text-white">Marketplace</Link></li>
              <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
              <li><Link href="/kyc" className="hover:text-white">KYC Verification</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/kyc-policy" className="hover:text-white">KYC Policy</Link></li>
              <li><Link href="/smart-agreement" className="hover:text-white">Smart Agreement</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2026 RealEstate With Crypto. All rights reserved. 1% Transaction Commission.</p>
            <p>Secured by Smart Contract Escrow | Multi-Chain Support (ETH, Polygon, Arbitrum, TRON)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
