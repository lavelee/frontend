var app = require('express')();
//exprss 는 express. 이 아니라 express(). 으로 사용함.

app.set("port", process.env.PORT || 3030);

//get은 if로 이루어진 조건 리스너이지, 당장 실행되는 녀석이 아니다.
app.get('/',function(request,response){
  // url 이 / 일때는 function 수행한다는 express함수.
  //주로 루트 주소 하나를 받아서..
  response.send('Hello Express!');
});


app.listen(app.get("port") , function(){
  console.log("first express server is running at localhost:"+app.get('port'));
});


app.use(function(req,res){
  res.type("text/plain");
  res.
});
