var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
      path.resolve(__dirname, 'src/app.jsx')
    ],
    output: {
        filename: '/app.js',
        path: __dirname + '/dist'
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      alias:{
        'settings': './prod'
      }
    },
    plugins: [
      new ExtractTextPlugin('app.css', {allChunks: true}),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    module: {
      preLoaders: [
        {test: /\.jsx$/, loader: "eslint", exclude: /node_modules/}
      ],
      loaders: [
        { test: /\.jsx$/, loaders: ['react-hot','babel'], },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
      ]
    }
};
