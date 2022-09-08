const ghPages = process.env.DEPLOY_TARGET === "gh-pages";
const repoName = "/nextjs-app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: ghPages ? repoName : "",
  assetPrefix: ghPages ? repoName : "",
};

module.exports = nextConfig;
