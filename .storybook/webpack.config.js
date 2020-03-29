const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /.(css|scss)$/,
        include: path.resolve(__dirname, '../'),
        loaders: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
    ],
  },
};
