'use client';

export default function SmartAgreement() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold text-white mb-8">Smart Agreement & Contract</h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">REAL ESTATE PURCHASE AGREEMENT</h2>
            <p className="text-sm text-gray-500 mt-4">Smart Contract Powered Agreement</p>
            <p className="text-sm text-gray-500">Platform: www.cryptoproperty.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Parties</h2>
            <p>
              This Agreement is entered into between:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>BUYER:</strong> [Buyer Wallet Address]</li>
              <li><strong>SELLER:</strong> [Seller Wallet Address]</li>
              <li><strong>PLATFORM:</strong> RealEstate With Crypto (Escrow Agent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Property Description</h2>
            <p>
              The Buyer agrees to purchase and the Seller agrees to sell the real property more particularly described as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Property Address: [Property Address]</li>
              <li>Property ID: [Unique Property ID]</li>
              <li>Description: [Property Description]</li>
              <li>Seller Wallet: [Seller ETH/Polygon/Arbitrum/TRON Address]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Purchase Price</h2>
            <p>
              The purchase price shall be:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Total Price: [Amount] Cryptocurrency</li>
              <li>Currency: ETH / MATIC / ARB / TRX</li>
              <li>Platform Commission: 1% (automatically deducted)</li>
              <li>Amount to Seller: [Total - Commission]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Escrow Arrangement</h2>
            <p>
              The purchase price shall be held in escrow by RealEstate With Crypto through smart contracts:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Escrow Smart Contract:</strong> [Contract Address]</li>
              <li><strong>Blockchain:</strong> Ethereum / Polygon / Arbitrum / TRON</li>
              <li><strong>Escrow Duration:</strong> 30 days from initiation</li>
              <li><strong>Release Condition:</strong> Documents verified and signed</li>
              <li><strong>Commission Recipient:</strong> 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Documents Required</h2>
            <p>
              Before funds are released, the Seller shall provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Proof of Ownership (Deed or Title)</li>
              <li>Property Survey</li>
              <li>Clear Title Report</li>
              <li>Disclosure Statements</li>
              <li>Inspection Reports</li>
              <li>All required legal documents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Timeline</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Day 1: Buyer deposits funds into smart contract escrow</li>
              <li>Days 2-7: Seller provides documents for review</li>
              <li>Days 8-20: Document verification by RealEstate With Crypto</li>
              <li>Days 21-28: Buyer reviews and approves documents</li>
              <li>Day 29: Funds released to Seller + Commission to Platform</li>
              <li>Day 30: Escrow contract closes</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contingencies</h2>
            <p>
              This purchase is contingent upon:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Satisfactory property inspection</li>
              <li>Clear title verification</li>
              <li>Compliance with all local regulations</li>
              <li>Successful KYC verification of both parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Dispute Resolution</h2>
            <p>
              In case of dispute:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>3-day resolution period is activated</li>
              <li>Both parties must submit evidence</li>
              <li>RealEstate With Crypto administration reviews case</li>
              <li>Final decision is binding on both parties</li>
              <li>If unresolved, funds may be returned or frozen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Fees & Commission</h2>
            <p>
              1% Platform Commission Details:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Automatically deducted at contract execution</li>
              <li>Non-refundable once transaction is initiated</li>
              <li>Covers platform operations and security</li>
              <li>Sent to: 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84</li>
              <li>Tax implications are responsibility of parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Wallet Providers</h2>
            <p>
              This contract accepts payments from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>MetaMask</li>
              <li>Trust Wallet</li>
              <li>Exodus</li>
              <li>Bitget Wallet</li>
              <li>Other WalletConnect compatible wallets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Blockchain Immutability</h2>
            <p>
              Both parties acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Smart contract transactions are immutable</li>
              <li>Funds released cannot be reversed</li>
              <li>Wallet addresses and transactions are permanently recorded</li>
              <li>Blockchain data is publicly visible</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
            <p>
              This agreement may be terminated only under these conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Mutual written consent from both parties</li>
              <li>Document verification fails</li>
              <li>Buyer or Seller fails to meet obligations</li>
              <li>Legal court order</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Entire Agreement</h2>
            <p>
              This Smart Agreement, combined with the Terms & Conditions of RealEstate With Crypto, constitutes the entire agreement between the parties. Any modifications must be in writing and signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Acknowledgment</h2>
            <p>
              By executing this Smart Agreement on the blockchain, both Buyer and Seller acknowledge that they:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Have read and understood all terms</li>
              <li>Agree to be bound by smart contract logic</li>
              <li>Accept the immutable nature of blockchain transactions</li>
              <li>Understand the 1% platform commission</li>
              <li>Accept dispute resolution through platform administration</li>
              <li>Have completed KYC verification</li>
            </ul>
          </section>

          <p className="text-sm text-gray-500 mt-8 border-t border-gray-700 pt-8">
            <strong>Smart Contract Execution Date:</strong> [Date]<br />
            <strong>Buyer Signature (Wallet Signature):</strong> [Cryptographic Signature]<br />
            <strong>Seller Signature (Wallet Signature):</strong> [Cryptographic Signature]<br />
            <strong>Transaction Hash:</strong> [Ethereum/Polygon/Arbitrum/TRON TX Hash]<br />
            <strong>Last Updated:</strong> February 2026
          </p>
        </div>
      </div>
    </div>
  );
}
