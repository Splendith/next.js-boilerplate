const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('./.next_config/load-images');
const withFonts = require('./.next_config/load-fonts');
const withSassVars = require('./.next_config/load-sass-variables');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { ANALYZE } = process.env;
const PRODUCTION = process.env.NODE_ENV === 'production';

const extractCSSPlugin = new ExtractTextPlugin({
  filename: 'static/style-[contenthash].css',
});

module.exports = withFonts(withImages(withSassVars(withSass(withCSS({
  extractCSSPlugin: PRODUCTION ? extractCSSPlugin : undefined,
  webpack: (configParam, { isServer }) => {
    let config = configParam;

    if (!isServer) {
      config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
    }

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true,
      }));
    }
    if (PRODUCTION) {
      config.plugins.push(extractCSSPlugin);
    }

    return config;
  },
})))));
