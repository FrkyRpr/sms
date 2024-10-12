// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/Sign-in',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  