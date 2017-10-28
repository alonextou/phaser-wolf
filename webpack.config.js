const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'assets', 'js')
  },

  devServer: {
    publicPath: '/assets/js/',
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  }
}
