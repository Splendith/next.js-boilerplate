const path = require('path');

module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  ...{
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
        );
      }

      config.module.rules.push({
        test: /_variables\.module\.scss$/,
        include: [path.resolve(__dirname, '../src/styles/scss/_variables.module.scss')],
        use: {
          loader: 'sass-extract-loader',
          options: {
            plugins: ['sass-extract-js'],
          },
        },
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  },
});
