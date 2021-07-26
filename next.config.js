const { i18n } = require('./next-i18next.config');
module.exports = {
  reactStrictMode: true,
  i18n,
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}
