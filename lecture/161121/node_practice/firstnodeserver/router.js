var fs = require('fs'); //file system 모듈. 파일입출력 모듈.


function home(request, response){
  if(request.url === "/"){
    console.log("home page requested")
    fs.readFile("./layout/home.html",function(err, data){
      response.write(data);
      response.end();
    });
  }
}

function otherpage(request, response){
  if(request.url.replace("/","").length>0){
    console.log("other page requested")
    fs.readFile("./layout/otherpage.html",function(err, data){
      response.write(data);
      response.end();
    });
  }
}

function fastcamp(request, response){
if(request.url.replace("/","")==="fastcamp"){
    console.log("fastcamp page requested")
    fs.readFile("./layout/fastcamp.html",function(err, data){
      response.write(data);
      response.end();
    });
  }
}

module.exports.home = home;
module.exports.otherpage = otherpage;
module.exports.fastcamp = fastcamp;
