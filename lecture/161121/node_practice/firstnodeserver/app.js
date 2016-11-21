var http = require('http'); //http 라는 모듈을 가져와서 http 변수에 지정함. 모듈은 항상 이런모양으로 불러옴.


var app = http.createServer(function(request, response){
  // response.writeHead(200, {'Content-Type':'text/plain'}); //어떤값인지 정의,  {'키':'값'} 형태로 넣어줌.
  // response.write("Hello FDS!!!");     //실제 전달할 내용,가급적영어.
  // response.end();                     //응답을 닫음
  console.log(request.url);

//home 연결시 문자출력
  if (request.url === "/"){
    response.write("this is HOME!!!");
    response.end();                     //응답을 닫음``
  }

//home 이외 연결에 대해 분기
  var detail_id = request.url.replace("/","");
  console.log(detail_id.length); //replace 된 내용의 length 출력 : /123 시 3나옴.

  if(detail_id.length>0){
    response.write("this is not home : "+detail_id);
    //이러면 안됨 : response.write("this is not home : ",deatil_id);
    response.write(detail_id);
    response.end();
  }

}).listen(process.env.PORT || 3030); //서버를 만들고 포트를 지정.
console.log("process.env.PORT : ",process.env.PORT);      //환경변수 확인. undefined 나와서 3030이 들어감.

//서버에서 볼 로그를 남김.
console.log("first server message passed!");
