import type { NextConfig } from "next";

const nextConfig = {
  // GitHub Pages configuration (uncomment when needed)
  //   output: "export",
  //   assetPrefix: "/SafeLoan-assignment/",
  //   basePath: "/SafeLoan-assignment",
  images: {
    unoptimized: true,
    // Image configuration for remote patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "safeloan-db.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
