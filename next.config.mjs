/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.clerk.com'], // Allow Clerk profile images
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
