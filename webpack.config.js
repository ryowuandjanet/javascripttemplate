const path=require('path');

module.exports={
  entry: {
    app: ['babel-polyfill','./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env','stage-0']
      }
    }]
  },
  devServer: {
    port: 3000
  }
}