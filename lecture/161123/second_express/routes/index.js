module.exports = function(app){
  app.get('/',function(req,res){
    console.log("this is home. index.js executed");
    res.render("index.ejs");
    // res.send("this is home. \n index.js executed");
  });
}
