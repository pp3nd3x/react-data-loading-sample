var webpack = require('webpack');

module.exports = {
  devtool: 'hidden-source-map',
  entry: {
    app: ['./client.js'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: __dirname + '/dist/assets/',
    // filename: '[name].[chunkhash].js',
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: ['client', 'node_modules']
  },
  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   loader: ExtractTextPlugin.extract(
      //     'style-loader',
      //     'css-loader?localIdentName=[hash:base64]&modules&importLoaders=1'
      //   )
      // },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-es2015',
            '@babel/preset-stage-0'
          ]
        }
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js'
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false,
    //   }
    // })
  ]
};
