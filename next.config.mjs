/** @type {import('next').NextConfig} */

const repo   = 'LunagentAI';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath:    '/LunagentAI',
  assetPrefix: '/LunagentAI/',
  trailingSlash: true,
}

export default nextConfig
