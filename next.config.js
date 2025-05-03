  /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // i18n: {
    //   locales: ['pt-BR', 'en'],
    //   defaultLocale: 'pt-BR',
    // },
    // swcMinify: true,
    // async redirects() {
    //   return [
    //     {
    //       source: '/old',
    //       destination: '/new',
    //       permanent: true,
    //     },
    //   ]
    // },
    // webpack(config) {
    //   config.resolve.fallback = { fs: false };
    //   return config;
    // },
      },
    ],
  },
};

module.exports = nextConfig;