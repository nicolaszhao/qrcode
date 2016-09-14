var path = require('path');

var webpack = require('webpack'),
	merge = require('webpack-merge'),
	CleanWebpackPlugin = require('clean-webpack-plugin');

var PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist')
};

var package = require('./package.json'),
	libraryName = package.name,
	dependsExternalModules = Object.keys(package.dependencies || {}),
	externalModules = {},
	renv = /^build:([a-z]+)$/,
	TARGET = process.env.npm_lifecycle_event,
	envMatch;

var UpperCamelCase = function(name) {
	return name.split('-').map(function(text) {
		return text.charAt(0).toUpperCase() + text.slice(1)
	}).join('');
};

externalModules = dependsExternalModules.map(function(module) {
	var ret = {};

	if (/^[^-]+-[^-]+$/.test(module)) {
		ret[module] = {
			root: UpperCamelCase(module),
			amd: module,
			commonjs: module,
			commonjs2: module
		};
	} else {
		ret[module] = module;
	}

	return ret;
});

var config = {
	entry: {
		app: path.join(PATHS.app, 'index.js')
	},
	output: {
		path: PATHS.build,
		filename: libraryName + '.js',
		library: UpperCamelCase(libraryName),
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: PATHS.app
			}
		]
	},
	externals: externalModules
};

envMatch = renv.exec(TARGET);

if (envMatch) {
	if (envMatch[1] === 'dev') {
		config = merge(config, {
			plugins: [
				new CleanWebpackPlugin([PATHS.build])
			]
		});
	} else if (envMatch[1] === 'prod') {
		config = merge(config, {
			output: {
				filename: libraryName + '.min.js'
			},
			plugins: [
				new webpack.optimize.UglifyJsPlugin({
					compress: {
						warnings: false
					}
				}),
			]
		});
	}
}

module.exports = config;