import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://si.keen.com/memberphotos/**')],
  },
};

export default nextConfig;
