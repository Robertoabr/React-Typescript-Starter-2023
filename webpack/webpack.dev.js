const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        router: () => 'http://localhost:5000',
        logLevel: 'debug' /*optional*/
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev_app')
    })
  ]
};
