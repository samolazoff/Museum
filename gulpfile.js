'use strict';

let gulp= require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass')(require('sass'));

    gulp.task('pug', function(){
        return gulp.src('src/pages/index.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('build'));
    })
    
    gulp.task('sass', function(){
        return gulp.src('src/style/main.sass')
        .pipe(sass({
            pretty:true
        }))
        .pipe(gulp.dest('build/style'));
    });
    
    gulp.task('watch', function () {
        gulp.watch('src/pages/**/*.pug', gulp.series('pug'));
        gulp.watch('src/style/**/*.sass', gulp.series('sass'));
        
    })
    
    gulp.task('default', gulp.series (
        gulp.parallel('pug'),
        gulp.parallel('sass'),
        gulp.parallel( 'watch')
    ));