import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Modern JavaScript - disable unnecessary polyfills for modern browsers
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Enable compression
  compress: true,
};

export default nextConfig;
