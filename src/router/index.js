import Router from 'vue-router'
import home from '../components/home/index.vue'
import Vue from 'vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/test',
      component: home
    }
  ]
})