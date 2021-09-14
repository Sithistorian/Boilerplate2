const path = require('path');
const { VueLoaderPlugin } = require('vue-loader-v16');

module.exports = {

  entry: './client/src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader-v16'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
  // ,

  // resolve: {
  //   extensions: ['.js', '.vue']
  // }

}