const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
//const imagemin = require('gulp-imagemin');

// Minify CSS
gulp.task('minify-css', function() {
    return gulp.src('style/all.css')
        .pipe(cleanCSS())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('style')); // Change destination directory to 'dist/css'
});

// Minify JavaScript
gulp.task('minify-js', function() {
    return gulp.src(['script/vendor/swiper.js', 'script/funcs.js','script/all.js'])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('script')); // Change destination directory to 'dist/js'
});

// Compress Images
gulp.task('compress-images', function() {
    // return gulp.src('img/*')
    //     .pipe(imagemin())
    //     .pipe(gulp.dest('img')); // Change destination directory to 'dist/img'
});

// Watch for changes
gulp.task('watch', function() {
    gulp.watch('style/all.css', gulp.series('minify-css'));
    gulp.watch('script/all.js', gulp.series('minify-js'));
    //gulp.watch('img/*', gulp.series('compress-images')); // Watch for changes in 'img' directory
});

// Default task
gulp.task('gulp',
    gulp.parallel(
        'minify-css',
        'minify-js',
        //'compress-images',
       // 'watch'
    ));
