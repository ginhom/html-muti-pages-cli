const baseWebpackConfig = require('./webpack.base.config.js')

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery', //jquery
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
})
