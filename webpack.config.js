var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');

module.exports = {
	entry: './app/index.js',
	devtool: 'source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin()
	],
	module: {
		// loaders是rules.use的别名
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: ['babel-loader'],
			
			},
			{
				test: /\.less$/,
				use: [ 'style-loader','css-loader' , 'less-loader' ]
			},
			{
				test: /\.(png|jpg|mp3|ogg|eot|svg|ttf|woff)$/,
				use: ['file-loader']
			}
		]
	},
	output: {
		filename: 'boundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}

