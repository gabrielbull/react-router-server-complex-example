import path from 'path';
import StatsPlugin from 'stats-webpack-plugin';
import fs from 'fs';

const nodeModules = {};
fs.readdirSync(path.join(__dirname, 'node_modules'))
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = `commonjs ${mod}`);

const config = server => ({
  entry: {
    app: path.join(__dirname, 'src', (server ? 'app.js' : 'client.js'))
  },

  output:{
    path: server ? path.join(__dirname, 'build', 'server') : path.join(__dirname, 'build', 'public'),
    filename: '[name].js',
    chunkFilename: '[id].[hash].js',
    publicPath: '/',
    libraryTarget: (server ? 'commonjs2' : 'var')
  },

  externals: (server ? nodeModules : {}),

  devtool: 'source-map',

  ...(server ? {target: 'node'} : {}),

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules/]
    })
  ]
});

module.exports = [config(true), config(false)];
