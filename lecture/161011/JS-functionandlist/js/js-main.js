var button,link;
button = document.querySelector('button');
link = document.querySelector('a');

var eventHandler=function(){
  console.log('call me');
};

button.onclick = eventHandler;
link.onmouseover=eventHandler;

var fnObj = new Function('console.log("var fnObj = new Function");');
var fnObjExp = function() {console.log("var fnObjExp = function()");};
function fnObjDec () {
  console.log("function fnObjDec () {");
}

fnObj();
fnObjExp();
fnObjDec();

// var members = new Array('기중','근희','세진');
var members = new Array(); //빈 ()넣어줘야함
members[0] = '기중';
members[1] = '근희';
members[2] = '세진';

console.log('members : ',members);
console.log('members[0] : ',members[0]);

var man=['하낫','둘','셋'];
console.log(man);
man.push('넷');
console.log(man);
console.log('length:',man.length)
man['aaa']='bsdf'
console.log(man);
console.log('length:',man.length)


var navigation={
  'use' : 'Global Navigation Bar',
  'position' : 'top',
  'items' : [
    'home',
    'about',
    'Works',
    'contact'  ],
  makeSubMenu: function() {
    console.log('서브 메뉴를 생성');
  }
}
