var http = require('http'); //http 라는 모듈을 가져와서 http 변수에 지정함. 모듈은 항상 이런모양으로 불러옴.
var router = require('./router.js');

var app = http.createServer(function(request, response){
  console.log(request.url);

  router.home(request, response); //페이지별로 라우팅하려고 하는것.
  router.detail(request, response);

}).listen(process.env.PORT || 3030); //서버를 만들고 포트를 지정.
console.log("process.env.PORT : ",process.env.PORT);      //환경변수 확인. undefined 나와서 3030이 들어감.

//서버에서 볼 로그를 남김.
console.log("first server message passed!");
