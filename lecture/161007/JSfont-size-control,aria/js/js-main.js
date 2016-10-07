document.write("callback script");

var btn_inc = document.querySelector(".button-increase-font-size");
var btn_dec = document.querySelector(".button-decrease-font-size");
var demo_text = document.querySelector(".demo_text_area");

function fontChange(amount,target){
  var current_font_size = window.parseInt(window.getComputedStyle(target).fontSize,10);
  var changed_font_size = current_font_size +amount;
  console.log(amount,"px changed");
  target.style.fontSize=changed_font_size+'px';
}

document.write(btn_inc);
document.write(btn_dec);
document.write(demo_text);

// btn_inc.onclick = function(){
//   console.log("inc clicked!")
//   var current_font_size = window.parseInt(window.getComputedStyle(demo_text).fontSize,10);
//   var changed_font_size = current_font_size +2;
//   demo_text.style.fontSize=changed_font_size+'px';
// };
// btn_dec.onclick = function(){
//   console.log("dec clicked!")
//   var current_font_size = window.parseInt(window.getComputedStyle(demo_text).fontSize,10);
//   var changed_font_size = current_font_size -2;
//     demo_text.style.fontSize=changed_font_size+'px';
// };

btn_inc.onclick = function(){
  fontChange(2,demo_text);}
btn_dec.onclick = function(){
  fontChange(-2,demo_text);}
