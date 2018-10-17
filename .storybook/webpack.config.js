const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, '../src/styles/scss/_variables.scss')],
        use: {
          loader: 'sass-extract-loader',
          options: {
            plugins: ['sass-extract-js'],
          },
        },
      },
      {
        test: /.scss$/,
        include: path.resolve(__dirname, '../'),
        loaders: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.(svg|eot|otf|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, '../'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: './static/fonts/',
            outputPath: 'static/fonts/',
            name: '[name]-[hash].[ext]',
          },
        },
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        include: path.resolve(__dirname, '../'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: './static/images/',
            outputPath: 'static/images/',
            name: '[name]-[hash].[ext]',
          },
        },
      },
    ],
  },
};
