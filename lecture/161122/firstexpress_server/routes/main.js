module.exports = function(app){
  app.get('/', function(req,res){
    res.render("../views/index.html");
  })
};


app.get('/',function(request,response){
  // url 이 / 일때는 function 수행한다는 express함수.
  //주로 루트 주소 하나를 받아서..
  response.send('Hello Express!');
});
