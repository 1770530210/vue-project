import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入ElementUI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)//虚拟Dom元素
}).$mount('#app')

// .$mount('#app')
// 等价于   el："#app"

/*
new Vue({
   el："#app",
  router,
  render: h => h(App)
})
*/