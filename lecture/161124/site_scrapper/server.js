var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.set("port", process.env.PORT || 3030);

var boxOffice=[];
request({
  method : 'GET',
  uri: 'https://www.rottentomatoes.com'
}, function(err, res, body){
  console.log("boxOffice at request :",boxOffice);
  if(err) throw err;
  // console.log(body);
  //받아온 body를 파싱하고 필터링하는 부분.
  var $ = cheerio.load(body);
  var movie_info = $('table#Top-Box-Office.movie_list');
  // console.log(movie_info);
  movie_info.each(function(){
    var movieName = $(this).find("td.middle_col").text().replace("  ","").replace("  ","").trim().split("\n");
    var metaScore = $(this).find("td.left_col").text().replace("  ","").replace("  ","").trim().split("\n");
    console.log("movieName :",movieName);
    console.log("metaScore :",metaScore);
    console.log("boxOffice at push :",boxOffice);
    boxOffice.push({"movieName":movieName, "metaScore":metaScore});
  });
  // console.log("boxOffice at end :",boxOffice);
  // console.log("sdfsdsdf",boxOffice[0]["movieName"]);
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("  ","");
  // boxOffice[0]["movieName"].replace("\n","");
  // console.log("boxOffice at end :",boxOffice);
});



app.listen(app.get("port"), function(){
  console.log("server srated at localhost:3030");
});
