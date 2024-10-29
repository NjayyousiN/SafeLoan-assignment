import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  
  assetPrefix: '/SafeLoan-assignment/',  
  basePath: '/SafeLoan-assignment',    
  images: {
      unoptimized: true,  
  },};

export default nextConfig;
