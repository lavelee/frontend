/*! main.js © yamoo9.net, 2016 */
require('jquery');
let angular = require('angular');
let bipan = angular.module('BipanListApp',[]);

//list controller

require('./controller/bipancontroller.js');
require('./filters/readingZeroFilter.js');
