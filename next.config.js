const { i18n } = require("./next-i18next.config");

module.exports = {
  experimental: {
    styledComponents: true,
    externalDir: true,
  },

  disableExperimentalFeaturesWarning: true,
  images: {
    domains: ["usaqhakatonu.az"],
  },
  reactStrictMode: true,
  i18n,
};
