/*! app.js © yamoo9.net, 2016 */
'use strict';

/** Sass 파일 로드 -------------------------------------------------------------- */
require('./sass/app.sass');


/** JS 파일 로드 ---------------------------------------------------------------- */
// ※ jQuery, Angular를 포함하여 번들하다 보니 Webpack 처리 속도가 5~10초 단위로 걸림
// 개발 과정에서는 별도로 분리하여 jQuery, Angular를 불러오되, 빌드 과정에서 포함시키는 것이 좋을 듯
// -------------------------------------------------------------------------------

// require('jquery');
// var angular = require('angular');

// console.log('Angular Version:', angular.version.full);
// console.log('jQuery Version:', angular.element().jquery);

// -------------------------------------------------------------------------------
// ※ `webpack.config.js` 설정[135 라인]에 'externals' 설정 추가
// jQuery, Angular를 전역에서 불러오도록 설정
// -------------------------------------------------------------------------------
require('jquery');
var angular = require('angular');

console.log(angular.version.full);
console.log(angular.element.fn.jquery);