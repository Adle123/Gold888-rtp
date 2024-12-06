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
        destination: 'https://gold888rtp.pics/:path*', // this is where content is being served
      },
    ]
  },
}

module.exports = nextConfig;
