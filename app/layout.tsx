import type { Metadata } from "next";
import { Web3Provider } from "@/lib/wallet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Real Estate with Crypto | Buy Properties with Cryptocurrency",
  description: "Decentralized real estate marketplace with smart contract escrow, multi-chain support (ETH, Polygon, Arbitrum, TRON), and secure KYC verification.",
  keywords: "real estate, crypto, blockchain, escrow, NFT, property",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Web3Provider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}
