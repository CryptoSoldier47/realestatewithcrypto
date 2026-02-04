'use client';

export default function KYCPolicy() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold text-white mb-8">KYC Policy & Verification</h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. KYC Requirement</h2>
            <p>
              Know Your Customer (KYC) verification is mandatory for all users on RealEstate With Crypto. This requirement is essential for regulatory compliance, fraud prevention, and money laundering prevention (AML).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Required Information</h2>
            <p>To complete KYC verification, you must provide:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Full Legal Name (as appears on ID)</li>
              <li>Date of Birth</li>
              <li>Nationality</li>
              <li>Current Residential Address</li>
              <li>Email Address</li>
              <li>Cryptocurrency Wallet Address</li>
              <li>Phone Number</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Document Requirements</h2>
            <p>You must submit valid government-issued identification documents:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Passport:</strong> Full color copy, including all pages</li>
              <li><strong>National ID Card:</strong> Front and back copy</li>
              <li><strong>Driver's License:</strong> Front and back copy</li>
              <li><strong>Proof of Address:</strong> Recent utility bill or bank statement (not older than 3 months)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. KYC Verification Process</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>User submits all required information and documents</li>
              <li>System performs automated checks</li>
              <li>Manual review by compliance team (24-48 hours)</li>
              <li>Biometric verification (liveness check) if required</li>
              <li>Approval or request for additional documentation</li>
              <li>Account fully activated upon approval</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Verification Levels</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Level 1: Basic (Email & Phone)</h4>
                <p>Limit: Browse properties only</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Level 2: Enhanced (ID + Address)</h4>
                <p>Limit: Up to $50,000 per transaction</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-white">Level 3: Full (Biometric + Source of Funds)</h4>
                <p>Limit: Unlimited transactions</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Protection</h2>
            <p>All KYC data is:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Encrypted with AES-256 encryption</li>
              <li>Stored in secure, redundant systems</li>
              <li>Protected by multi-factor authentication</li>
              <li>Accessed only by authorized personnel</li>
              <li>Never shared without your explicit consent (except legal requirement)</li>
              <li>Retained for 5 years for regulatory purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Rejection Reasons</h2>
            <p>KYC verification may be rejected if:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Documents are unclear or illegible</li>
              <li>Information is inconsistent or fraudulent</li>
              <li>Person appears on sanctions lists</li>
              <li>High-risk jurisdiction detection</li>
              <li>Source of funds is suspicious</li>
              <li>Multiple failed verification attempts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Continuous Monitoring</h2>
            <p>
              We perform continuous monitoring of accounts for suspicious activity, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Unusual transaction patterns</li>
              <li>Large or frequent transfers</li>
              <li>Sanctioned list updates</li>
              <li>Geographic risk assessment</li>
              <li>Peer-to-peer network analysis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Account Suspension</h2>
            <p>
              Accounts may be suspended if:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>KYC verification is incomplete</li>
              <li>Suspicious activity is detected</li>
              <li>Terms & Conditions are violated</li>
              <li>Regulatory or legal action is required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Compliance Standards</h2>
            <p>
              RealEstate With Crypto complies with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>FATF Guidelines</li>
              <li>FinCEN Regulations</li>
              <li>GDPR (for EU residents)</li>
              <li>Local KYC/AML requirements</li>
              <li>OFAC Sanctions Screening</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Appeals Process</h2>
            <p>
              If your KYC is rejected, you have 14 days to appeal:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Submit appeal request with additional documentation</li>
              <li>New manual review within 48 hours</li>
              <li>Final decision is binding</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Questions?</h2>
            <p>
              For KYC-related questions, contact:
            </p>
            <p className="mt-4">
              Email: kyc@cryptoproperty.com<br />
              Support: www.cryptoproperty.com/support
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: February 2026<br />
            This policy is subject to change at any time
          </p>
        </div>
      </div>
    </div>
  );
}
