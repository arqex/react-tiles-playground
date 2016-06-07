'use strict';

var Path = require('path'),
	webpack = require('webpack'),
	autoprefixer = require('autoprefixer-core')
;

var paths = {
	src: Path.join( __dirname, 'src' )
}

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3030',
		'webpack/hot/only-dev-server',
		'./src/boot.js'
	],
	output: {
		path: Path.join( __dirname, 'assets' ),
		publicPath: 'http://localhost:3030/assets/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.scss$/, loader: "style!css!postcss-loader!sass" }
		]
	},
	postcss: [ autoprefixer ],
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss'],
		alias: {
			src: paths.src,
			assets: Path.join( __dirname, 'assets' ),
			components: Path.join( paths.src, 'ui/components'),
			lib: Path.join( paths.src, 'lib')
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devtool: 'source-map'
};
