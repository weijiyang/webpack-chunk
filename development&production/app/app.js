import jquery from 'jquery'
import Vue from 'vue'
import elementUI from 'element-ui'
Vue.use(elementUI)

import App from "./views/index.vue"
console.log("hello vue")
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
