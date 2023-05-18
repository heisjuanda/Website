const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
  mode: 'none',
  entry: {
    main: './src/scripts/main.js',
    about: './src/scripts/sections/about.js',
    home: './src/scripts/sections/home.js',
    menu: './src/scripts/sections/menu.js',
    talk: './src/scripts/sections/talk.js',
    trailerM: './src/scripts/sections/trailerMouse.js',
    work: './src/scripts/sections/work.js',
  },
  output: {
    //filename: 'bundle.js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all'
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HeisJuanDa',
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main', 'about', 'home', 'menu', 'talk', 'trailerM', 'work']
    }),
    new HtmlWebpackPlugin({
      title: 'work',
      filename: 'projectPages.html',
      template: './src/projectPages.html',
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ]
};
