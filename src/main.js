import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 创建完毕之后,将豆瓣静态资源的样式 放置在style中,并在main.js中引入
import '@/styles/css/global.css'
import '@/styles/fonts/iconfont.css'
import MovieList from '@/components/movie-list'
Vue.config.productionTip = false
Vue.component('movie-list', MovieList) // 全局注册组件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
