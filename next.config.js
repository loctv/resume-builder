/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      'stories',
      'src/common',
      'src/helpers',
      'src/modules',
      'src/pages',
      'src/styles',
      'src/templates',
    ],
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/editor',
        destination: '/builder',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
