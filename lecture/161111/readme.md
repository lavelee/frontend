###### Front-End Develop SCHOOL

# DAY 28
- __indicator__: Radio Button


<!-- ---
## 1. indicator
인스턴스를 생성해야만 쓸 수 있는 메서드를 의미한다. <-> static메서드, 클래스 메서드
--- -->


<!-- ### 1-1. 요소의 스타일 설정(복습) : jQueryObj.`css()`
- http://api.jquery.com/css/
- 여러 요소를 가져와 속성값을 순회하며 변경하는 예제
```js
코드코드
```
#### CSS속성 하나 가져오기 .css( `'CSS속성제목'` );
  - r -->



---

## 1. Class를 이용해 indicator 만들기.

---
### 1-1. CLASS제어모듈 작성 (함수형)
함수형으로 작성할경우 `hasClass()` 함수 안에 변수를 넣어서 실행.
#### hasClass( `el, class_name` )
- `el`의 클래스를 받아옴 : "class1 class2 class3" 형식.
- 받은 클래스를 쪼개 배열로 전환하고 `class_name` 이 포함되었나 확인
- return type : **boolean**
```js
코드코드
```
#### addClass( `el, class_name` )
- `class_name`추가, `el`의 기존class는 유지
- `el`에 `class_name`이 이미 있을시 무효
```js
코드코드
```
#### removeClass( `el, class_name` )
- `el`에 `class_name`이 있으면 삭제, 기존class는 유지
- `el`에 `class_name`이 없으면 무효
- `class_name`에 ***** 문자를 주거나 공백일 경우 모든 클래스를 삭제 : **||** 사용해 기본값으로 설정.
```js
코드코드
```
#### toggleClass( `el, class_name` )
- `el`에 `class_name`이  있으면 삭제, 없으면 추가.
- 메뉴의 활성화/비활성화에 사용됨
```js
코드코드
```
#### radioClass( `el, class_name` )
- radioGroup의 모든 요소에 사전 tagging필요(클래스, id등 써서 단체로 가져올 수 있게)
- radioGroup내 모든요소를 가져오고 `el`만 `class_name`을 추가하고, 나머지에선 제거
```js
코드코드
```
### 1-2 구형 브라우저 고려
브라우저가 **classList** 를 지원하는 경우/아닌경우를 나눠 조건분기.
```js
if( 'classList' in Element.prototype){
  hasClass = function(...){...}
  addClass = function(...){...}
  removeClass = function(...){...}
  toggleClass = function(...){...}
}
else{
  hasClass = function(...){...}
  addClass = function(...){...}
  removeClass = function(...){...}
  toggleClass = function(...){...}  
}
```
### 1-3 객체.prototype 확장형 작성방법 (=플러그인 코드라고도 부름)
- element.prototype 에 추가하면 `dom객체.hasclass(class_name)` 으로 사용
- this 를 이용
- add,remove,toggleClass는 **method chaining** 을 위해 자기 자신을 반환
- 예시이지, 브라우저 기본객체의 prototype 변경/추가는 권장하지 않음
```js
Element.prototype.radioClass = function(class_name){
  radioClass(this, class_name);
  return this;
}
또는 jQuery를 확장한다면?
jQuery.prototype.radioClass = function(class_name){
  this.addClass()
  return this;
};
// ```
$('nav a').on('click',function(e){
  e.preventDefault();
  $(this).radioClass('active')
});
$(this) 를 여러번 쓰게된다.

바로 함수에 넣어쓰는게 아니고 가져온 $를 each 로 순환하면 $()안써도돼서 괜춘.
var $nav_links = $

## 2. 포토슬라이드(carousel) 작성과 접근성
야무님 소스에 참조링크 포함하기
### 2-1 구현방식
#### 기능별 사용 엘리먼트
- 프레임   : article > 탭목록+실제화면+좌우이동
- 탭목록 버튼   : nav>ul>li*셀갯수 >a
- 탭 실제화면   : div > figure*셀갯수 >img
- 좌우이동 버튼 : div > button
### 2-2. 접근성 고려
```js

```
#### 키보드 포커싱 순서
- 목록UI 포커싱이 가장먼저 되어야 하므로 첫 마크업으로.
#### 포토슬라이드 프레임에 제목넣기
- article 요소사용, h로 제목주고, readable-hidden으로 감춤
#### 역할에 따라 요소 role속성 재정의
- nav와 li의 role 을 재정의(aria-label)
#### Non-mouse 탐색방법 구현 (JS사용)
- 화살표탐색가능, 이동시 뷰 함께 바뀜
- 마지막에 처음 순서로 돌아오기
