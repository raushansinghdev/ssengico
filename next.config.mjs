/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ssengico',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
