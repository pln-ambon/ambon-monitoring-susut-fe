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
  // headers: async () => {
  //   return [
  //     {
  //       // Routes this applies to
  //       source: "/api/(.*)",
  //       // Headers
  //       headers: [
  //         // Allow for specific domains to have access or * for all
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "*",
  //           // DOES NOT WORK
  //           // value: process.env.ALLOWED_ORIGIN,
  //         },
  //         // Allows for specific methods accepted
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET, POST, PUT, DELETE, OPTIONS",
  //         },
  //         // Allows for specific headers accepted (These are a few standard ones)
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value: "Content-Type, Authorization",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
