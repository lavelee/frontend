var http = require('http'); //http 라는 모듈을 가져와서 http 변수에 지정함. 모듈은 항상 이런모양으로 불러옴.


http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/plain'}); //어떤값인지 정의,  {'키':'값'} 형태로 넣어줌.
  response.write("Hello FDS!!!");     //실제 전달할 내용,가급적영어.
  response.end();                     //응답을 닫음
}
).listen(process.env.PORT || 3030); //서버를 만들고 포트를 지정..
console.log(process.env.PORT);      //undefined 나와서 3030이 들어감.

//서버에서 볼 로그 남김.
console.log("first server message passed!");
