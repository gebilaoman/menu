var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: {
    'single': ['./examples/single.js'],
    'multiple': ['./examples/multiple.js'],
    'scrollable': ['./examples/scrollable.js']
  },

  output: {
    path: path.join(__dirname, 'build', 'examples'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'},
      {test: /\.css/, loader: 'style!css'},
      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}
    ]
  },

  resolve: {
    root: __dirname,
    alias: {
      'rc-menu/assets/index.css': 'assets/index.css',
      'rc-menu': 'index.js'
    }
  },
  plugins: [
    // ./robot is automatically detected as common module and extracted
    new webpack.optimize.CommonsChunkPlugin("common.js")
  ]
};