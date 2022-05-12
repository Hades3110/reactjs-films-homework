const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config({ path: './.env' });

module.exports = {
  mode: 'development',
  target: 'web',
  entry: ['@babel/polyfill', path.resolve(__dirname, './src/index.tsx')],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    clean: true,
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.s(a|c)ss$/i,
        exclude: /\.module.s(a|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.module.s(a|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../fonts/',
            publicPath: '../static/fonts'
          }
        }]
      },
    ],
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ],
};
