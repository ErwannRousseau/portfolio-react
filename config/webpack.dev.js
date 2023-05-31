const paths = require('./paths');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const port = 8085;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    // Recharge uniquement ce qu'il y a besoin
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      // PDF
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      // Video
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'videos/[name].[ext]',
            },
          },
        ],
      },
      // Styles
      {
        test: /\.(s?css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', 
            options: {
              sourceMap: true,
              importLoaders: 2,
              url: {
                filter: (url) => {
                  if (url.includes('charset=utf-8;;')) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  devServer: {
    client: {
      overlay: true,
      logging: 'warn',
    },
    devMiddleware: {
      stats: 'minimal',

    },
    static: {
      directory: paths.build,
    },
    historyApiFallback: true,
    open: false,
    compress: true,
    hot: true,
    port,
  },
});
