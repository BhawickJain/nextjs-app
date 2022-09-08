const isProd = process.env.NODE_ENV === 'production'
// solves issue #2
const repoName = Array.from(process.env.GITHUB_REPOSITORY.matchAll(/(.*)\/(.*)/g))[0][2]
const prefixedPath = `/${repoName}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: isProd ? prefixedPath : undefined,
  assetPrefix: isProd ? prefixedPath : undefined,
};

module.exports = nextConfig;
