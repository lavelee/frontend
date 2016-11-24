module.exports = function(app){
  app.get('/users',function(req,res){
    console.log("users.js executed");
    res.render("users.ejs");
    // res.send("about.js executed");
  });
}
