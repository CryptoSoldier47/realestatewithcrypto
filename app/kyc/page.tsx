'use client';

import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import Link from 'next/link';

export default function KYC() {
  const { address, isConnected } = useAccount();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    phone: '',
    documentType: 'passport',
    documentFile: null,
    proofOfAddressFile: null,
    agreedToTerms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [kycStatus, setKycStatus] = useState<'pending' | 'verified' | 'rejected' | null>(null);

  if (!isConnected) {
    return (
      <div className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">KYC Verification Required</h1>
            <p className="text-gray-300 mb-8">Please connect your wallet to begin KYC verification</p>
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-block">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.documentFile) {
      alert('Please fill in all required fields');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/kyc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress: address,
          fullName: formData.fullName,
          email: formData.email,
          documentType: formData.documentType,
          documentUrl: 'ipfs://placeholder',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setKycStatus('pending');
        setStep(3);
      }
    } catch (error) {
      console.error('Error submitting KYC:', error);
      alert('Error submitting KYC');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">KYC Verification</h1>
        <p className="text-gray-400 mb-8">Complete identity verification to unlock all features</p>

        {/* Progress Steps */}
        <div className="mb-8 flex justify-between items-center">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                s <= step ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-400'
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-16 h-1 mx-2 ${s < step ? 'bg-blue-600' : 'bg-slate-700'}`}></div>}
            </div>
          ))}
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Personal Information</h2>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition"
                  placeholder="United States"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-semibold"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Document Upload</h2>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">ID Type *</label>
                <select
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition"
                >
                  <option value="passport">Passport</option>
                  <option value="national_id">National ID Card</option>
                  <option value="drivers_license">Driver's License</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Upload ID Document *</label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) => handleFileChange(e, 'documentFile')}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition"
                />
                {formData.documentFile && <p className="text-green-400 text-sm mt-2">✓ {formData.documentFile.name}</p>}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Proof of Address</label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) => handleFileChange(e, 'proofOfAddressFile')}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none transition"
                />
                {formData.proofOfAddressFile && <p className="text-green-400 text-sm mt-2">✓ {formData.proofOfAddressFile.name}</p>}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-semibold"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Review & Submit</h2>
              </div>

              <div className="bg-slate-700 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wallet:</span>
                  <span className="text-white text-sm">{address}</span>
                </div>
              </div>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <span className="text-gray-300 text-sm">
                  I certify that all information provided is accurate and agree to the{' '}
                  <Link href="/kyc-policy" className="text-blue-400 hover:text-blue-300">KYC Policy</Link>
                </span>
              </label>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition font-semibold"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.agreedToTerms || submitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-2 rounded-lg transition font-semibold"
                >
                  {submitting ? 'Submitting...' : 'Submit for Verification'}
                </button>
              </div>
            </div>
          )}

          {kycStatus === 'pending' && (
            <div className="text-center space-y-4">
              <div className="text-6xl">⏳</div>
              <h2 className="text-2xl font-semibold text-white">Verification in Progress</h2>
              <p className="text-gray-400">Your KYC submission has been received. Verification typically takes 24-48 hours.</p>
              <p className="text-sm text-gray-500">We'll notify you via email when verification is complete.</p>
              <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg">
                Go Back Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
