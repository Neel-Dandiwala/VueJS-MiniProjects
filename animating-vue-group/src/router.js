import Vue from 'vue'
import Router from 'vue-router'
import Modal from './views/Modal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modal',
      // @ts-ignore
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      // @ts-ignore
      component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
    },
    {
      path: '/drawer',
      name: 'drawer',
      // @ts-ignore
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Drawer.vue')
    }
  ]
})
