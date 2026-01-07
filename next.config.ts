/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js exactly where your project lives
  // so it stops looking for a 'src' folder
  typescript: {
    ignoreBuildErrors: false,
  },
  // If you are on Next.js 16, use this to assist the bundler
  experimental: {
    turbo: {
      resolveAlias: {
        "@/lib/*": ["./app/lib/*"],
        "@/action/*": ["./app/action/*"],
      },
    },
  },
};

export default nextConfig;