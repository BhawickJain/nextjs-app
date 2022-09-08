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
  basePath: ghPages===null ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  assetPrefix: ghPages===null ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};

module.exports = nextConfig;
