# 🌐 Domain Configuration Guide

**Domain:** www.cryptoproperty.com  
**Vercel Subdomain:** cryptoproperty.vercel.app (fallback)  
**Status:** Ready for deployment

---

## 📋 What's Been Configured

✅ **Environment Variables**
- `.env.local` updated with custom domain
- NEXT_PUBLIC_SITE_URL → https://www.cryptoproperty.com

✅ **Next.js Configuration**
- `next.config.js` updated with domain settings
- Image optimization for custom domain
- Domain whitelist configured

✅ **Vercel Configuration**
- `vercel.json` created with security headers
- API route optimization
- Caching policies configured
- Redirect rules set

---

## 🔧 Step-by-Step Domain Setup

### Step 1: Purchase Domain

**Where:** Namecheap, GoDaddy, Google Domains, or Cloudflare

**What to buy:**
- Domain: `cryptoproperty.com`
- Auto-renew: Yes
- Private registration: Recommended
- Email: Set to your business email

**Cost:** ~$10-15/year

---

### Step 2: Connect Domain to Vercel (EASIEST METHOD)

**Vercel will handle DNS for you automatically:**

#### Via Vercel Dashboard:

1. **Login** to https://vercel.com
2. **Select** your `cryptoproperty` project
3. **Go to:** Settings → Domains
4. **Click:** Add Domain
5. **Enter:** `www.cryptoproperty.com`
6. **Select:** "Use Vercel's Nameservers" (Recommended)
7. **Click:** Add
8. **Copy** the 4 nameservers shown
9. **Go to** your domain registrar (Namecheap/GoDaddy)
10. **Navigate to** DNS settings
11. **Replace** nameservers with Vercel's:
    ```
    ns1.vercel-dns.com
    ns2.vercel-dns.com
    ns3.vercel-dns.com
    ns4.vercel-dns.com
    ```
12. **Save** changes
13. **Wait** 24-48 hours for DNS propagation
14. **Verify** in Vercel dashboard (shows ✅ when active)

---

### Step 3: Verify Domain is Live

**Test in 24-48 hours:**

```bash
# Check DNS records
nslookup www.cryptoproperty.com

# Should show Vercel nameservers
Server: 8.8.8.8
Address: 8.8.8.8#53

Non-authoritative answer:
Name:   www.cryptoproperty.com
Address: 76.76.19.165  (Vercel IP)
```

**Visit in browser:**
- https://www.realestatewithcrypto.com
- Should show your website!

---

### Step 4: Set Primary Domain

**In Vercel Dashboard:**

1. **Go to:** Settings → Domains
2. **Find:** `www.realestatewithcrypto.com`
3. **Click:** "Default" button
4. **Confirm:** It now shows as primary

---

### Step 5: Add Apex Domain (Optional)

**Allow cryptoproperty.com (without www) to work:**

1. **In Vercel:** Settings → Domains
2. **Add:** `cryptoproperty.com` (without www)
3. **Add** same nameservers in registrar
4. **In Vercel:** Set up redirect:
   - Redirect `cryptoproperty.com` → `www.cryptoproperty.com`

---

### Step 6: Enable HTTPS & SSL

**Vercel does this AUTOMATICALLY:**

- ✅ Free SSL certificate via Let's Encrypt
- ✅ Auto-renewal every 90 days
- ✅ All traffic forced to HTTPS
- ✅ No configuration needed

**Verify:**
- Visit https://www.cryptoproperty.com
- Click lock icon in browser
- Shows valid SSL certificate

---

## 🔒 Security Configuration

**All set in vercel.json:**

```json
{
  "headers": [
    {
      "key": "X-Frame-Options",
      "value": "SAMEORIGIN"           // Prevent clickjacking
    },
    {
      "key": "X-Content-Type-Options",
      "value": "nosniff"              // Prevent MIME sniffing
    },
    {
      "key": "X-XSS-Protection",
      "value": "1; mode=block"        // Block XSS attacks
    },
    {
      "key": "Referrer-Policy",
      "value": "strict-origin"        // Privacy-friendly
    },
    {
      "key": "Permissions-Policy",
      "value": "geolocation=(), microphone=(), camera=()"
    }
  ]
}
```

