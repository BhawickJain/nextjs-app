const isProd = process.env.DEPLOY_TARGET === "gh-pages";
const repoName = "/nextjs-app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? repoName : "",
};

module.exports = nextConfig;
