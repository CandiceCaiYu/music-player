var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');

module.exports = {
	entry: './app/index.js',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot:true
	},
	plugins: [
		new CleanWebpackPlugin('./dist'),
		new Webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			//filename: 'index.html',
			title: 'Music Player --',
			template: 'index.html',
			//inject: true
		})
	],
	module: {
		// loaders是rules.use的别名
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules'),
				use: [ 
					{ loader: 'babel-loader' }
				],
			
			},
			{
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'less-loader' }
				]
			},
			{
				test: /\.(png|jpg)$/,
				use: 'file-loader'
			},
			{
				test: /\.(mp3|ogg)$/,
				use: 'file-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff)$/,
				use: 'file-loader'
			}
		]
	},
	output: {
		filename: 'boundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}

