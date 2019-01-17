const path = require('path')

module.exports = {
  entry: path.resolve('src/index'),
  target: 'node',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: 'ts-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      'node_modules'
    ],
  }
}
