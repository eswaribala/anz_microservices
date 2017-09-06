/**
 * Created by BALASUBRAMANIAM on 24/08/2017.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var paths = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',
    tmp: 'tmp',
    tmpInject: 'tmp/injectdemo.html',
    tmpCSS: 'tmp/**/*.css',
    tmpJS: 'tmp/**/*.js',
    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js'
};

gulp.task('default', function () {
    console.log('Gulp is ready to rock!');
});

gulp.task('html', function () {
    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task('css', function () {
    return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
});

gulp.task('js', function () {
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});

gulp.task('copy', ['html', 'css', 'js']);
gulp.task('serve', ['copy'], function () {
    return gulp.src(paths.tmp)
        .pipe(webserver({
            port: 3000,
            livereload: true
        }));
});