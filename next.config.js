const ghPages = process.env.DEPLOY_TARGET === "gh-pages";
const reponame = "/nextjs-app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: ghPages ? reponame : "",
  assetPrefix: ghPages ? reponame : "",
};

module.exports = nextConfig;
