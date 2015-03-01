var gulp = require('gulp'),
  babel = require('gulp-babel'),
  mocha = require('gulp-mocha');

gulp.task('default', ['build', 'test']);

gulp.task('build', function(){
  return gulp.src('src/index.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function(){
  return gulp.src('test/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

var w = gulp.watch('**/*.js', ['default']);
w.on('change', function(e){
  console.log('File ' + e.path + ' was ' + e.type + ' running tasks...');
});
