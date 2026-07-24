/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@sanity/client", "@sanity/image-url"],
};

export default nextConfig;
