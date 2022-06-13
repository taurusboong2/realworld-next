/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  presets: ['next/babel'],
  plugins: [['babel-plugin-styled-components', { fileName: true, displayName: true, pure: true }]],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
