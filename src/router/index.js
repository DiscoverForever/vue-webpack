import Router from 'vue-router'
import home from '../components/home'
import Vue from 'vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})