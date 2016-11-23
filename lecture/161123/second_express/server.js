var express = require('express');
var app = express();
var indexRouter = require("./routes/index.js")(app);
var aboutRouter = require("./routes/about.js")(app);

app.set('port', process.env.PORT || 3030);
app.set("views", __dirname + "/views"); //루트폴더아래 views 폴더를 가리킨다고 설정. 안그러면 전체경로 매번써야됨
app.set("view engine", "ejs");
//views 안에 html파일이 있을때 ejs 가 랜더링하게. 이거 안하면 html 을 read해서 넣어줘야하거나 html 모듈을 써야함.
app.engine("html", require('ejs').renderFile);

app.use(function(req,res){
  res.type("text/plain");
  res.status("404");
  res.send("404 - Not found");
});
app.use(function(req,res){
  res.type("text/plain");
  res.status("500");
  res.send("500 - server error");
});


app.listen(app.get('port'), function() {
 console.log('Second Express Server is running at localhost:' + app.get('port'));
});
