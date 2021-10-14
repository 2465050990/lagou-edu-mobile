import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 浏览器适配：引入 lib-flexible ⽤于设置 rem 基准值。
// postcss-pxtorem 是⼀款 postcss 插件，⽤于将单位转化为 rem
import 'amfe-flexible'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
