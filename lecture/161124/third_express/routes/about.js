module.exports = function(app){
  app.get('/about',function(req,res){
    console.log("about.js executed");
    res.render("about.ejs");
    // res.send("about.js executed");
  });
}
