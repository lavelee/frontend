var http = require('http'); //http 라는 모듈을 가져와서 http 변수에 지정함. 모듈은 항상 이런모양으로 불러옴.
var router = require('./router.js');

var app = http.createServer(function(request, response){
  console.log("requested url : "+request.url); //request 확인

  var router_methods=Object.getOwnPropertyNames(router); //router.js가 export한 모든이름 배열
  var found_position = router_methods.indexOf(request.url.slice(1)); //위 배열에 request내용이 있나?

  if(found_position>-1){ //배열에 이름이 있으면
    router[request.url.slice(1)](request, response); //문자열로 함수 부르기
  }
  else{ //없으면 request와 function이름이 다를경우인데 몇개안되니 직접해보게
    router.home(request, response); //요청이 / 하나뿐일 경우
    router.otherpage(request, response); //만들지 않은 페이지를 요청할경우
  }

}).listen(process.env.PORT || 3030); //서버를 만들고 포트를 지정.


//서버가 정상적으로 실행되었을때 한번만 보여줄 서버측 로그.
console.log("process.env.PORT : ",process.env.PORT);      //환경변수 확인. undefined 나와서 3030이 들어감.
console.log("first server message passed!");
