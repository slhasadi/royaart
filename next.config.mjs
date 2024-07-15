/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    domains: ["admin.royaartport.com"],
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "admin.royaartport.com",
    //     port: "",
    //     pathname: "/account123/**",
    //   },
    // ],
  },
  disableStaticImages: true,
  minimumCacheTTL: 3600,
};

export default nextConfig;

// const { i18n } = require("./next-i18next.config");
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n,
//   trailingSlash: true,
//   reactStrictMode: false,
//   images: {
//     domains: [
//       "api.sports.vidaneh.com",
//       "api.landings.q00p.ir",
//       "api.baazigooshi.com",
//       "baazigooshi.com",
//       "itunes.ir",
//       "api.itunes.ir",
//       "api.baazigooshi.q00p.ir",
//       "api.prediction.tika-team.ir",
//       "localhost",
//       "cdn9.vidaneh.com",
//       "cdn12.vidaneh.com",
//       "cdn9.vidaneh.com",
//     ],
//     disableStaticImages: true,
//     minimumCacheTTL: 3600,
//   },
//   basePath: "/majarajoo",
// };

// module.exports = nextConfig;
