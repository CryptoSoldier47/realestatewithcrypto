'use client';

import React from 'react';
import { WagmiConfig, createConfig, sepolia, polygon, arbitrum, mainnet } from 'wagmi';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { http } from 'viem';

const config = createConfig(
  getDefaultConfig({
    appName: 'RealEstate With Crypto',
    appDescription: 'Buy Real Estate using Cryptocurrency with Smart Contract Escrow',
    appUrl: 'https://realestatewithcrypto.vercel.app',
    appIcon: '/logo.png',
    chains: [mainnet, sepolia, polygon, arbitrum],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [polygon.id]: http(),
      [arbitrum.id]: http(),
    },
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID || 'default-project-id',
  })
);

export function WalletProvider({ children }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
}
