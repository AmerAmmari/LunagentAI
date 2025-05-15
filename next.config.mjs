/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
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
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
}

export default nextConfig
