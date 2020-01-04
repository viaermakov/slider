const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'cheap-module-source-map',

  devServer: {
    compress: true,
    port: 9090,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ]
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    })
  ]
});
