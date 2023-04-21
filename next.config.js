/** @type {import('next').NextConfig} */
const repo = "test-for-hosting-Nextjs-on-Githubio";
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,

  output: "export",
};
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
