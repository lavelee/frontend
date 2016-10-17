var num=10;
html = document.querySelector('html');
head = document.querySelector('head');
body = document.querySelector('body');

console.log('html type:', typeChecker(html));
console.log('head type:', typeChecker(head));
console.log('body type:', typeChecker(body));

wrapper = document.querySelector('.wrapper');
slogan = document.querySelector('.slogan');
brand = document.querySelector('.brand');

console.log('wrapper type:', typeChecker(wrapper));
console.log('slogan type:', typeChecker(slogan));
console.log('brand type:', typeChecker(brand));

if(typeChecker(wrapper)==='null'){
  console.info('문서에 wrapper 요소가 존재하는지 다시 확인해보세요');
}
else{
  console.info('문서에서 wrapper 요소를 성공적으로 찾았습니다.');
}

var count = 100;
if (!(count-100)){
  console.log('count 값은',count,' 이고, 연산결과는 0입니다.')
}
if (!(count=count-100)){
  console.log('count 값은',count,' 이고, 연산결과는 0입니다.')
}


if(!document.querySelector('.wrapper').querySelector('.brand')){
  console.log('brand 없다~')
  wrapper.setAttribute('title','brand 없다~ 타이틀 추가~');
}
else{
  console.log('brand 있다~ 타이틀 안추가')
}
