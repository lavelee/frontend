var fs = require('fs'); //file system 모듈. 파일입출력 모듈.
var renderer = require('./renderer.js');


function home(request, response){
  if(request.url === "/"){
    console.log("home page requested")
    renderer(request, response, arguments.callee.name);
  }
}

function otherpage(request, response){
  if(request.url.replace("/","").length>0){
    console.log("other page requested")
    renderer(request, response, arguments.callee.name);
  }
}

function fastcamp(request, response){
  if(request.url.replace("/","")==="fastcamp"){
    console.log("fastcamp page requested")
    renderer(request, response, arguments.callee.name);
  }
}

module.exports.home = home;
module.exports.otherpage = otherpage;
module.exports.fastcamp = fastcamp;
