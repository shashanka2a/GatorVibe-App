/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to enable Vercel Analytics
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig