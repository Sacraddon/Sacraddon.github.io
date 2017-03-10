var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
// var ngAnnotate = require('gulp-ng-annotate');
var smushit = require('gulp-smushit');


gulp.task('minify-js', function () {
    gulp.src('js/**/*')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function() {
    gulp.src('css/*.css')
        .pipe(concat('main.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function(){
    gulp.src('images/*')
        .pipe(smushit())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('pages', function(){
    gulp.src('*.html')
        .pipe(gulp.dest('dist'));
});


gulp.task('default', function() {
    gulp.start('minify-js', 'minify-css', 'images','pages');
    gulp.watch('src/js/*.js', ['minify-js']);
    gulp.watch('src/css/*.css', ['minify-css']);
    gulp.watch('src/img/**/*.*', ['images']);
});
