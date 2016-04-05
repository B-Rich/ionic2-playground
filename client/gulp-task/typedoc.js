var gulp = require('gulp'),
    typedoc = require("gulp-typedoc");

gulp.task("typedoc", function () {
  return gulp
    .src(["app/**/*.ts"])
    .pipe(typedoc({
      module: "commonjs",
      target: "es5",
      includeDeclarations: false,
      experimentalDecorators: true,
      ignoreCompilerErrors: false,
      excludeExternals:true,
      version: true,
      out: "./../docs/",
      name: "m-way Ionic2 Playground"
    }));
});
