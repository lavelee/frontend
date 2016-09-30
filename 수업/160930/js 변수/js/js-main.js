var model= '데이터 리스트';
var current_state = '200';
var is_finished = 'false';
var container_el ='none';
var myname;

var model_alt=model;

console.log('model :',model);
console.log('model_alt :',model_alt);
console.log(model===model_alt);

model_alt=model_alt+'df';
console.log('model :',model);
console.log('model_alt :',model_alt);
console.log(model===model_alt);


var my_parent=document.getElementById('parent');
// var my_child1=parent.document.getElementsByTagName('div')
var my_child1=document.getElementById('child-one');
var my_child2=document.getElementById('child-two');
console.log('child-one :',my_child1);
console.log('child-two :',my_child2);

// 강제로 스타일 먹이기
my_child1.style.border="1px solid black"
my_child2.style.border="3px solid lime"
