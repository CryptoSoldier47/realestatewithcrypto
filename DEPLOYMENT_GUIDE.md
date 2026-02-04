# RealEstate With Crypto - Complete Deployment Guide

## 🚀 Project Overview

**Website:** www.cryptoproperty.com (cryptoproperty.vercel.app for free deployment)
**Platform:** Decentralized real estate marketplace with smart contract escrow
**Commission:** 1% per transaction
**Wallet Address:** 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84
**TRON Address:** TKkpYpPfJmEw8yxXDJLPuAFbmYi7jo7JKR
**Arbitrum Address:** 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84

---

## 📋 Project Structure

```
RealEstateWithCrypto/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Main layout with wallet provider
│   ├── page.tsx                 # Landing page
│   ├── marketplace/page.tsx      # Property marketplace
│   ├── dashboard/page.tsx        # User dashboard
│   ├── kyc/page.tsx             # KYC verification form
│   ├── terms/page.tsx           # Terms & Conditions
│   ├── privacy/page.tsx         # Privacy Policy
│   ├── kyc-policy/page.tsx      # KYC Policy
│   ├── smart-agreement/page.tsx # Smart Agreement
│   ├── investor-pitch/page.tsx  # Investor Pitch Deck
│   ├── about/page.tsx           # About page
│   └── api/                     # API routes
│       ├── properties.ts        # Property management
│       ├── kyc.ts              # KYC verification
│       └── deals.ts            # Deal management
├── components/                   # React components
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer
│   └── WalletConnectProvider.jsx # Wallet connection
├── contracts/                    # Solidity smart contracts
│   ├── RealEstateEscrow.sol     # ETH/Polygon/Arbitrum escrow
│   └── RealEstateEscrowUSDT.sol # USDT escrow for TRON
├── lib/                          # Utilities
│   └── wallet.tsx              # Wallet utilities
├── pages/                        # API routes (pages router)
│   └── api/
│       ├── properties.ts
│       ├── kyc.ts
│       └── deals.ts
├── public/                       # Static assets
├── styles/                       # Global styles
│   └── globals.css
├── .env.local                    # Environment variables
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.js               # Next.js config
├── tailwind.config.js           # Tailwind config
└── postcss.config.js            # PostCSS config
```

---

## 🛠️ Installation & Setup

### Step 1: Clone or Download the Project

```bash
cd Desktop
git clone https://github.com/YOUR_USERNAME/cryptoproperty.git
cd cryptoproperty
```

### Step 2: Install Dependencies

```bash
npm install --legacy-peer-deps --force
```

### Step 3: Configure Environment Variables

Create `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://cryptoproperty.vercel.app
NEXT_PUBLIC_WALLET_ADDRESS=0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84
NEXT_PUBLIC_TRON_ADDRESS=TKkpYpPfJmEw8yxXDJLPuAFbmYi7jo7JKR
NEXT_PUBLIC_ARBITRUM_ADDRESS=0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/realestate
JWT_SECRET=your-secret-key-here
KYC_API_KEY=your-kyc-api-key
ADMIN_PASSWORD=secure-admin-password
NEXT_PUBLIC_WALLET_CONNECT_ID=your-walletconnect-project-id
```

### Step 4: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to test locally.

---

## 🔗 Smart Contracts Deployment

### Ethereum / Polygon / Arbitrum

1. **Compile Contracts:**
   ```bash
   npx hardhat compile
   ```

2. **Deploy to Polygon (Recommended for testing):**
   ```bash
   npx hardhat run scripts/deploy.js --network polygon
   ```

3. **Contract Addresses to Update:**
   - Update `NEXT_PUBLIC_ESCROW_ADDRESS` in `.env.local`
   - Update contract imports in components

### TRON Deployment

1. Use **TRON IDE**: https://ide.tron.network
2. Copy `RealEstateEscrowUSDT.sol` to TRON IDE
3. Compile and deploy to TRON mainnet
4. Record contract address for TRON integration

