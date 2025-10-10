import type { NextConfig } from "next"

const isGithubPages = process.env.GITHUB_PAGES === "true"
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isUserOrOrgPage = Boolean(repositoryName?.endsWith(".github.io"))
const basePath =
  isGithubPages && repositoryName && !isUserOrOrgPage ? `/${repositoryName}` : undefined

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

if (basePath) {
  nextConfig.basePath = basePath
  nextConfig.assetPrefix = basePath
}

nextConfig.env = {
  NEXT_PUBLIC_BASE_PATH: basePath ?? "",
}

export default nextConfig
