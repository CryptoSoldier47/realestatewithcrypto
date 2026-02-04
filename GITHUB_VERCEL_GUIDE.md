# Step-by-Step GitHub Setup & Deployment Guide

## Part 1: GitHub Repository Setup

### Step 1️⃣: Create GitHub Account (If you don't have one)

1. Go to https://github.com/signup
2. Enter email
3. Create password
4. Choose username (e.g., `CryptoSoldier`)
5. Verify email
6. Complete security challenge

✅ You now have a GitHub account!

---

### Step 2️⃣: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Enter repository name: `cryptoproperty`
3. Add description: "Decentralized real estate marketplace with crypto"
4. Choose: **Public** (for Vercel deployment)
5. ❌ **DO NOT** check "Initialize with README" (we have one locally)
6. ❌ **DO NOT** add .gitignore or license
7. Click **"Create repository"**

✅ Empty repository created!

---

## Part 2: Local Git Configuration

### Step 3️⃣: Open Terminal in Project Folder

1. Open Windows PowerShell or CMD
2. Navigate to project:
   ```bash
   cd C:\Users\MajScale\Desktop\cryptoproperty
   ```

### Step 4️⃣: Configure Git User (First Time Only)

Run these commands:

```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Full Name"
```

Example:
```bash
git config --global user.email "cryptosoldier@email.com"
git config --global user.name "Crypto Soldier"
```

✅ Git user configured!

---

### Step 5️⃣: Initialize Local Repository

```bash
git init
```

This creates a `.git` folder to track changes.

✅ Repository initialized!

---

### Step 6️⃣: Add All Files

```bash
git add .
```

This stages ALL files (including node_modules via .gitignore).

✅ All files staged!

---

### Step 7️⃣: Create First Commit

```bash
git commit -m "Initial commit: Complete RealEstate With Crypto platform"
```

This creates your first snapshot of the project.

✅ Commit created!

---

## Part 3: Connect to GitHub

### Step 8️⃣: Link Local Repository to GitHub

After creating the repository on GitHub, you'll see this command. Run it:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cryptoproperty.git
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

Example:
```bash
git branch -M main
git remote add origin https://github.com/CryptoSoldier/cryptoproperty.git
git push -u origin main
```

---

### Step 9️⃣: GitHub Authentication

When you run `git push`, a window will pop up asking you to sign in.

#### Option A: Browser Sign-In (Recommended) ✅
1. GitHub will open your browser
2. Click **"Authorize Git Credential Manager"**
3. Sign in with your GitHub credentials
4. Grant permissions
5. Return to terminal - you're authenticated!

#### Option B: Personal Access Token
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Create new token with `repo` scope
3. Copy the token
4. Paste token when prompted in terminal

✅ Authentication complete!

---

### Step 🔟: Upload to GitHub

The push should complete automatically:

```
Enumerating objects: 125, done.
Counting objects: 100% (125/125), done.
Delta compression using up to 8 threads
Compressing objects: 100% (112/112), done.
Writing objects: 100% (125/125), 8.5 MiB | 2.4 MiB/s, done.
Total 125 (delta 15), reused 0 (delta 0), pack-reused 0
To https://github.com/YOUR_USERNAME/cryptoproperty.git
 * [new branch]      main -> main
Branch 'main' is set up to track remote branch 'main' from 'origin'.
```

✅ Code uploaded to GitHub!

---

## Part 4: Verify GitHub Repository

### Step 1️⃣1️⃣: Visit Your Repository

1. Go to https://github.com/YOUR_USERNAME/cryptoproperty
2. You should see:
   - All your project files
   - README.md displayed
   - Green "Code" button
   - "Commits" showing 1

✅ Repository verified!

---

## Part 5: Vercel Deployment

### Step 1️⃣2️⃣: Go to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access GitHub

✅ Vercel account connected to GitHub!

---

### Step 1️⃣3️⃣: Import Project from GitHub

1. You'll see "Import Project" button
2. Click **"Import Git Repository"**
3. Paste your repository URL:
   ```
   https://github.com/YOUR_USERNAME/cryptoproperty.git
   ```
