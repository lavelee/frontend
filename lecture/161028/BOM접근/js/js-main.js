(function(global){
  'use strict';
  var timeout = 1000;
  var bg_color = '#8673b3';
  function stylinghashElement (){
    if(window.location.hash){
      var target_element = document.querySelector(window.location.hash);
      console.log(target_element);
    }
    if ( target_element ){
      target_element.style.background = "yellow";
      setTimeout(target_element.style.background = "none",1000)
    }
  }

  var removeStyleTargetElement = function() {
    console.log('try setTimeout');
    };
  global.onload = stylinghashElement;
})(this);
