/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");


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
		}),
		new PrettierPlugin({
			printWidth: 80,               // Specify the length of line that the printer will wrap on.
			tabWidth: 4,                  // Specify the number of spaces per indentation-level.
			useTabs: false,               // Indent lines with tabs instead of spaces.
			semi: true,                   // Print semicolons at the ends of statements.
			encoding: "utf-8",            // Which encoding scheme to use on files
			extensions: [ ".css", ".graphql", ".js", ".json", ".jsx", ".less", ".sass", ".scss", ".ts", ".tsx", ".vue", ".yaml" ]  // Which file extensions to process
		})
	]
};