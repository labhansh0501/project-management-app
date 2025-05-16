

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns : [
      {
        protocol : "https",
        hostname : "products3-images.s3.eu-north-1.amazonaws.com",
        port: "",
        patname : "/**",
      }
    ]
  }
};

export default nextConfig;
