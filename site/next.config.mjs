/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure for GitHub Pages (static export)
  output: 'export',
  images: { unoptimized: true },
  // Helps with routing on GitHub Pages
  trailingSlash: true,
}

export default nextConfig
