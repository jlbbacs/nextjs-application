/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removing 'experimental: { turbo: ... }' stops the build warning
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;