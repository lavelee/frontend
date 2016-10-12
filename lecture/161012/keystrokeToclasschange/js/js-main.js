//현재 키 조합이 제대로 동작하지 않음
document.onkeydown = function(event){
  console.log(event.keyCode); //누른 키가 뭔지 표시
  if(event.shiftKey && event.keyCode===71){
    toggleGrid();
    console.log('===========key accepted=============')
  }
}

function toggleGrid(){
  var _container = document.querySelector('.container');
  if(_container.classList.contains('show-grid')){
    _container.classList.remove('show-grid');
  }else{
    _container.classList.add('show-grid');
  }
}
