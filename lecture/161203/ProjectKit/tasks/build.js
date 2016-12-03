/*! build.js © yamoo9.net, 2016 */
'use strict';

let gulp        = require('gulp');
let runSequence = require('run-sequence');
let log         = require('./utils/log');

gulp.task('build', ()=>{
  // 빌드(Build) 설정
  global.y9_build = true;
  // 빌드 상태인지 체크하는 키가 됨.

  runSequence(
    ['clean'],
    ['iconfonts', 'sprites'],
    ['move-fonts', 'html', 'sass', 'webpack-build', 'images']
  );
  log.Y('[[ 빌드 완료 ------------- ]]');
  // 빌드 설정 초기화
  // global.y9_build = false;
});
