var gulp = require('gulp');

/******************************************************************************
 * copy.images
 * Copy copy images files to build directory.
 ******************************************************************************/
gulp.task('copy.images', function() {
  return gulp.src('app/**/*.+(png|jpg|svg|gif|jpeg)')
    .pipe(gulp.dest('www/build'));
});

/******************************************************************************
 * copy.json
 * Copy json files to build directory.
 ******************************************************************************/
gulp.task('copy.json', ['clean'], function(){
  return gulp.src('app/**/*.json')
    .pipe(gulp.dest('www/'));
});
