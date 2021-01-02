const withPWA = require("next-pwa");

module.exports = withPWA({
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.node = {
  //       fs: "empty",
  //     };
  //   }

  //   return config;
  // },
  images: {
    domains: ['i.scdn.co'],
  },
  pwa: {
    dest: "public",
  },
});
