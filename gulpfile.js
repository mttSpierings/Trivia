var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync').create();
 
gulp.task('tscompile', function () {
    return gulp.src('js/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'main.js'
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on('change',browserSync.reload);
});

gulp.task('default', ['tscompile','browser-sync'])
