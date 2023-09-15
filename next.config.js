/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "midiumlite.onrender.com",
        port: "",
        pathname: "/blogimages/**",
      },
      {
        protocol: "https",
        hostname: "midiumlite.onrender.com",
        port: "",
        pathname: "/profiles/**",
      },
    ],
  },
};

module.exports = nextConfig;
