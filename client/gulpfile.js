var gulp = require('gulp'),
    gulpWatch = require('gulp-watch'),
    del = require('del'),
    argv = process.argv;

//     requireDir = require('require-dir');

// requireDir('./gulp-task');

// /******************************************************************************
//  * copy.images
//  * Copy copy images files to build directory.
//  ******************************************************************************/
// gulp.task('copy.images', function() {
//   return gulp.src('app/**/*.+(png|jpg|svg|gif|jpeg)')
//     .pipe(gulp.dest('www/build'));
// });

// /******************************************************************************
//  * copy.json
//  * Copy json files to build directory.
//  ******************************************************************************/
// gulp.task('copy.json', ['clean'], function(){
//   return gulp.src('app/**/*.json')
//     .pipe(gulp.dest('www/'));
// });



/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);
gulp.task('build:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

var buildBrowserify = require('ionic-gulp-browserify-typescript');
var buildSass = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');
//
var standard = ['sass', 'html', 'fonts', 'scripts'];

gulp.task('watch', standard, function(){
  gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
  gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
  gulpWatch('app/**/*.json', function(){ gulp.start('copy.json'); });

  return buildBrowserify({ watch: true });
});

gulp.task('build', standard, buildBrowserify);
gulp.task('sass', buildSass);
gulp.task('html', copyHTML);
gulp.task('fonts', copyFonts);
gulp.task('scripts', copyScripts);
gulp.task('clean', function(done){
  del('www/build', done);
});