---

## 🌐 GitHub Setup

### Step 1: Initialize Git Locally

```bash
git init
git add .
git commit -m "Initial commit: Complete RealEstate With Crypto platform"
```

### Step 2: Configure Git User (First Time)

```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
```

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Create new repository: `cryptoproperty`
3. Do NOT initialize with README (you have one locally)

### Step 4: Connect Local to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cryptoproperty.git
git push -u origin main
```

### Step 5: Authenticate with GitHub

When prompted, choose one of:
- **Sign in with browser** (Recommended) - Opens browser for authentication
- **Sign in with code** - Use GitHub CLI

---

## 🚀 Vercel Deployment (Free)

### Step 1: Go to Vercel

Visit https://vercel.com/import

### Step 2: Import from GitHub

1. Click "Import Project"
2. Select GitHub repository: `cryptoproperty`
3. Vercel auto-detects Next.js

### Step 3: Configure Environment Variables

Add all variables from `.env.local`:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WALLET_ADDRESS`
- `NEXT_PUBLIC_TRON_ADDRESS`
- `MONGODB_URI`
- `JWT_SECRET`
- etc.

### Step 4: Deploy

Click "Deploy" and wait for completion.

**Your app will be live at:** `https://cryptoproperty.vercel.app`

### Step 5: Connect Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add custom domain: `www.cryptoproperty.com`
3. Follow DNS instructions from your domain provider
4. Enable SSL/TLS (automatic with Vercel)

---

## 🔐 Security Checklist

- [ ] Private keys never stored in code
- [ ] Environment variables configured
- [ ] HTTPS enabled
- [ ] KYC/AML implemented
- [ ] Smart contracts audited
- [ ] Wallet addresses verified
- [ ] API rate limiting enabled
- [ ] CORS configured correctly

---

## 📱 Supported Wallets

- MetaMask
- Trust Wallet
- Exodus
- Bitget Wallet
- WalletConnect (all compatible wallets)

---

## ⚙️ Multi-Chain Configuration

### Ethereum (Mainnet)
- Network: 1
- RPC: https://eth-mainnet.alchemyapi.io
- Commission Wallet: 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84

### Polygon
- Network: 137
- RPC: https://polygon-rpc.com
- Commission Wallet: 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84

### Arbitrum
- Network: 42161
- RPC: https://arb1.arbitrum.io/rpc
- Commission Wallet: 0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84

### TRON
- Network: TRON Mainnet
- Commission Wallet: TKkpYpPfJmEw8yxXDJLPuAFbmYi7jo7JKR

---

## 📊 Features

✅ Multi-chain escrow (ETH, Polygon, Arbitrum, TRON)
✅ Smart contract security
✅ Full KYC/AML verification
✅ Real-time marketplace
✅ Admin dashboard
✅ Investor pitch deck
✅ Legal compliance pages
✅ Multi-wallet support
✅ 1% commission model
✅ White-label ready

---

## 🔄 Smart Agreement & Terms

All transactions are governed by:
1. **Smart Contract Terms** - Enforceable via blockchain
2. **Terms & Conditions** - Legal agreement
3. **KYC Policy** - Identity verification
4. **Smart Agreement** - Purchase contract

Commission: **1% automatically deducted from transactions**
Destination: **0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84**

---

## 📚 Testing

### Local Testing
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run start
```

### Run Tests
```bash
npm run test
```

---

## 🤝 Partnership & White-Label

This platform is available for:
- Cryptocurrency exchanges
- Fintech companies
- Real estate brokers
- Investment firms

For white-label inquiries, contact: partners@cryptoproperty.com

---

## 📞 Support

- Website: www.cryptoproperty.com
- Email: support@cryptoproperty.com
- Telegram: @CryptoProperty
- Discord: [Discord Server Link]

---

## 📄 License

This project is proprietary and confidential.

---

**Version:** 1.0.0
**Last Updated:** February 2026
**Status:** Production Ready ✅
