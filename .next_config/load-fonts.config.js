module.exports = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error('This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade');
      }

      config.module.rules.push({
        test: /\.(svg|eot|otf|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/_next/static/fonts/',
            outputPath: 'static/fonts/',
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
