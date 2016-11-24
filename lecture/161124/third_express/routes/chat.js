module.exports = function(app,http){
  //사용할 모듈 부르기

  var io = require('socket.io')(http);

  //라우팅처리
  app.get('/chat',function(req,res){
    console.log("chat.js executed");
    res.render("chat.ejs");
    // res.send("about.js executed");
    });

  //socket.io 를 위한 http 서버 오픈.


  //실제 사용자 접속시 띄울 함수. connection 이라는 단어는 예약어.
  //아래 connection 으로 연결한건 소켓에 정말 연결되었을때 뜨는 내용.
  io.on("connection",function(socket){
    console.log("new user connected!!");
    socket.on("chat message", function(msg){
      io.emit("chat message",msg);
      console.log("message: "+msg);
      // console.log("message ready");
      });
    socket.on("disconnect", function(socket){
      console.log("user disconnected");
      });
    });
};
