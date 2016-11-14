var a = new XMLHttpRequest;
a.open('GET', 'data/data.txt', false);
// window.setTimeout(function(){a.send()},2000);

var ajax_call_btn = document.querySelector('.call-ajax-data');
var ajax_call_result = document.querySelector('.ajax-data-result');
ajax_call_btn.addEventListener('click',callAjaxData);
function callAjaxData(){
  a.send();
  console.log('콜백 Ajax 데이터');
  console.log(a);
  console.log('콜백 Ajax status 데이터');
  console.log(a.status);
  //status 200 = 성공, 나머지는 에러.
  if(a.status===200){
    console.log("데이터 통신에 성공했습니다.");
    ajax_call_result.innerHTML=a.responseText;}
  else{
    console.log("데이터 통신 실패입니다");
    ajax_call_result.innerHTML="에러에러!!!!";
  }
}