---

## 📊 DNS Records Summary

**What Vercel Creates:**

| Type | Host | Target | TTL |
|------|------|--------|-----|
| NS | @ | ns1.vercel-dns.com | 3600 |
| NS | @ | ns2.vercel-dns.com | 3600 |
| NS | @ | ns3.vercel-dns.com | 3600 |
| NS | @ | ns4.vercel-dns.com | 3600 |
| A | www | 76.76.19.165 | 3600 |
| CNAME | @ | cname.vercel-dns.com | 3600 |

**You don't need to manually add these - Vercel handles it!**

---

## ✅ Deployment Checklist

Before deploying to custom domain:

- [ ] Domain purchased
- [ ] Nameservers updated in registrar
- [ ] Domain added to Vercel
- [ ] DNS propagation complete (24-48h)
- [ ] HTTPS working
- [ ] Website loads at https://www.cryptoproperty.com
- [ ] Set as primary domain in Vercel
- [ ] Apex domain redirect configured (optional)
- [ ] Email forwarders configured (optional)

---

## 🚀 After Domain Setup

### Email Configuration (Optional)

**Use custom email like `hello@cryptoproperty.com`:**

**Via Vercel's Email Integration:**
1. Settings → Integrations
2. Search: "Email"
3. Connect service (Sendgrid, Mailgun, etc.)

**Or use:**
- Cloudflare Email Routing (free)
- Google Workspace ($6/user/month)
- Zoho Mail (free for basic)

---

### Redirect Non-WWW Traffic

**Make `cryptoproperty.com` redirect to `www`:**

**In Vercel Settings → Redirects:**
```
From: cryptoproperty.com
To: www.cryptoproperty.com
Status: 301 (permanent)
```

---

### Monitor Domain Health

**In Vercel Dashboard:**
- ✅ All domains show green checkmark
- ✅ SSL certificate valid
- ✅ No DNS errors
- ✅ Performance metrics visible

---

## 🆘 Troubleshooting

### Domain Shows "Not Found"

**Issue:** DNS hasn't propagated yet

**Fix:**
1. Wait 24-48 hours
2. Clear browser cache (Ctrl+Shift+Del)
3. Try in incognito/private mode
4. Check DNS status: https://www.whatsmydns.net

### Domain Points to Wrong IP

**Issue:** Old DNS records still cached

**Fix:**
1. Verify nameservers in registrar
2. Check Vercel shows "Active" (green)
3. Flush DNS: `ipconfig /flushdns` (Windows)
4. Wait 24 hours for full propagation

### SSL Certificate Error

**Issue:** HTTPS shows warning

**Fix:**
- Vercel issues cert automatically
- Usually takes 5-10 minutes
- Refresh page after waiting
- Check browser accepts www prefix

### Email Not Working

**Issue:** Email routing fails

**Fix:**
1. Verify MX records added
2. Check domain ownership
3. Use Vercel email service or external provider
4. Test with simple email first

---

## 📞 Support Resources

**Vercel Domain Support:**
- Docs: https://vercel.com/docs/concepts/projects/domains/introduction
- Dashboard: https://vercel.com/dashboard

**DNS Propagation Checker:**
- https://www.whatsmydns.net
- https://mxtoolbox.com

**SSL Certificate Checker:**
- https://www.sslshopper.com/ssl-checker.html

---

## 🎉 You're All Set!

**Your configuration is ready:**

✅ `.env.local` → Uses www.cryptoproperty.com  
✅ `next.config.js` → Domain optimized  
✅ `vercel.json` → Security + caching configured  

**Next step:** Push to GitHub, deploy to Vercel, and add your domain!

```bash
# Push latest config
git add .
git commit -m "Rebrand to CryptoProperty.com"
git push
```

**Then follow:** GITHUB_VERCEL_GUIDE.md (Step 12-17)

---

**Version:** 1.0.0  
**Status:** Ready for production  
**Domain:** www.cryptoproperty.com
