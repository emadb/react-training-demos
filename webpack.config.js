var path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/app.jsx')
    ],
    output: {
        filename: '/app.js',
        path: __dirname + '/dist'
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
      preLoaders: [
        {test: /\.jsx$/, loader: "eslint", exclude: /node_modules/}
      ],
      loaders: [
        { test: /\.jsx$/, loaders: ['react-hot','babel'], },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
        { test: /\.css$/, loader: 'style!css'}
      ]
    }
};
