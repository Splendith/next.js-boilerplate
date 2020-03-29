const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { ANALYZE } = process.env;

module.exports = {
  distDir: '.build',
  // target: 'serverless',

  webpack: (configParam, { isServer }) => {
    const config = configParam;

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }),
      );
    }

    return config;
  },
};
