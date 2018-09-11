module.exports = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error('This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade');
      }

      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            name: '[name]-[hash].[ext]',
          },
        },
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
