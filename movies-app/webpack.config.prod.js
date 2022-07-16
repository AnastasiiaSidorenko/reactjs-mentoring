const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'src'),
  entry: './index.jsx',

  output: {
    filename: '[name].bundle.[contenthash].js',
    path: path.join(__dirname, 'build'),
    clean: true,
  },

  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        issuer: /\.(js)x?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MoviesApp',
      template: './index.html',
      filename: './index.html',
      minify: { collapseWhitespace: true },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  performance: {
    hints: false,
  },
};
