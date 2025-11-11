/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?!njengaventures\\.dev).*\\.vercel\\.app',
          },
        ],
        destination: 'https://njengaventures.dev/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
