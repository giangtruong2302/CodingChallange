/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  async rewrites() {
    return [
      {
        source: "bank*",
        destination: "https://be-homework.vercel.app/api/bank/api/:path*",
      },
    ];
  },
};
module.exports = nextConfig;
