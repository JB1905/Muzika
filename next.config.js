const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ['i.scdn.co'],
  },
  pwa: {
    dest: "public",
  },
});
