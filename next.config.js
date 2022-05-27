/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  presets: ['next/babel'],
  plugins: [['babel-plugin-styled-components', { fileName: true, displayName: true, pure: true }]],
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/pagination/:page*',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
