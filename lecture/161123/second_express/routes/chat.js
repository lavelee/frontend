module.exports = function(app){
  app.get('/chat',function(req,res){
    console.log("chat.js executed");
    res.render("chat.ejs");
    // res.send("about.js executed");
  });
}
