"use client";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiProvider, createConfig } from "wagmi";
import { mainnet, polygon, arbitrum } from "wagmi/chains";
import { http } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { injected, coinbaseWallet, walletConnect } from "wagmi/connectors";

// 🔐 WalletConnect / Reown Project ID
const projectId = "45d5f8887910b2cdad4322a8a23c2e36";

// Supported chains
const chains = [mainnet, polygon, arbitrum] as const;

export const config = createConfig({
  chains,
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Real Estate with Crypto" }),
    walletConnect({ projectId }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
  },
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
