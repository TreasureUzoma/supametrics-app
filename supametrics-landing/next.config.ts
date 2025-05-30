import type { NextConfig } from "next";

const DOCS_SITE = process.env.DOCS_SITE || "https://supametricsdocs.vercel.app";
const DASHBOARD_SITE = process.env.DASHBOARD_SITE || "";

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
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: `${DASHBOARD_SITE}/login`,
      },
      {
        source: "/signup",
        destination: `${DASHBOARD_SITE}/signup`,
      },
      {
        source: "/forgot-password",
        destination: `${DASHBOARD_SITE}/forgot-password`,
      },
      {
        source: "/verify-otp",
        destination: `${DASHBOARD_SITE}/verify-otp`,
      },
      {
        source: "/dashboard",
        destination: `${DASHBOARD_SITE}/dashboard`,
      },
      {
        source: "/new",
        destination: `${DASHBOARD_SITE}/new`,
      },
      {
        source: "/settings",
        destination: `${DASHBOARD_SITE}/settings`,
      },
      {
        source: "/docs",
        destination: `${DOCS_SITE}`,
      },
      {
        source: "/docs/:path+",
        destination: `${DOCS_SITE}/docs/:path+`,
      },
      {
        source: "/docs-static/:path+",
        destination: `${DOCS_SITE}/docs-static/:path+`,
      },
      {
        source: "/dashboard-static/:path+",
        destination: `${DASHBOARD_SITE}/dashboard-static/:path+`,
      },
    ];
  },
};

export default nextConfig;
