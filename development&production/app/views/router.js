import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: require('@/app/views/index.vue').default
    },
    {
      path: '/webpack',
      name: 'webpack',
      component: () => import(/* webpackChunkName: "vue-webpack-ui" */ '@/app/views/webpack.vue')
    },
    {
      path: '/async',
      name: 'async',
      component: resolve => require.ensure([], () => resolve(require('@/app/views/async-charts.vue').default), 'async-charts')
    }
  ]
})
