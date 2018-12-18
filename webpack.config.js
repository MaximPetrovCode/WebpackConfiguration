/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		path: path.join(__dirname, "build"),
		filename: "index.bundle.js"
	},
	mode: process.env.NODE_ENV || "development",
	// },
	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"],
		extensions: [".js", ".jsx"],
	},
	devServer: {
		contentBase: path.join(__dirname, "src")
	},
	module: {
		rules: [
			{
				// this is so that we can compile any React,
				// ES6 and above into normal ES5 syntax
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "eslint-loader",
					options: {
						fix: true,
					},
				},
				enforce: "pre"
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				// will let import all sorts of files such as images
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				loaders: ["file-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html")
		})
	]
};