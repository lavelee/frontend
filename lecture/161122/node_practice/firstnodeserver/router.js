var fs = require('fs'); //file system 모듈. 파일입출력 모듈.


function home(request, response){
  if(request.url === "/"){
    console.log("home page requested")
    var baseResource = fs.readFileSync("./layout/layout.html","utf8");
    var headerResource = fs.readFileSync("./layout/partials/header.html","utf8");
    var footerResource = fs.readFileSync("./layout/partials/footer.html","utf8");
    var contentsResource = fs.readFileSync("./layout/contents/home.html","utf8");

    baseResource = baseResource.replace("{% header %}", headerResource);
    baseResource = baseResource.replace("{% contents %}", contentsResource);
    baseResource = baseResource.replace("{% footer %}", footerResource);

    response.write(baseResource);
    response.end();

    // fs.readFile("./layout/home.html",function(err, data){
    //   response.write(data);
    //   response.end();
    // });
  }
}

function otherpage(request, response){
  if(request.url.replace("/","").length>0){
    console.log("other page requested")
    var baseResource = fs.readFileSync("./layout/layout.html","utf8");
    var headerResource = fs.readFileSync("./layout/partials/header.html","utf8");
    var footerResource = fs.readFileSync("./layout/partials/footer.html","utf8");
    var contentsResource = fs.readFileSync("./layout/contents/otherpage.html","utf8");

    baseResource = baseResource.replace("{% header %}", headerResource);
    baseResource = baseResource.replace("{% contents %}", contentsResource);
    baseResource = baseResource.replace("{% footer %}", footerResource);

    response.write(baseResource);
    response.end();
    // fs.readFile("./layout/otherpage.html",function(err, data){
    //   response.write(data);
    //   response.end();
    // });
  }
}

function fastcamp(request, response){
  if(request.url.replace("/","")==="fastcamp"){
    console.log("fastcamp page requested")
    var baseResource = fs.readFileSync("./layout/layout.html","utf8");
    var headerResource = fs.readFileSync("./layout/partials/header.html","utf8");
    var footerResource = fs.readFileSync("./layout/partials/footer.html","utf8");
    var contentsResource = fs.readFileSync("./layout/contents/fastcamp.html","utf8");

    baseResource = baseResource.replace("{% header %}", headerResource);
    baseResource = baseResource.replace("{% contents %}", contentsResource);
    baseResource = baseResource.replace("{% footer %}", footerResource);

    response.write(baseResource);
    response.end();
    // fs.readFile("./layout/fastcamp.html",function(err, data){
    //   response.write(data);
    //   response.end();
    // });
  }
}

module.exports.home = home;
module.exports.otherpage = otherpage;
module.exports.fastcamp = fastcamp;
