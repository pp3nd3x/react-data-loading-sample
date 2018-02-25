var webpack = require('webpack');

module.exports = {
  stats: 'verbose',
  target: 'web',
  devtool: 'eval-source-map',
  // watch: true,
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
      'react-hot-loader/patch',
      './client.js'
      // './src/server/index.js'
    ],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader:
          'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-es2015',
            '@babel/preset-stage-0'
          ],
          plugins: ['react-hot-loader/babel']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};
