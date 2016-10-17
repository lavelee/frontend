var box = document.querySelector('.box');
var popup = document.querySelector('.popup')
box.onfocus=function(){popup.classList.remove('hide')}
box.onblur=function(){popup.classList.add('hide')
document.onkeydown = function(event){
  console.log(event)
  if(event.keyCode===27){
    popup.classList.add('hide')
  }
}}
