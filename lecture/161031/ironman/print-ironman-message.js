console.log
var queue = ["111", "222", "333", "444", "555", "666", "777"];
var msg = document.querySelector(".message");
var btn = document.querySelector(".ironman-print-button");
var i=0;

var voice = document.createElement('audio');
voice.setAttribute('src','ironman_repulsor.mp3');

btn.onclick=function(){
  console.log("button clicked")
  msg.textContent = queue[i%queue.length];
  voice.play();
  i++;
}

btn.onmouseleave=function(){
  console.log('leaving')
  voice.pause();
  voice.currentTime=0;
}
