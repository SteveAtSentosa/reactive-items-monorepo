/* eslint-disable */
const webpack = require('webpack');

module.exports = {
  mode: 'development', // process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  // entry: {
  //   Category: './src/category/Category',
  //   Item: './src/item/Item',
  // },
  output: {
    path: __dirname + "/dist",
    filename: 'reactive-items.js',
    // filename: '[name].js',
    library: 'reactiveItems',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  externals: [
    'react',
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};


