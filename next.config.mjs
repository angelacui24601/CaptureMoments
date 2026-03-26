/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Placeholder images used in the mock portfolio data
      { protocol: "https", hostname: "picsum.photos" },
      // Production uploads stored in Cloudinary
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
