/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com", 
      },
      {
        protocol: "https",
        hostname: "photos.app.goo.gl"
      },
    ],
  },
};

export default nextConfig;

