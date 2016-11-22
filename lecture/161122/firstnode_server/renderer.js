var fs = require('fs');
//단순한 기능이므로 = 뒤에 바로 함수 작성
module.exports = function(request, response, layout_name){
  var baseResource = fs.readFileSync("./layout/layout.html","utf8");
  var headerResource = fs.readFileSync("./layout/partials/header.html","utf8");
  var footerResource = fs.readFileSync("./layout/partials/footer.html","utf8");
  var contentsResource = fs.readFileSync("./layout/contents/"+layout_name+".html","utf8");

  baseResource = baseResource.replace("{% header %}", headerResource);
  baseResource = baseResource.replace("{% contents %}", contentsResource);
  baseResource = baseResource.replace("{% footer %}", footerResource);

  response.write(baseResource);
  response.end();
}
