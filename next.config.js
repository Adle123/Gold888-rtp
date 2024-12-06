/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://gold888rtp.pics/:path*', // Proxy to this target URL
      },
    ];
  },
};

module.exports = nextConfig;
