//타입체커 함수
function typeChecker(data){
  return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}
// console.log(' type:', typeChecker());
