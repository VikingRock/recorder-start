'use strict';

var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var JSAssets = [
  'jquery/dist/jquery.min.js',
  'lightslider/dist/js/lightslider.min.js'
];

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname)
  },

  entry: './source/js/main.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname),
    sourceMapFilename: '[file].map'
  },

  plugins: [
    new CopyWebpackPlugin(
      JSAssets.map(function(asset) {
        return {
          from: path.resolve(__dirname, './node_modules/' + asset),
          to: path.resolve(__dirname, './libs')
        };
      })
    ),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './node_modules/lightslider/dist/css/lightslider.min.css'),
        to: path.resolve(__dirname, '../css/libs') }])
  ],


  resolve: {
    modulesDirectories: ['node_modules', './source/js', './lib', './vendor']
  }
};
