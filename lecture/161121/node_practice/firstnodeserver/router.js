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

function detail(request, response){
  if(request.url.replace("/","").length>0){
    console.log("detail page requested")
    fs.readFile("./layout/otherpage.html",function(err, data){
      response.write(data);
      response.end();
    });
  }

}

module.exports.home = home;
module.exports.detail = detail;
