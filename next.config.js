/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "api.microlink.io",
        "images.unsplash.com", // Microlink Image Preview
       'media.licdn.com',
       'upload.wikimedia.org',
      ],
    },
  };
   
  module.exports = nextConfig;