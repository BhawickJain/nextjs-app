const isProd = process.env.NODE_ENV === 'production'
const prefixedPath = `/${process.env.REPO_NAME}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: isProd ? prefixedPath : "",
  assetPrefix: isProd ? prefixedPath : "",
};

module.exports = nextConfig;
