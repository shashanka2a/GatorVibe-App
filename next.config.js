/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to enable Vercel Analytics
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  // Required for Replit environment - allow all hosts for proxy
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
        ],
      },
    ]
  },
  // Allow cross-origin requests in development for Replit
  experimental: {
    allowedDevOrigins: ['*'],
  },
}

module.exports = nextConfig