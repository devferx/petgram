const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
