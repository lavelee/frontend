// 숫자변수를 문자와 합쳐 암시적 문자화
console.log("typeof(9+'')",typeof(9+''));
var n=102;
console.log("typeof(n+'sdf')",typeof(n+'sdf'));


// string() 으로 명시적 문자화
var k = 90120;
console.log('k:',k);
console.log('typeof k:',typeof k);
k=String(k);
console.log('k:',k);
console.log('typeof k:',typeof k);


// .toString() 메서드 사용 : 모든 객체가 쓸수있음. 상속 때문에.
// 8080.tostring() 은 안되지만 띄어쓰기 하거나, .. 하거나 괄호로 묶거나 변수지정하면 됨. 괄호감싸기를 많이 사용.

var target_el = document.getElementsByClassName('target')[0];
console.log(target_el);
var font_size = window.getComputedStyle(target_el).fontSize;
console.log(font_size);
