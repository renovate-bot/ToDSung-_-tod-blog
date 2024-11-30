/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
