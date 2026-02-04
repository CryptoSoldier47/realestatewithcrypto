/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  transpilePackages: [
    '@web3modal/wagmi',
    '@web3modal/core',
    '@web3modal/ui',
  ],
  // Domain configuration
  domains: ['www.cryptoproperty.com', 'cryptoproperty.com'],
  // Image optimization for external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cryptoproperty.com',
      },
      {
        protocol: 'https',
        hostname: 'cryptoproperty.com',
      },
    ],
  },
};

module.exports = nextConfig;