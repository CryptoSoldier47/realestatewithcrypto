'use client';

export default function PrivacyPolicy() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              RealEstate With Crypto ("Company," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.cryptoproperty.com and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Personal Data:</strong> Name, email address, phone number, wallet address</li>
              <li><strong>Financial Data:</strong> Cryptocurrency wallet details, transaction history</li>
              <li><strong>Identity Data:</strong> Government-issued ID, proof of address (for KYC)</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, pages visited</li>
              <li><strong>Usage Data:</strong> Interaction with the platform, search queries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Process your transactions and send related information</li>
              <li>Perform KYC and AML verification</li>
              <li>Email regarding an order, service, or product</li>
              <li>Fulfill and manage purchases, orders, payments, and transactions</li>
              <li>Generate a personal profile about you</li>
              <li>Increase the efficiency and operation of the site</li>
              <li>Monitor and analyze usage and trends to improve the user experience</li>
              <li>Notify you of updates to the site</li>
              <li>Offer new products, services, and/or recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Legal Requirements:</strong> If required by law or government request</li>
              <li><strong>Third-Party Service Providers:</strong> KYC verification services, payment processors</li>
              <li><strong>Smart Contracts:</strong> Transaction information is stored on blockchain</li>
              <li><strong>Other Parties:</strong> With your explicit consent only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Blockchain Data</h2>
            <p>
              Please understand that data recorded on the blockchain is permanent and publicly visible. Wallet addresses and transaction details are visible on the blockchain and cannot be made private or deleted. By using our service, you acknowledge this immutable nature.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              Email: privacy@cryptoproperty.com<br />
              Website: www.cryptoproperty.com
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
}
