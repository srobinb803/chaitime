import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // THE FIX: Use the new, correct domain
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
