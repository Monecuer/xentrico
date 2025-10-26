/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};
module.exports = nextConfig;
