const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = merge(common, {
  module: {

    rules: [
          /*
          your other rules for JavaScript transpiling go in here
          */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {minimize: true, sourceMap: false}
            },
            'sass-loader?sourceMap'
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        beautify: false,
        ecma: 6,
        compress: true,
        comments: false
      }
    })
  ]
})
