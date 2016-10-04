// 숫자 데이터 유형
var k=90;
var l=12.5;
var m=-131;
var n=0;
var y = (k+l-n)*m/k;
console.log('k:',k);
console.log('l:',l);
console.log('m:',m);
console.log('n:',n);
console.log('y:',y);
console.log('typeof k:',typeof(k));
console.log('typeof l:',typeof(l));
console.log('typeof m:',typeof(m));
console.log('typeof n:',typeof(n+" "));
console.log('typeof y:',typeof(y));

// 문자 데이터 유형
var is_html = 'html은 문서 "구조"를 마크업 하는 언어이다.';
var is_css = "css는 \"html문서'를 스타일링 하는 언어이다.";
console.log(is_html)  ;
console.log(is_css);
console.log(is_html+' '+is_css);


// 불리언 유형
var fds_true = true;
var fds_false = false;
console.log('fds_true : ',fds_true);
console.log('fds_false : ',fds_false);
console.log('typeof fds_true : ',typeof fds_true);
console.log('typeof fds_false : ',typeof fds_false);

var n= 0;
var n_1 = -0.33;
var n_2 = ' ';
var n_3 = ' 30';
var n_4 = null;
var n_5;
var n_6="";

console.log('boolean n : ',n,Boolean(n));
console.log('boolean n_1 : ',n_1,Boolean(n_1));
console.log('boolean n_2 : ',n_2,Boolean(n_2));
console.log('boolean n_3 : ',n_3,Boolean(n_3));
console.log('boolean n_4 : ',n_4,Boolean(n_4));
console.log('boolean n_5 : ',n_5,Boolean(n_5));
console.log('boolean n_6 : ',n_6,Boolean(n_6));


//콘솔 스타일링
console.log('-------------- %c ---------','color:#ff0000');
var parent=10;
console.log(parent-3);
