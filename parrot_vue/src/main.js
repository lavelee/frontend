import Vue from 'vue' // 뷰 코어
import Axios from 'axios' //AJAX 통신모듈
import VueAxios from 'vue-axios' //vue wrapper for axios
import VueRouter from 'vue-router' //라우팅모듈
import layout from './layout.vue' //메인 페이지 프레임


//로드 확인
// console.log("Vue :",Vue)
// console.log("Axios :",Axios)
// console.log("VueRouter :",VueRouter)
// console.log("layout :",layout)
// window.rbl=rbl // 디버그용
// console.log("rbl.toggle : ",rbl.toggleClass)
// console.log("this : ",this)


//routing 라이브러리를 vue 에 등록
Vue.use(VueRouter)
//라우팅에 사용할 페이지 불러오기
import Contents from './components/contents.vue'
import Join from './components/join.vue'
import Write from './components/write.vue'
const routes = [
  { path: '/', component: Contents },
  { path: '/join', component: Join},
  { path: '/write', component: Write},
  { path: '*', component: {template: '<div style="text-align: center">page not found</div>'}},
]
// 설정한 경로들로 새로운 라우터 생성
const router = new VueRouter({
  routes
})

//axios 라이브러리를 vue에 등록
Vue.use(VueAxios, Axios)
//axios test
// console.log("initiating axios")
// var api = parrot.server_dir+'/post/'
// Vue.axios.get(api).then((response) => {
//   console.log(response.data)
// })


window.eventbus=new Vue()

// vue 시작
new Vue({
  el: '#app',
  template: '<layout/>',
  components: { layout },
  props: ['axios', 'parrot'],
  router //등록된 라우터
})
