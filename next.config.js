const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';
const reponame = 'nextjs-app';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images.unoptimized = true,
  basePath: ghPages? reponame : '',
  assetPrefix: ghPages ? reponame : '',
}

module.exports = nextConfig
