import Vue from 'vue' // 뷰 코어
import Axios from 'axios' //AJAX 통신모듈
import VueRouter from 'vue-router' //라우팅모듈
import layout from './layout.vue' //메인 페이지 프레임
import rbl from './components/jsmodules.js' // 글로벌 유틸모듈 로드


//로드 확인
console.log("Vue :",Vue)
console.log("Axios :",Axios)
console.log("VueRouter :",VueRouter)
console.log("layout :",layout)
window.rbl=rbl // 디버그용
console.log("rbl.toggle : ",rbl.toggleClass)


//routing 라이브러리를 vue 에 등록
Vue.use(VueRouter)
//라우팅에 사용할 페이지 불러오기
import contents from './components/contents.vue'
import join from './components/join.vue'
import write from './components/write.vue'
const routes = [
  { path: '/', component: contents },
  { path: '/join', component: join},
  { path: '/write', component: write},
  { path: '*', component: {template: '<div style="text-align: center">page not found</div>'}},
]
// 설정한 경로들로 새로운 라우터 생성
const router = new VueRouter({
  routes
})


// vue 시작
new Vue({
  el: '#app',
  template: '<layout/>',
  components: { layout },
  router //등록된 라우터
})
