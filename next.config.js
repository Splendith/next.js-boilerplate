const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('./.next_config/load-images');
const withFonts = require('./.next_config/load-fonts');

module.exports = withFonts(withImages(withSass(withCSS({
  webpack: (configParam, { isServer }) => {
    let config = configParam;

    if (!isServer) {
      config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
    }

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
}))));
