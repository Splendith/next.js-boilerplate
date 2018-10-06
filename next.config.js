const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('./.next_config/load-images.config');
const withFonts = require('./.next_config/load-fonts.config');
const withSassVars = require('./.next_config/load-sass-variables.config');

const { ANALYZE } = process.env;

module.exports = withFonts(
  withImages(
    withSassVars(
      withSass(
        withCSS({
          distDir: '.build',
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
        }),
      ),
    ),
  ),
);
