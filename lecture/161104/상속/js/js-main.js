function obj(){
  this.func=function(){
    return "클래스의 함수입니다";
  }
  obj.prototype.proto_func=function(){
    return "프로토타입의 함수입니다";
  }
}
// console.log(obj);
var a = new obj;
console.log("실행전 오브젝트 :",a);
console.log("인스턴스화 전 obj의 함수 : ",obj.func);
console.log("인스턴스화 전 obj의 prototype의 함수 : ",obj.prototype.proto_func);
console.log("인스턴스화 후 obj의 함수실행 : ",console.log(a.func()));
console.log("인스턴스화 후 obj의 prototype 함수실행 : ",console.log(a.proto_func()));

obj.prototype.proto_func1=function(){
  return "변경한 프로토타입의 함수입니다";}

console.log("------------------------------------");

console.log("실행전 오브젝트 :",a);
console.log("인스턴스화 전 obj의 함수 : ",obj.func1);
console.log("인스턴스화 전 obj의 prototype의 함수 : ",obj.prototype.proto_func1);
// console.log("인스턴스화 후 obj의 함수실행 : ",console.log(a.func1()));
console.log("인스턴스화 후 obj의 prototype 함수실행 : ",console.log(a.proto_func1()));





// function test_obj(){
//   this.test_var = 10
// }
//
// console.log(new test_obj);
