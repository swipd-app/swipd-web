import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";
import path from "path";

const nextConfig: NextConfig = {
  // Fix workspace root detection when multiple lockfiles exist
  outputFileTracingRoot: path.join(__dirname, "./"),

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

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none'",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

export default withContentlayer(nextConfig);
