var app = require('express')();
var router = require('./routes/main.js')(app);
//exprss 는 express. 이 아니라 express(). 으로 사용함.

app.set("port", process.env.PORT || 3030);
app.set("views", __dirname + "/views"); //앞부분에 뭐가오든 끝이 /view면 views라고 해라 ??
app.set("view engines", "ejs");
app.engine("html",require("ejs").renderFile);
               //
//get은 if로 이루어진 조건 리스너이지, 당장 실행되는 녀석이 아니다.
// app.get('/',function(request,response){
//   // url 이 / 일때는 function 수행한다는 express함수.
//   //주로 루트 주소 하나를 받아서..
//   response.send('Hello Express!');
// });




app.listen(app.get("port") , function(){
  console.log("first express server is running at localhost:"+app.get('port'));
});


app.use(function(req,res){
  res.type("text/plain");
  res.status("404");
  res.send("404 - Not Found");
});
app.use(function(req,res){
  res.type("text/plain");
  res.status("500");
  res.send("500 - Server Error");
});
