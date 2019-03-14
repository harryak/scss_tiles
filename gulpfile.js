var gulp = require('gulp');

var autoPrefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    gulpSass = require('gulp-sass');

gulp.task('sass-default', function () {
    return gulp.src('src/scss/tiles.scss')
        .pipe(gulpSass())
        .pipe(autoPrefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('docs'));
});

gulp.task('sass-watch', function () {
    return gulp.watch('src/scss/*.scss', gulp.series('sass-default'));
});