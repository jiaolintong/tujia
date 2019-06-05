import Vue from 'vue'
import App from './App.vue'
import './common/style/reset.css'
import axios  from './common/utils/axios'
Vue.config.productionTip = false
Vue.prototype.$axios =axios
import  store from  './store/store'
//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('base/loading/loading.gif'),
  loading: require('base/loading/loading.gif'),
  attempt: 1
})


import router from './router'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
