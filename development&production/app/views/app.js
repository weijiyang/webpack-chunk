import jquery from 'jquery'
import Vue from 'vue'
import router from './router.js'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUI)

import App from "./index.vue"
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
