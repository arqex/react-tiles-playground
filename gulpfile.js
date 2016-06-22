var gulp = require('gulp'),
  wp = require('webpack'),
	webpack = require('gulp-webpack'),
  del = require('del'),
  Path = require('path')
;

var config = require('./webpack.config.js');

config.entry = ['./src/boot.js'];
config.output.path = Path.join( __dirname, 'public/assets' );
config.module.loaders[0].loaders = ['babel'];
config.module.plugins = [
  // Set production
	new wp.DefinePlugin({
		'process.env': { NODE_ENV: '"production"'}
	})
];

gulp.task("clean", function(){
  return del('public/**/*');
});

gulp.task("copy", ["clean"], function(){
  return gulp.src("./assets/**/*")
    .pipe( gulp.dest("public/assets") )
  ;
});

gulp.task("copyIndex", ["copy"], function(){
  return gulp.src("./index.html")
    .pipe( gulp.dest("public") )
  ;
});

gulp.task("build", ["copyIndex"], function(){
  return gulp.src("src/boot.js")
    .pipe( webpack( config ) )
    .pipe( gulp.dest("public/assets") )
  ;
});

gulp.task("default", ["build"]);
