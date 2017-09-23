module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname,
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ["vue-loader"]
			}
		]
	}
}