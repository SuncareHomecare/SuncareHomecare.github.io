/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "https://cdn.statically.io/gh/MD-Transportation/md-transportation.github.io/gh-pages/" : "",
};

module.exports = nextConfig;
