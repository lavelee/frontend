var smallpics = document.querySelectorAll("[class*=row1-2-]");
var bigpics =  document.querySelectorAll("[class*=row1-1-]");
var n_pics= smallpics.length;
var pressed_pic_priv = 1;
function changePic(){
  // console.log(smallpics[i]);
  // console.log(smallpics[i].getAttribute("class"))}
  pressed_pic_now = this.getAttribute("class").slice(n_pics-1,n_pics);
  if(pressed_pic_now===pressed_pic_priv){
    return;
  }
  bigpics[pressed_pic_priv-1].classList.remove("top");
  bigpics[pressed_pic_now-1].classList.add("top");
  console.log("before pressed : ",pressed_pic_priv);
  pressed_pic_priv=pressed_pic_now;
  console.log("after pressed : ",pressed_pic_now);
}


for(var i=0; i <n_pics; i++){
  // console.log(smallpics[i]);
  smallpics[i].onclick= changePic
  }
