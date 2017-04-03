
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'myApp',
      minify: {
        collapseWhitespace: true //生成被压缩的html文件
      },
      hash: true,
      template: './index.html', // Load a custom template (ejs by default see the FAQ for details)
    })
  ],
  module: {
    rules: [
      {test: /\.css$/, loaders: 'style-loader!css-loader'}
      // {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
}