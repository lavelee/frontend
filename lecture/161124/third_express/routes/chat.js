module.exports = function(app){
  var io = require('socket.io')(http);
  var http = require('http').Server(app);

  app.get('/chat',function(req,res){
    console.log("chat.js executed");
    res.render("chat.ejs");
    // res.send("about.js executed");


    io.on('connection',function(socket){
      console.log("new user connected");
    });

  });
}
