const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './showcase/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    alias: {
      '~/src': path.resolve(__dirname, 'dist-esm'),
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: "ecmascript",
                  jsx: true,
                  decorators: true,
                  dynamicImport: true
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    pragma: 'jsx',
                    importSource: '@emotion/react'
                  },
                  useDefineForClassFields: false
                }
              },
              env: {
                targets: {
                  chrome: "80",
                  firefox: "74",
                  safari: "13",
                  edge: "80",
                },
                mode: "entry",
                coreJs: "3.31.0"
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './showcase/index.html',
      cache: false,
      hash: true
    })
  ]
}
