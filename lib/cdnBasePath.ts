const ghPages = process.env.DEPLOY_TARGET === "gh-pages";
// set CDN BASE PATH
const cdnBasePath = ghPages ? 'https://bhawickjain.github.io/nextjs-app/' : ''

export default cdnBasePath