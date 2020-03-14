import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  // 存放公共数据的地方
    title: '', // 当前的标题
    list: [], // 当前的电影列表
    detail: null // detial表示是详情数据
  },
  mutations: {
    // 用来更新 status中的title和list
    // status是当前的状态对象 payload是提交mutation传过来的参数
    updateListAndTitle (state, payload) {
      // 直接对status的数据进行赋值即可
      state.title = payload.title // payload想是什么是什么
      state.list = payload.list // 接收载荷中的list
    },
    // 专门老更新 detail数据和标题
    updateDetail (state, payload) {
      state.title = payload.title
      state.detail = payload.detail
    }
  },
  // action可以做异步请求
  actions: {
    getList (store, type) {
    // 请求豆瓣的数据
      // json（url， opt（可选），callback）
      // 将这个请求变成活的
      // hot  /movie / top250 接口地址 除了 类型 返回结果全一样
      jsonp(`http://api.douban.com/v2/movie/${type}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false // 如果err存在表示出问题了 出篓子了不能继续了
        console.log(data)
        // 如果你action中的数据想要改state 必须通过mutations
        store.commit('updateListAndTitle', {
          title: data.title,
          list: data.subjects
        })
      })
    },
    // 定义一个action 来获取详情数据
    getDetail (store, id) {
      //  请求数据
      jsonp(`http://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false
        console.log(data)
        store.commit('updateDetail', {
          title: data.title,
          detail: data // 将整个的data作为载荷数据传递过去
        })
      })
    }
  },
  modules: {
  }
})
