/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
