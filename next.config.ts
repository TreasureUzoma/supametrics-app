import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.iconify.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google profile pictures
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // GitHub profile pictures
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: "https://supametricsdocs.vercel.app",
      },
      {
        source: "/docs/:path+",
        destination: "https://supametricsdocs.vercel.app/docs/:path+",
      },
      {
        source: "/docs/_next/:path+",
        destination: "https://supametricsdocs.vercel.app/_next/:path+",
      },
    ];
  },
};

export default nextConfig;
