'use strict';
let angular = require('angular');
//번들링용
//let angular = require('angular')

angular
  .module('BipanListApp')
  .filter('readingZero',function(){
      return function(input){
        // console.log(arguments);
        return input < 10 ? ('0'+input) : input;
      }
  });