4. Click **"Continue"**

Vercel will automatically detect:
- ✅ Next.js framework
- ✅ Node.js runtime
- ✅ Build command

✅ Project detected!

---

### Step 1️⃣4️⃣: Configure Environment Variables

1. Scroll to **"Environment Variables"**
2. Add each variable by clicking **"Add"**:

```
NEXT_PUBLIC_SITE_URL
https://cryptoproperty.vercel.app

NEXT_PUBLIC_WALLET_ADDRESS
0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84

NEXT_PUBLIC_TRON_ADDRESS
TKkpYpPfJmEw8yxXDJLPuAFbmYi7jo7JKR

NEXT_PUBLIC_ARBITRUM_ADDRESS
0xFce89783EDbC7D4261a4Dc908aA36dBD5efA3B84

MONGODB_URI
mongodb+srv://... (leave blank for now)

JWT_SECRET
your-secret-key-here
```

✅ Environment configured!

---

### Step 1️⃣5️⃣: Deploy to Vercel

1. Click **"Deploy"**
2. Vercel will:
   - Clone your repository
   - Install dependencies
   - Build the project
   - Deploy to global CDN

**Wait 3-5 minutes** for deployment to complete.

✅ Deploying...

---

### Step 1️⃣6️⃣: Access Your Live Website

Deployment complete! You'll see:

```
https://realestatewithcrypto.vercel.app
```

**Your website is now LIVE!** 🎉

---

### Step 1️⃣7️⃣: Add Custom Domain (Optional)

To use `www.cryptoproperty.com`:

1. In Vercel dashboard, click **"Settings"**
2. Go to **"Domains"**
3. Click **"Add"**
4. Enter: `cryptoproperty.com`
5. Choose your domain provider (Namecheap, GoDaddy, etc.)
6. Update DNS records as instructed
7. Wait 24 hours for DNS propagation

✅ Custom domain configured!

---

## Part 6: Making Updates

### To Update Code:

1. Make changes locally:
   ```bash
   # Make your code changes
   ```

2. Stage changes:
   ```bash
   git add .
   ```

3. Commit changes:
   ```bash
   git commit -m "Add new feature description"
   ```

4. Push to GitHub:
   ```bash
   git push
   ```

5. Vercel **automatically deploys** your changes!

✅ Auto-deployment enabled!

---

## Troubleshooting

### Issue: "fatal: unable to auto-detect email address"

**Solution:**
```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
```

---

### Issue: "Authentication Failed"

**Solution:**
1. Click the GitHub sign-in window that appears
2. Authorize the Git Credential Manager
3. Try pushing again

---

### Issue: "Permission denied (publickey)"

**Solution:**
1. Set up SSH key on GitHub:
   - Go to GitHub Settings → SSH and GPG keys
   - Add your public SSH key
2. Use SSH URL instead of HTTPS:
   ```bash
   git remote set-url origin git@github.com:USERNAME/cryptoproperty.git
   ```

---

## Commands Reference

| Command | What it does |
|---------|-------------|
| `git init` | Initialize repository |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save changes with message |
| `git push` | Send to GitHub |
| `git pull` | Download latest from GitHub |
| `git status` | Show file status |
| `git log` | Show commit history |
| `git branch` | List branches |

---

## Summary

✅ GitHub repository created
✅ Local files committed
✅ Code pushed to GitHub
✅ Vercel deployment connected
✅ Environment variables configured
✅ Website LIVE at https://cryptoproperty.vercel.app
✅ Auto-deployment enabled
✅ SSL/HTTPS included free

---

## Next Steps

1. **Verify website works:** Visit https://cryptoproperty.vercel.app
2. **Test all pages:** Try marketplace, KYC, dashboard
3. **Connect wallet:** MetaMask or Trust Wallet
4. **Deploy smart contracts:** Polygon testnet for testing
5. **Configure domain:** Add `www.cryptoproperty.com`
6. **Set up database:** Connect MongoDB
7. **Enable KYC integration:** Connect KYC provider API

---

## Support

- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Next.js Docs: https://nextjs.org/docs

---

**Congratulations!** 🎉 Your website is live on the internet!
