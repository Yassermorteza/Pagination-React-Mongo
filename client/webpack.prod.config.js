
const webpack = require('webpack');
const path = require('path');

let config = {
   entry: './main.js',
	
   output: {
      path: path.resolve(__dirname, '../public'),
      filename: 'bundle.js',
   },

   module: {

      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
         }
      ]
   },
   plugins: [
      new webpack.optimize.UglifyJsPlugin({
         compress: {
            warnings: false
         }
      }),

      new webpack.DefinePlugin({
         "process.env": {
            "NODE_ENV": JSON.stringify("production")
         }
      })
   ]
};

module.exports = config;