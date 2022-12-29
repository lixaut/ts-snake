
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // ts
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      'chrome': '88'
                    },
                    // 指定版本
                    'corejs': '3',
                    // 使用corejs方式：按需加载
                    'useBuiltIns': 'usage'
                  }
                ]
              ]
            }
          }, 
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      // css
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    watchFiles: ['src/**/*']
  },
  mode: 'development'
}