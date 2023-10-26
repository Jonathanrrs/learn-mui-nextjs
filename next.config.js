/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/:custom/display",
          destination: "/display",
        },
      ],
    };
  },
};

module.exports = nextConfig;
