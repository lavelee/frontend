var boxes = document.querySelectorAll('.box');
console.log(boxes);
    var e= 1;
    var b= 2;

    var fn = function(event,e,b){
      //리스너에 외부 변수를 전달하고싶다.
      console.log(e); //이벤트 객체 리턴됨
      console.log(b); //undefined
      console.log(event);
    };

  for (var i=0; i<boxes.length; i++){
    var box = boxes[i];
    box.addEventListener('click',fn,false);
    // box.addEventListener('click',fn.bind(box, e, b),false);
  }
