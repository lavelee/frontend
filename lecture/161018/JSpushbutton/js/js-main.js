var toggle_btn = document.querySelector('.ui-button--toggle');

toggle_btn.onclick = function(){
  // console.log('button click')
  if (toggle_btn.classList.contains('pressed')){
    console.log("changed state to unpressed");
    toggle_btn.classList.remove('pressed');
    toggle_btn.textContent='클릭대기'
  }
  else{
    console.log("changed state to pressed");
    toggle_btn.classList.add('pressed');
    toggle_btn.textContent='클릭됨'
  }
}
