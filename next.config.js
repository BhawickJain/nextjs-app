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
  basePath: ghPages===null ? reponame : "",
  assetPrefix: ghPages===null ? reponame : "",
};

module.exports = nextConfig;
