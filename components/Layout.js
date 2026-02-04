"use client";

import { Web3Button } from "@web3modal/wagmi/react";

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Real Estate with Crypto</h1>
          <Web3Button />
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}