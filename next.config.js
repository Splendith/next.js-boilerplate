const path = require('path');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('./config/load-images');
const withFonts = require('./config/load-fonts');

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

    config.resolve.alias = {
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      actions: path.resolve(__dirname, 'src/actions/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
    };

    return config;
  },
}))));
