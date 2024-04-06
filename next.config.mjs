/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
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
  // plugins: [
  //   ['@babel/plugin-transform-react-jsx', { throwIfNamespace: false }]
  // ]
};

export default nextConfig;
