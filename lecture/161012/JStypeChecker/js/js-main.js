//var singleton pattern
var num = 102,
    str = 'typeof는 함수가 아니다.',
    boo = !false,
    fnc = function(){},
    arr = [num, boo, fnc],
    obj = {'number_type': num, 'boolean': boo}; //마지막에만 ; 찍는다.
    nul = null;

//typeof 를 사용해봅시다
console.log('num 변수에 복사된 데이터 유형 :', typeof(num));
console.log('str 변수에 복사된 데이터 유형 :', typeof(str));
console.log('boo 변수에 복사된 데이터 유형 :', typeof(boo));
console.log('nul 변수에 복사된 데이터 유형 :', typeof(nul));
console.log('fnc 변수에 참조된 데이터 유형 :', typeof(fnc));
console.log('arr 변수에 참조된 데이터 유형 :', typeof(arr));
console.log('obj 변수에 참조된 데이터 유형 :', typeof(obj));
console.log(typeof(num + str));

//a instanceof b -> a가 b에서 만들어진 인스턴스인가?
console.log('obj instance of Object:', obj instanceof Object);
console.log('arr instance of Array:', arr instanceof Array);
console.log('fnc instance of Function:', fnc instanceof Function);
console.log('num instance of Function:', num instanceof Number);

//constructor
//instanceof 가 지정타입에 T/F 만 주는반면 이건 직접 알려줌.
console.log('arr.constructor:', arr.constructor);
console.log('arr.constructor === Array:', arr.constructor === Array);
console.log('num.constructor:', num.constructor);
console.log('num.constructor === Number:', num.constructor === Number);
console.log('fnc.constructor:', fnc.constructor);
console.log('fnc.constructor === Function:', fnc.constructor === Function);
console.log('obj.constructor:', obj.constructor);
console.log('obj.constructor === Object:', obj.constructor === Object);
// console.log('nul.constructor:', nul.constructor);
// console.log('nul.constructor === Object:', obj.constructor === null);



//함수로 만들어쓰자.
function typeChecker(data){
  return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}
console.log('typeChecker(num) :',typeChecker(num));
console.log('typeChecker(str) :',typeChecker(str));
console.log('typeChecker(boo) :',typeChecker(boo));
console.log('typeChecker(nul) :',typeChecker(nul));
console.log('typeChecker(fnc) :',typeChecker(fnc));
console.log('typeChecker(arr) :',typeChecker(arr));
console.log('typeChecker(obj) :',typeChecker(obj));
