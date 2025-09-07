/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizePackageImports: ["react", "react-dom"] },
  eslint: { ignoreDuringBuilds: true }
};
export default nextConfig;
