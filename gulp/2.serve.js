'use strict';

let gulp = require('gulp');
let reload = global.browserSync.reload;
let url = require('url');
let fs = require('fs');

gulp.task('browsersync', () => {
  global.browserSync.init({
    server: [global.paths.src],
    ghostMode: true,
  });

  gulp.watch([global.paths.html, global.paths.js]).on('change', reload);
  gulp.watch(global.paths.scss, { usePolling: true }, gulp.series('css'));
});

gulp.task('serve', gulp.series('css', 'browsersync'));