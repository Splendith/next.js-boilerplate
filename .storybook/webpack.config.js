module.exports = {
  module: {
    rules: [
      {
        test: /.scss$/,
        exclude: /node_modules/,
        loaders: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
    ],
  },
};
