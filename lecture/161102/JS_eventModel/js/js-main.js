function clicker(){
  // window.alert('clicked button element');
  console.log(this);
  this.firstChild.nodeValue = 'this is button. clicked!';
  console.log(window.getComputedStyle(this).width)
}

var query_btn = document.querySelector('.query-btn');
// query_btn.onclick = window.clicker;
query_btn.onclick = clicker.bind(query_btn);


window.onresize=function(){
  console.log(window.innerWidth);
}

window.onscroll=function(){
  console.log(scrollY);
}

function getRandomNumber(number){
  return Math.floor(Math.random()*number);
}

function init(){
  var circles = document.querySelectorAll("[class*='circle-']")
  console.log('circles :',circles)
  for (var i=0; i<circles.length; i++){
    var circle = circles[i];
    console.log('circle ',i,' :',circle);
    console.log("gRN : ",getRandomNumber(100));
    circle.style.top = getRandomNumber(window.innerHeight) + 'px';
    circle.style.left = getRandomNumber(window.innerWidth) + 'px';
    circle.style.opacity = 1;
  }
}

function paraxScroll(){
  console.log(this.scrollY / 20);
}

window.onload=init;
window.onscroll= paraxScroll;

window.onkeydown=function(event){
  console.log(event);
}
